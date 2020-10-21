const db = require("../../config")
const table_name = "group_menu"

const GroupMenu = {
  findAll: (callback) => {
    return db.query(`select * from ${table_name} where status='Y' order by code`, callback)
  },
  updateMgr: (groupList, callback) => {
    db.query(`delete from ${table_name}`, (err, rows) => {
      if (err) throw err
      let finish = false
      if (groupList.length === 0) {
        finish = true
      }
      for(let i=0; i<groupList.length; i++) {
        const group = groupList[i]
        db.query(`insert into ${table_name} 
          (code, name, description, 
          status, created_at, updated_at) 
          values(
            '${group.code}', '${group.name}', '${group.description}', 
            'Y', curdate(), curdate()
          )`, (err1, rows1) => {
            if(err1) throw err1
          })

        if (i === groupList.length-1) {
          finish = true
        }
      }

      if (finish) {
        callback(null, groupList.length)
      }
    })
  }
}

module.exports = GroupMenu
