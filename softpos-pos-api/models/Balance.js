const pool = require("../config")
const Stock = require("./Stock")
const PosConfigSetupTask = require("./PosConfigSetup")
const Product = require("./Product")
const TextUtil = require("../utils")

const table_name = "balance"

const BalanceModel = {
  getIndexBalance: async (tableNo, callback) => {
    try {
      const sql = `select max(R_Index) R_Index from balance where R_Table = ? order by R_Index`
      const rows = await pool.query(sql, [tableNo])
      if (rows.length === 0) {
        const newIndex = tableNo.toUpperCase() + "/001"
        callback(null, newIndex)
      } else {
        rows.map((a) => {
          let newIndex = a.R_Index ? a.R_Index.split("/") : "0"
          const id = (parseInt(newIndex[1]) || 0) + 1
          if (id < 10) {
            newIndex = tableNo.toUpperCase() + "/00" + id
          } else if (id < 100) {
            newIndex = tableNo.toUpperCase() + "/0" + id
          } else if (id < 1000) {
            newIndex = tableNo.toUpperCase() + "/" + id
          }
          callback(null, newIndex)
        })
      }
    } catch (err) {
      callback(err, { status: "Error", msg: err.message })
    }
  },
  findAll: async (callback) => {
    return await pool.query(`select *  from ${table_name}`, callback)
  },
  findByTable: async (tableNo, callback) => {
    const sql = `select R_PluCode, R_PName, R_Price, sum(R_Quan) R_Quan, sum(R_Total) R_Total, R_ETD 
                 from ${table_name} b where b.R_Table ='${tableNo}' 
                 group by R_PluCode, R_PName, R_Price, R_Quan, R_Total, R_ETD`
    return await pool.query(sql, callback)
  },
  findByEmployee: async (empCode, callback) => {
    return await pool.query( `select *  from ${table_name} where r_emp='${empCode}'`, callback)
  },
  create: async (Balance, callback) => {
    const { emp, plucode, price, qty, macno } = Balance

    Stock.getStockName(plucode, macno, (err, rows) => {
      if (err) throw err
      if (rows.length === 0) {
        return BalanceModel.saveBalance(Balance, 'A1', callback)
      }
      rows.map((stock) => {
        Stock.updateSTKFileAdd(plucode, stock.StkCode, qty, (err1, rows1) => {
          if (err1) throw err1
          if (rows1.length === 0) {
            return BalanceModel.saveBalance(Balance, callback)
          }
          const currDate = new Date()
          const STCardBean = {
            S_No: `1 ${currDate.getHours()}:${currDate.getMinutes()}:${currDate.getSeconds()}`,
            S_SubNo: "",
            S_Que: 0,
            S_PCode: plucode,
            S_Stk: stock.StkCode,
            S_In: 0,
            S_Out: qty,
            S_InCost: 0,
            S_OutCost: qty * price,
            S_ACost: 0,
            S_Rem: "SAL",
            S_User: emp,
            S_Link: "",
          }
          Stock.saveSTCard(STCardBean, (err2, rows2) => {
            if (err2) throw err2
            return BalanceModel.saveBalance(Balance, stock.StkCode, callback)
          })
        })
      })
    })
  },
  empty: (callback) => {
    return pool.query(`delete from ${table_name}`, callback)
  },
  saveBalance: (balance, stk_code, callback) => {
    PosConfigSetupTask.getData((err, config) => {
      if (err) throw err
      if (config.length > 0) {
        const PosConfigSetup = config[0]
        // const P_Vat = PosConfigSetup.P_Vat
        const P_Service = PosConfigSetup.P_Service
        const P_SerChkBySaleType = PosConfigSetup.P_SerChkBySaleType

        Product.findByCode(balance.plucode, (err, rows) => {
          if (err) throw err
          if (rows.length > 0) {
            rows.map(async (product) => {
              const s_text = balance.s_text ? balance.s_text.split(",") : []
              let r_price = 0
              switch (balance.r_etd) {
                case "E":
                  r_price = product.PPrice11
                  break
                case "T":
                  r_price = product.PPrice12
                  break
                case "D":
                  r_price = product.PPrice13
                  break
                case "P":
                  r_price = product.PPrice14
                  break
                case "W":
                  r_price = product.PPrice15
                  break
                default:
                  r_price = product.PPrice11
              }
              const opt = ["", "", "", "", ""]
              s_text.map((data, id) => {
                opt[id] = TextUtil.convUnicode2Ascii(data)
              })
              const R_Index = balance.index
              const R_Table = balance.table
              const Macno = balance.macno
              const Cashier = ""
              const R_Emp = balance.emp
              const R_PluCode = balance.plucode
              const R_PName = product.PDesc
              const R_Unit = product.PUnit1
              const R_Group = product.PGroup
              const R_Status = product.PStatus
              const R_Normal = product.PNormal
              const R_Discount = product.PDiscount
              const R_Service = product.PService
              const R_Stock = product.PStock
              const R_Set = product.PSet
              const R_Vat = product.PVat
              const R_Type = product.PType
              const R_ETD = balance.r_etd
              const R_Quan = balance.qty
              const R_Price = r_price
              const R_Total = r_price * balance.qty
              const R_PEName = ""
              const R_PrType = ""
              const R_PrCode = ""
              const R_PrDisc = 0
              const R_PrBath = 0
              const R_PrAmt = 0
              const R_DiscBath = 0
              const R_PrCuType = ""
              const R_PrCuQuan = 0
              const R_PrCuAmt = 0
              const R_Redule = 0
              const R_Kic = product.PKic
              const R_KicPrint = ""
              const R_Void = ""
              const R_VoidUser = ""
              const R_VoidTime = ""
              const R_Opt1 = opt[0]
              const R_Opt2 = opt[1]
              const R_Opt3 = opt[2]
              const R_Opt4 = opt[3]
              const R_Opt5 = opt[4]
              const R_Opt6 = ""
              const R_Opt7 = ""
              const R_Opt8 = ""
              const R_Opt9 = ""
              const R_PrCuCode = ""
              const R_Serve = "N"
              const R_PrintOK = "Y"
              const R_KicOK = "N"
              const StkCode = stk_code
              const PosStk = "Y"
              const R_PrChkType = ""
              const R_PrQuan = 0
              const R_PrSubType = ""
              const R_PrSubCode = ""
              const R_PrSubQuan = 0
              const R_PrSubDisc = 0
              const R_PrSubBath = 0
              const R_PrSubAmt = 0
              const R_PrSubAdj = 0
              const R_PrCuDisc = 0
              const R_PrCuBath = 0
              const R_PrCuAdj = 0
              const R_QuanCanDisc = balance.qty
              const R_Order = "0"
              const R_PItemNo = 0
              const R_PKicQue = 0
              const R_MemSum = "N"
              const R_PrVcType = ""
              const R_PrVcCode = ""
              const R_PrVcAmt = 0
              const R_PrVcAdj = 0
              const R_VoidQuan = 0
              const R_MoveFlag = "0"
              const R_MovePrint = "N"
              const R_Pause = "P"
              const R_SPIndex = ""
              const R_LinkIndex = ""
              const R_VoidPause = ""
              const R_MoveItem = ""
              const R_MoveFrom = ""
              const R_MoveUser = ""
              const VoidMsg = ""
              const R_PrintItemBill = ""
              const R_CountTime = ""
              const SoneCode = ""
              const R_Earn = "N"
              const R_EarnNo = ""
              const PDAPrintCheck = "N"
              let R_ServiceAmt = 0
              const trantype = "PDA"

              if (R_Void !== "V" && R_Service === "Y" && P_SerChkBySaleType) {
                const [E, T, D] = P_SerChkBySaleType.split("/")
                if (
                  (R_ETD === "E" && E === "Y") ||
                  (R_ETD === "T" && T === "Y") ||
                  (R_ETD === "D" && D === "Y")
                ) {
                  R_ServiceAmt += (R_Total * P_Service) / 100
                  // vatAmt      += R_Total * P_Service / 100
                }
              }

              return await pool.query(
                `insert into ${table_name} 
            ( R_Index, R_Table, R_Date, R_Time, Macno,
              Cashier, R_Emp, R_PluCode, R_PName, R_Unit,
              R_Group, R_Status, R_Normal, R_Discount, R_Service,
              R_Stock, R_Set, R_Vat, R_Type, R_ETD,
              R_Quan, R_Price, R_Total, R_PEName, R_PrType,
              R_PrCode, R_PrDisc, R_PrBath, R_PrAmt, R_DiscBath,
              R_PrCuType, R_PrCuQuan, R_PrCuAmt, R_Redule, R_Kic,
              R_KicPrint, R_Void, R_VoidUser, R_VoidTime, R_Opt1,
              R_Opt2, R_Opt3, R_Opt4, R_Opt5, R_Opt6,
              R_Opt7, R_Opt8, R_Opt9, R_PrCuCode, R_Serve,
              R_PrintOK, R_KicOK, StkCode, PosStk, R_PrChkType,
              R_PrQuan, R_PrSubType, R_PrSubCode, R_PrSubQuan, R_PrSubDisc,
              R_PrSubBath, R_PrSubAmt, R_PrSubAdj, R_PrCuDisc, R_PrCuBath,
              R_PrCuAdj, R_QuanCanDisc, R_Order, R_PItemNo, R_PKicQue,
              R_MemSum, R_PrVcType, R_PrVcCode, R_PrVcAmt, R_PrVcAdj,
              R_VoidQuan, R_MoveFlag, R_MovePrint, R_Pause, R_SPIndex,
              R_LinkIndex, R_VoidPause, R_MoveItem, R_MoveFrom, R_MoveUser,
              VoidMsg, R_PrintItemBill, R_CountTime, SoneCode, R_Earn,
              R_EarnNo, PDAPrintCheck, R_ServiceAmt, trantype ) values 
              ( ?,?,curdate(),curtime(),?, ?,?,?,?,?, ?,?,?,?,?, ?,?,?,?,?, ?,?,?,?,?,
                ?,?,?,?,?, ?,?,?,?,?, ?,?,?,?,?, ?,?,?,?,?, ?,?,?,?,?,
                ?,?,?,?,?, ?,?,?,?,?, ?,?,?,?,?, ?,?,?,?,?, ?,?,?,?,?,
                ?,?,?,?,?, ?,?,?,?,?, ?,?,?,?,?, ?,?,?,?)`,
                [
                  R_Index,
                  R_Table,
                  Macno,
                  Cashier,
                  R_Emp,
                  R_PluCode,
                  R_PName,
                  R_Unit,
                  R_Group,
                  R_Status,
                  R_Normal,
                  R_Discount,
                  R_Service,
                  R_Stock,
                  R_Set,
                  R_Vat,
                  R_Type,
                  R_ETD,
                  R_Quan,
                  R_Price,
                  R_Total,
                  R_PEName,
                  R_PrType,
                  R_PrCode,
                  R_PrDisc,
                  R_PrBath,
                  R_PrAmt,
                  R_DiscBath,
                  R_PrCuType,
                  R_PrCuQuan,
                  R_PrCuAmt,
                  R_Redule,
                  R_Kic,
                  R_KicPrint,
                  R_Void,
                  R_VoidUser,
                  R_VoidTime,
                  R_Opt1,
                  R_Opt2,
                  R_Opt3,
                  R_Opt4,
                  R_Opt5,
                  R_Opt6,
                  R_Opt7,
                  R_Opt8,
                  R_Opt9,
                  R_PrCuCode,
                  R_Serve,
                  R_PrintOK,
                  R_KicOK,
                  StkCode,
                  PosStk,
                  R_PrChkType,
                  R_PrQuan,
                  R_PrSubType,
                  R_PrSubCode,
                  R_PrSubQuan,
                  R_PrSubDisc,
                  R_PrSubBath,
                  R_PrSubAmt,
                  R_PrSubAdj,
                  R_PrCuDisc,
                  R_PrCuBath,
                  R_PrCuAdj,
                  R_QuanCanDisc,
                  R_Order,
                  R_PItemNo,
                  R_PKicQue,
                  R_MemSum,
                  R_PrVcType,
                  R_PrVcCode,
                  R_PrVcAmt,
                  R_PrVcAdj,
                  R_VoidQuan,
                  R_MoveFlag,
                  R_MovePrint,
                  R_Pause,
                  R_SPIndex,
                  R_LinkIndex,
                  R_VoidPause,
                  R_MoveItem,
                  R_MoveFrom,
                  R_MoveUser,
                  VoidMsg,
                  R_PrintItemBill,
                  R_CountTime,
                  SoneCode,
                  R_Earn,
                  R_EarnNo,
                  PDAPrintCheck,
                  R_ServiceAmt,
                  trantype,
                ],
                callback
              )
            })
          }else {
            // not found product in pos
            console.error('not found proudct in pos db')
            callback(null, [])
          }
        }) // find product
      }else {
        // not found config
        console.error('not found product config file')
        callback(null, [])
      }
    }) // load posconfig
  },
}

module.exports = BalanceModel
