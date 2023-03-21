const pincode = require('./index')

pincode.get('560010').then(record => {
  console.log(record)
})
