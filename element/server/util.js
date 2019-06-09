var dbConfig = require('./DBconfig')
const mysql = require('mysql')

module.exports = {
  // sql封装
  Usersql: function (sql, params, callback) {
    // 创建连接池
    var connection = mysql.createConnection(dbConfig.mysql)
    connection.connect((err) => {
      if (err) {
        console.log('连接数据库失败')
        throw err
      }
      connection.query(sql, params, (err, result) => {
        if (err) {
          console.log('搜索错误')
          throw err
        }
        // 返回查询结果
        callback && callback(JSON.stringify(result))
        // 关闭连接
        connection.end((err) => {
          if (err) {
            console.log('关闭连接失败')
            throw err
          }
        })
      })
    })
  }
}
