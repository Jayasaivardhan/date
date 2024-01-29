const express = require('express')
const addDays = require('date-fns/addDays')
let app = express()
app.get('/', (request, response) => {
  let dat = new Date()
  let result = addDays(new Date(dat.getFullYear(), dat.getMonth(), dat.getDate()),100)
  let res = `${result.getDate()}/${
    result.getMonth() + 1
  }/${result.getFullYear()}`;
  response.send(res);
})
app.listen(3000)
module.exports = app