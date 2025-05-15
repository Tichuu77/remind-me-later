# 📌 Remind-Me-Later API

This is a simple backend API built with **Node.js**, **Express**, and **MongoDB** that allows users to set future reminders via **SMS** or **Email**.

---

## 🔧 Features

- Set a reminder with:
  - 📅 Date (`YYYY-MM-DD`)
  - ⏰ Time (`HH:MM`)
  - 📝 Message
  - ✉️ Method (`sms` or `email`)
- Validates:
  - All fields are required
  - Date/time format
  - Future date/time
  - Max message length (200 characters)
- Stores reminders in MongoDB

---

## 📁 Folder Structure
reminder/
├── models/
│ └── Reminder.js # Mongoose schema
├── routes/
│ └── reminder.js # POST /api/reminders
├── .env # Environment variables
├── .gitignore # Ignored files
├── server.js # App entry point
├── package.json
└── README.md


---

## ⚙️ Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- dotenv

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/reminder-api.git
cd reminder-api

2. Install dependencies
npm install

3. Setup environment variables
Create a .env file in the root:
PORT=5000
MONGO_URI=your_mongodb_connection_string

4. Run the server
npm start
Server will start on http://localhost:5000

📬 API Endpoint
POST /api/reminders
Request Body:
{
  "date": "2025-06-01",
  "time": "14:30",
  "message": "Doctor appointment",
  "method": "email"
}
Success Response:
{
  "success": true,
  "message": "Reminder saved successfully",
  "data": {
    "_id": "abc123",
    "date": "2025-06-01",
    "time": "14:30",
    "message": "Doctor appointment",
    "method": "email",
    "createdAt": "2025-05-15T07:30:00.000Z"
  }
}
Possible Errors:
Missing fields

Invalid date/time

Reminder in the past

Message too long

Invalid method (must be sms or email)

✅ Future Enhancements
🔔 Add SMS/Email sending functionality

📋 View all reminders (GET endpoint)

🔐 Add user login & auth

📝 License
Free to use and modify. Made with ❤️ by Akash.

 
---

✅ Just paste this into your `README.md` — GitHub will render it beautifully with all the emojis and formatting.

Let me know if you want to add deployment instructions or screenshots!








