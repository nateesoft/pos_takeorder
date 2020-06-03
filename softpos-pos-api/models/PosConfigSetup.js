const db = require("../config")
const table_name = "posconfigsetup"

const PosConfigSetup = {
  getData: (callback) => {
    return db.query(`select P_Service, P_ServiceType, P_SerChkBySaleType, P_Vat, P_VatType from ${table_name}`,
      callback
    )
  },
}

module.exports = PosConfigSetup
