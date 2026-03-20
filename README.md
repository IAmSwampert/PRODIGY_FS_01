# 🔐 MERN Authentication System

A secure user authentication system built using the MERN stack. This project includes user registration, login functionality, and protected routes using JWT authentication.

---

## 🚀 Features

- 👤 User Registration with encrypted passwords (bcrypt)
- 🔐 Secure Login with JWT authentication
- 🛡️ Protected routes using middleware
- ⚡ Fast and scalable backend using Express
- ❌ Error handling and validation

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JSON Web Tokens (JWT), bcrypt  

---

## 📁 Project Structure


MERN-Auth/
│
├── models/
│ └── User.js
│
├── routes/
│ └── auth.js
│
├── middleware/
│ └── auth.js
│
├── config/
│ └── db.js
│
├── .env
├── server.js
└── package.json


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository


git clone https://github.com/your-username/PRODIGY_WD_02.git


### 2️⃣ Navigate to project folder


cd PRODIGY_WD_02


### 3️⃣ Install dependencies


npm install


### 4️⃣ Create a .env file

Add the following:


MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000


### 5️⃣ Run the server


npm start


Server will run on:
👉 http://localhost:5000

---

## 🔑 API Endpoints

### 📌 Register User
- **POST** `/api/auth/register`

### 📌 Login User
- **POST** `/api/auth/login`

### 📌 Protected Route
- **GET** `/api/protected`
- Requires JWT token in headers

---

## 🧠 What I Learned

- How JWT authentication works
- Securing passwords using bcrypt
- Creating middleware for protected routes
- Building REST APIs using Express
- Handling authentication flow in MERN stack

---

## 📌 Future Improvements

- Add frontend (React)
- Implement refresh tokens
- Add role-based authentication
- Improve UI/UX

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repository and submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---

## ⭐ Show Your Support

If you found this project helpful, please give it a ⭐ on GitHub!
