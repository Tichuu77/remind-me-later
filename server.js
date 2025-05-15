const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());  

 
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

 
const reminderRoutes = require('./routes/reminder');
app.use('/api/reminders', reminderRoutes);

 
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
