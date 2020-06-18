const db = require("../../config")
const table_name = "product_menu"

const ProductMenu = {
  search: (searchTxt, callback) => {
    return db.query(
      `select * from ${table_name} where name like '%${searchTxt}%' and status = 'Y'`,
      callback
    )
  },
  findAll: (callback) => {
    return db.query(`select * from ${table_name}`, callback)
  },
  findByCode: (code, callback) => {
    return db.query(
      `select * from ${table_name} where code=? and status='Y'`,
      [code],
      callback
    )
  },
  findByGroup: (group_code, callback) => {
    return db.query(
      `select * from ${table_name} where group_code=? and status='Y'`,
      [group_code],
      callback
    )
  },
  findByGroupAndProduct: (group_code, product_code, callback) => {
    return db.query(
      `select * from ${table_name} where group_code=? and code=? and status='Y'`,
      [group_code, product_code],
      callback
    )
  },
  showRecommend: (callback) => {
    return db.query(
      `select * from ${table_name} where show_recommend='Y' and status='Y' order by code`,
      callback
    )
  },
  updateMgr: (productList, group, callback) => {
    db.query(`delete from ${table_name} where group_code='${group}'`, (err, rows) => {
      if (err) throw err
      let finish = false
      if (productList.length === 0) {
        finish = true
      }
      for (let i=0; i<productList.length; i++) {
        const product = productList[i]
        db.query(`insert into ${table_name} 
          (code, code_key, name, description, price,
          group_code, img_url, img_url_thumbnail, status, star_count,
          show_recommend, created_at, updated_at, show_sublist, img_host) 
          values(
            '${product.code}', '', '${product.name}', '${product.description}', '${product.price}',
            '${product.group_code}', '${product.img_url}', '${product.img_url_thumbnail}', 'Y', '0',
            'N', curdate(), curdate(), 'N', '${product.img_host}')`, 
            (err1, rows1) => {
            if(err1) throw err1
          })
        
        if (i === productList.length-1) {
          finish = true
        }
      }

      if (finish) {
        callback(null, productList.length)
      }
    })
  }
}

module.exports = ProductMenu
