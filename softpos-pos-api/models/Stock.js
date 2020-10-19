const pool = require("../config")
const table_name = "stockfile"

const Stock = {
  getStockName: async (pCode, macNo, callback) => {
      let stockName = ''
      await pool.query(`select PCode,PGroup,PDesc,POSStk, MSStk 
      from product where PActive = 'Y' and PStock = 'Y' and PCode = ?`, 
      [pCode], async (err, results, fields) => {
        if (err) throw err
        if (results.length === 0) {
            return await pool.query(`select PCode,PGroup,PDesc,POSStk, MSStk 
            from product where PActive = 'Y' and PStock = 'Y' and PCode = ?`, 
            [pCode],callback)
        }
        results.map(async row => {
            switch (row.POSStk) {
                case '0':
                    console.log('คลังหลัก ถูกกำหนดโดยตรงจาก Company')
                    await pool.query(`select PosStock from company`, (err0, results0, fields0) => {
                        if (err0) throw err0
                        results0.map(async row0 => {
                            stockName = row0.PosStock
                            return await pool.query(`select *  from ${table_name} where StkCode = ?`, [stockName], callback)
                        })
                    })
                    break;
                case '1':
                    console.log('คลังเลือก ถูกกำหนดโดยแต่ละสาขา ซึ่งจะแยกเป็น ตัดตามสต็อกที่กำหนดโดย Table/POS')
                    await pool.query(`select PSelectStk from branch`, (err1, results1, fields1) => {
                        if (err1) throw err1
                        results1.map(async row1 => {
                            switch (row1.PSelectStk) {
                                case 'P':
                                    await pool.query(`select TStock from poshwsetup where Terminal = ?`, 
                                    [macNo], (err11, results11, fields11) => {
                                        if (err11) throw err11
                                        results11.map(async row11 => {
                                            stockName = row11.TStock
                                            return await pool.query(`select *  from ${table_name} where StkCode = ?`, [stockName], callback)
                                        })
                                    })
                                    break;
                                case 'T':
                                    await pool.query(`select Tcode, StkCode1, StkCode2 
                                    from tablefile where Tcode= = ?`, 
                                    [macNo], (err11, results11, fields11) => {
                                        if (err11) throw err11
                                        results11.map(async row11 => {
                                            if (row11.StkCode1 !== '') {
                                                stockName = row11.StkCode1
                                                return await pool.query(`select *  from ${table_name} where StkCode = ?`, [stockName], callback)
                                            } else {
                                                stockName = row11.StkCode2
                                                return await pool.query(`select *  from ${table_name} where StkCode = ?`, [stockName], callback)
                                            }
                                        })
                                    })
                                    break;
                                default:
                                    break;
                            }
                        })
                    })
                    break;
                case '2':
                    console.log('คลังย่อย แต่ละสินค้าจะเป็นตัวกำหนดคลังในการตัดสต็อกเอง')
                    stockName = row.MSStk
                    return await pool.query(`select *  from ${table_name} where StkCode = ?`, [stockName], callback)
                default:
                    break;
            }
        })
    })
  },
  updateSTKFileAdd: async (bpCode, stockCode, qty, callback) => {
    const month = 12 + new Date().getMonth() + 1
    await pool.query(`select BPCode from stkfile where BPCode = ? and BStk = ?`, 
    [bpCode, stockCode], 
    async (err, results, fields) => {
        if (err) throw err
        results.map(async row => {
            const strBqtyCol = `BQty${month}`
            const strBqtyData = `BQty${month}-${qty}`
            return await pool.query(`UPDATE stkfile set ${strBqtyCol}=${strBqtyData} where BPCode=? and BStk=?`,
            [bpCode, stockCode], callback)
        })
        if (results.length === 0) {
            const strBqtyCol = `BQty${month}`
            return await pool.query(`INSERT INTO stkfile (BPCode, BStk, ${strBqtyCol}) 
                values(?, ?, ${strBqtyCol}-${qty})`, [bpCode, stockCode], callback)
        }
    })
  },
  saveSTCard: async (STCardBean, callback) => {
      const {
        S_No, S_SubNo, S_Que, S_PCode, S_Stk, S_In, S_Out, S_InCost, S_OutCost,
        S_ACost, S_Rem, S_User, S_Link
      } = STCardBean

      return await pool.query(
        `insert into stcard 
        (S_Date, S_No, S_SubNo, S_Que, S_PCode, S_Stk, S_In, S_Out, S_InCost, S_OutCost,
        S_ACost, S_Rem, S_User, S_EntryDate, S_Link) 
        values (now(), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, now(), ?) `, 
        [S_No, S_SubNo, S_Que, S_PCode, S_Stk, S_In, S_Out, S_InCost, S_OutCost,
        S_ACost, S_Rem, S_User, S_Link], 
        callback)
  }
}

module.exports = Stock
