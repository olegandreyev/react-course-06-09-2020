// docker run --name social-network-mongo -d -p 27017:27017  mongo
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb+srv://server:12345@cluster0.4z1ho.mongodb.net/lektion8?retryWrites=true&w=majority',
  {useNewUrlParser: true, useUnifiedTopology: true}
  );
