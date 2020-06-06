const db = require("../config")
const table_name = "tablefile"
const PosConfigSetupTask = require('./PosConfigSetup')
const BalanceTask = require('./Balance')

const Tablefile = {
  resetTableFile: (callback => {
    db.query(`update tablefile 
      set Cashier='',TOnAct='N',TCustomer=0,
      TItem=0,TAmount=0,Service=0,ServiceAmt=0,
      EmpDisc='',EmpDiscAmt=0,FastDisc='',FastDiscAmt=0,
      TrainDisc='',TrainDiscAmt=0,MemDisc='',MemDiscAmt=0,
      SubDisc='',SubDiscAmt=0,DiscBath=0,ProDiscAmt=0,
      SpaDiscAmt=0,CuponDiscAmt=0,ItemDiscAmt=0,
      MemCode='',MemCurAmt=0,MemName='',
      Food=0,Drink=0,Product=0,NetTotal=0,
      PrintTotal=0,PrintChkBill='N',PrintCnt=0,
      PrintTime1='',PrintTime2='',
      ChkBill='N',StkCode1='',StkCode2='',
      TDesk=0,TUser='',VoidMsg='',TPause=''`, (err, rows)=>{
        if (err) throw err
        return db.query(`delete from balance`, callback)
      })
  }),
  update: (tableFile, callback) => {
    const { table_code, cust_count, macno, emp_code }= tableFile
    return db.query(
      `update ${table_name} 
      set TCustomer=?, TOnAct='Y', macno=?, TLoginDate=curdate(), TLoginTime=curtime(), TUser=? 
      where Tcode=?`,
      [cust_count, macno, emp_code, table_code],
      callback
    )
  },
  logoutTable: (table_code, callback) => {
    return db.query(`update ${table_name} set TOnAct='N' where Tcode=?`, [table_code], callback)
  },
  updateTotal: (tableNo, callback) => {
    Tablefile.getBalanceTotalAmt(tableNo, (err, { balanceAmt, serviceAmt, vatAmt, P_Service, P_Vat }) => {
      if (err) throw err
      return db.query(
        `update ${ table_name } set 
        TOnAct='N', Service = ?, ServiceAmt = ?, TAmount = ?, NetTotal = ?
        where Tcode=?`, 
        [P_Service, serviceAmt, (balanceAmt + serviceAmt), (balanceAmt + serviceAmt + vatAmt), tableNo],
        callback
      )
    })
  },
  findAll: (callback) => {
    return db.query(
      `select Tcode, TUser, TLoginDate, SoneCode, MacNo, Cashier, TCustomer, 
      TOnAct, ChkBill, NetTotal 
      from ${table_name} order by SoneCode, Tcode`,
      callback
    )
  },
  findEmptyAll: (callback) => {
    return db.query(
      `select Tcode, TUser, TLoginDate, SoneCode, MacNo, Cashier, TCustomer, 
      TOnAct, ChkBill, NetTotal 
      from ${table_name} 
      where TCustomer = 0 and NetTotal = 0 order by SoneCode, Tcode`,
      callback
    )
  },
  searchTable: (table_code, callback) => {
    return db.query(
      `select Tcode, TUser, TLoginDate, SoneCode, MacNo, Cashier, TCustomer, 
      TOnAct, ChkBill, NetTotal 
      from ${table_name} where Tcode like '%${table_code}%'`,
      callback
    )
  },
  findByTCode: (table_code, callback) => {
    return db.query(`select * from ${table_name} where Tcode = ?`, [table_code], callback)
  },
  zoneTable: (callback) => {
    return db.query(
      `select SoneCode from ${table_name} group by SoneCode order by SoneCode`,
      callback
    )
  },
  findByZone: (zone_code, callback) => {
    return db.query(
      `select Tcode, TUser, SoneCode, MacNo, Cashier, TCustomer, TOnAct, ChkBill from ${table_name} where SoneCode=? order by tcode`,
      [zone_code],
      callback
    )
  },
  getBalanceTotalAmt: (table_code, callback) => {
    PosConfigSetupTask.getData((err, config) => {
      if (err) throw err
      if (config.length > 0) {
        BalanceTask.findByTable(table_code, (err1, rows) => {
            if (err1) throw err1
            let balanceAmt = 0
            let serviceAmt = 0
            let vatAmt = 0
            const PosConfigSetup = config[0]
            const P_Vat = PosConfigSetup.P_Vat
            const P_Service = PosConfigSetup.P_Service
            const P_SerChkBySaleType = PosConfigSetup.P_SerChkBySaleType
            if(rows.length > 0) {
              rows.forEach(balance => {
                if (balance.R_Void !== 'V') {
                  balanceAmt  += balance.R_Total
                  // vatAmt      += balance.R_Total * P_Vat / 100
                  if (balance.R_Service === 'Y' && P_SerChkBySaleType) {
                    const [ E, T, D, P, W ] = P_SerChkBySaleType.split('/')
                    if ((balance.R_ETD === 'E' && E === 'Y')||
                        (balance.R_ETD === 'T' && T === 'Y')||
                        (balance.R_ETD === 'D' && D === 'Y')) {
                      serviceAmt  += balance.R_Total * P_Service / 100
                      // vatAmt      += balance.R_Total * P_Service / 100
                    }
                  }
                }
              });
              callback(null, { balanceAmt, serviceAmt, vatAmt, P_Service, P_Vat  })
            }
          }
        )
      }
    })
  },
}

module.exports = Tablefile
