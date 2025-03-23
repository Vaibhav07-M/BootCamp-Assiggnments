# Login and Signup App with React, Express, and MongoDB

This project is a complete implementation of a Login and Signup application using React (frontend), Express (backend), and MongoDB (database). Follow the steps below to set up and run the project on your local machine.

---

## Features

- **Frontend**: Built with React using Vite for fast development.
- **Backend**: Created with Express.js and connected to MongoDB.
- **Password Encryption**: Uses bcrypt.js to securely hash user passwords.
- **Form Validation**: Ensures unique entries (username, email, phone) during signup.
- **API**: Provides RESTful endpoints for user registration and login.

---

## Prerequisites

- Node.js (Download from [Node.js](https://nodejs.org/))
- A MongoDB Atlas account (or install MongoDB locally)

---

## Project Structure

Mern-Login/
├── backend/
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── auth.js
│   ├── .env
│   ├── server.js
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── AuthPage.jsx
    │   │   ├── Signup.jsx
    │   │   ├── Login.jsx
    │   │   └── Dashboard.jsx
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    └── vite.config.js

# Backend Setup

1. Initialize the Backend: Navigate to the `backend` folder and initialize a Node.js project:
   cd backend
   npm init -y

2. Install Dependencies: Install the required packages:
   npm install express mongoose bcryptjs cors dotenv

3. Create `.env` File: In the `backend` folder, create a `.env` file with the following content:
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   Replace `your_mongodb_connection_string` with your MongoDB URI from MongoDB Atlas or your local database connection string, e.g., mongodb://localhost:27017/your_database.

4. Create the User Model: Create a file at `backend/models/User.js` and add the following code:
   const mongoose = require('mongoose');

   const userSchema = new mongoose.Schema({
       username: { type: String, unique: true, required: true },
       email: { type: String, unique: true, required: true },
       phone: { type: String, unique: true, required: true },
       password: { type: String, required: true }
   });

   const User = mongoose.model('User', userSchema);
   module.exports = User;

# Full Application Setup

## Backend Setup

1. Start the Backend Server: 
   In the terminal (inside the `backend` folder), run:
   node server.js
   You should see messages indicating that the server is connected to MongoDB and running on the specified port.

## Frontend Setup

1. Initialize and Install Dependencies: 
   Navigate to the `frontend` directory, then install dependencies:
   cd frontend
   npm install
   npm install bcryptjs react-router-dom

2. Start the Frontend Development Server: 
   Start the Vite React server:
   npm run dev

## Testing the App

1. Open your browser and navigate to `http://localhost:5173` (or the URL provided by Vite).
2. Register a new user using the signup page. All fields (`username`, `email`, `phone`) must be unique.
3. Log in using any of your registered credentials (`username`, `email`, or `phone`) along with the corresponding password.

## Example Environment Variables for Backend

Add the following content to your `.env` file:
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/mydatabase?retryWrites=true&w=majority
PORT=5000
Replace `<username>`, `<password>`, and `mydatabase` with your actual details.

## Notes

- Make sure to replace `your_mongodb_connection_string` in the `.env` file with your actual MongoDB connection string.
- If you prefer running a local instance of MongoDB, use a URI like `mongodb://localhost:27017/your_database` in the `.env` file.
- Ensure both the backend and frontend servers are running simultaneously to test full functionality.
