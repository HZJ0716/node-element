const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./util')

app.use(cors()) // CORS跨域
app.use(express.json()) // 接受传过来的json数据

app.get('/', async (req, res) => {
  res.send('index')
})

// 番剧查询
app.post('/api/search', async (req, res) => {
  let params = req.body.input
  let index = req.body.currentPage * 10
  let data = []
  let s = /\s/g
  let qu = s.test(params)
  let sql = ' select * from (select * from fanju  where title like "%' + params + '%" UNION select * from china  where title like "%' + params + '%") as data limit ' + index + ',10'
  if (!qu && params.length) {
    db.Usersql(sql, [params], (result) => {
      data[0] = result
      sql = 'select count(*) as total from (select * from fanju  where title like "%' + params + '%" UNION select * from china  where title like "%' + params + '%") as total'
      db.Usersql(sql, [params], (result) => {
        data[1] = result
        res.send(data)
      })
    })
  }
})

// 番剧修改
app.post('/api/upd', async (req, res) => {
  let params = [req.body.data.main, req.body.data.imgs, req.body.data.num, req.body.data.name, req.body.data.plays, req.body.data.score, req.body.data.link, req.body.index]
  let sql = 'update ' + req.body.listname + ' SET badge = ?,imgCover = ?,follow = ?,title = ?,play = ?,score = ?,link = ? WHERE id = ?'
  db.Usersql(sql, params, (result) => {
    res.send('修改成功')
  })
})

// 番剧删除
app.post('/api/del', async (req, res) => {
  let params = req.body.index.id
  let listname = req.body.listname
  let sql = 'DELETE FROM ' + listname + ' where id=' + params
  db.Usersql(sql, [params], (result) => {
    res.send('删除成功')
  })
})

// 番剧添加
app.post('/api/add', async (req, res) => {
  let params = [req.body.main, req.body.imgs, req.body.num, req.body.name, req.body.plays, req.body.score, req.body.link]
  let sql = 'INSERT INTO ' + req.body.class + ' (badge,imgCover,follow,title,play,score,link) VALUES (?,?,?,?,?,?,?)'
  db.Usersql(sql, params, (result) => {
    res.send('添加成功')
  })
})

// 分页
app.post('/api/total', async (req, res) => {
  let listname = req.body.listname
  let sql = 'select count(*) as total from ' + listname
  db.Usersql(sql, [], (result) => {
    res.send(result)
  })
})

app.post('/api/page', async (req, res) => {
  let index = req.body.currentPage * 10
  let listname = req.body.listname
  let sql = 'select * from ' + listname + ' limit ' + index + ',10'
  db.Usersql(sql, [], (result) => {
    res.send(result)
  })
})

app.listen(3001, () => {
  console.log('http://localhost:3001/')
})
