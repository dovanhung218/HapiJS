const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/testdb', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
})
  .then(() => console.log('Database is Connected'))
  .catch(err => console.log(err));