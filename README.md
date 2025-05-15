📌 Remind-Me-Later API
This is a simple backend API built with Node.js, Express, and MongoDB that allows users to set future reminders via SMS or Email.

🛠 Features
Set a reminder with:

Date (YYYY-MM-DD)

Time (HH:MM)

Message

Delivery method (sms or email)

Validates that:

All fields are required

Date and time must be in valid formats

Reminder time must be in the future

Message should be less than 200 characters

Stores reminders in MongoDB

📁 Folder Structure
bash
Copy
Edit
reminder/
├── models/
│   └── Reminder.js         # Mongoose schema
├── routes/
│   └── reminder.js         # POST /api/reminders route
├── .env                    # Environment variables
├── .gitignore              # Ignored files
├── server.js               # App entry point
├── package.json
└── README.md
⚙️ Technologies Used
Node.js

Express.js

MongoDB + Mongoose

dotenv

📦 Installation & Setup
Clone the repo

bash
Copy
Edit
git clone https://github.com/your-username/reminder-api.git
cd reminder-api
Install dependencies

bash
Copy
Edit
npm install
Configure environment variables

Create a .env file in the root:

ini
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
Start the server

bash
Copy
Edit
npm start
Server will run at: http://localhost:5000

📬 API Endpoint
POST /api/reminders
Create a new reminder

Request Body
json
Copy
Edit
{
  "date": "2025-06-01",
  "time": "14:30",
  "message": "Doctor appointment",
  "method": "email"
}
Success Response
json
Copy
Edit
{
  "success": true,
  "message": "Reminder saved successfully",
  "data": {
    "_id": "...",
    "date": "2025-06-01",
    "time": "14:30",
    "message": "Doctor appointment",
    "method": "email",
    "createdAt": "..."
  }
}
Error Responses
Missing fields

Invalid date/time format

Past date/time

Message over 200 characters

Invalid method

✅ To Do (Optional Enhancements)
Add actual SMS/Email delivery integration

Add GET endpoints to list reminders

Add user authentication

📝 License
This project is open-source and free to use.

