const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://mkirtan013:KvJNO0YeJrikMEFt@cluster0.egcsg.mongodb.net/Movies-management-system')
  .then(() => console.log('DataBase is Connected successFully...'))
  .catch((err) => {
    console.log('error', err);
  });

module.exports = mongoose;
