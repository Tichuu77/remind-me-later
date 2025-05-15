const express = require('express');
const Reminder = require('../models/Reminder.js');
const router = express.Router();

// POST /api/reminders
router.post('/', async (req, res) => {
  if(!req.body) {
   return res.status(400).json({ 
    success: false, 
    message: 'Request body is required', 
    error: 'Request body is required' 
   });
  }
  const { date, time, message, method } = req.body;
 
  if (!date || !time || !message || !method) {
   return res.status(400).json({ 
    success: false, 
    message: 'All fields are required', 
    error: 'All fields are required' 
   });
  }
  if (!['sms', 'email'].includes(method.toLowerCase())) {
   return res.status(400).json({ 
    success: false, 
    message: 'Method must be either sms or email', 
    error: 'Method must be either sms or email' 
   });
  }

  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;  
  const timeRegex = /^\d{2}:\d{2}$/;  
  if (!dateRegex.test(date)) {
   return res.status(400).json({ 
    success: false, 
    message: 'Date must be in YYYY-MM-DD format', 
    error: 'Date must be in YYYY-MM-DD format' 
   });
  }
  
  const dateObj = new Date(date);
  if (isNaN(dateObj.getTime())) {
   return res.status(400).json({ 
    success: false, 
    message: 'Invalid date', 
    error: 'Invalid date' 
   });
  }
  const now = new Date();
  // Combine date and time into a single Date object for comparison
  const [inputHours, inputMinutes] = time.split(':').map(Number);
  const reminderDateTime = new Date(dateObj);
  reminderDateTime.setHours(inputHours, inputMinutes, 0, 0);
  if (reminderDateTime <= now) {
    return res.status(400).json({ 
      success: false, 
      message: 'Reminder date and time must be in the future', 
      error: 'Reminder date and time must be in the future' 
    });
  }
  
  if (!timeRegex.test(time)) {
   return res.status(400).json({ 
    success: false, 
    message: 'Time must be in HH:MM format', 
    error: 'Time must be in HH:MM format' 
   });
  }
   
  const [hours, minutes] = time.split(':').map(Number);
  if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
   return res.status(400).json({ 
    success: false, 
    message: 'Invalid time', 
    error: 'Invalid time' 
   });
  }


  if (message.length > 200) {
   return res.status(400).json({ 
    success: false, 
    message: 'Message must be less than 200 characters', 
    error: 'Message must be less than 200 characters' 
   });
  }

  try {
   const newReminder = new Reminder({ date, time, message, method:method.toLowerCase() });
   await newReminder.save();
   res.status(201).json({ 
    success: true, 
    message: 'Reminder saved successfully', 
    data: newReminder 
   });
  } catch (err) {
   res.status(500).json({ 
    success: false, 
    message: 'Something went wrong', 
    error: err.message 
   });
  }
});

module.exports = router;
