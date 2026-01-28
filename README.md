# 🎓 Student Management System (React)

A **Student Management System** built using **React.js** that allows users to **add, view, edit, and delete student records**.  
The project uses **LocalStorage** for data persistence and includes **toast notifications**, **responsive tables**, and **clean UI with Tailwind CSS**.

---

## 🚀 Features

- ➕ Add new students
- ✏️ Edit existing student details
- 🗑️ Delete students with instant feedback
- 📋 View all students in a responsive, scrollable table
- 🔔 Toast notifications using **Toastify JS**
- 💾 Data stored in **LocalStorage**
- 📱 Fully responsive design
- 🚫 Custom 404 (Not Found) page (without Navbar)

---

## 🛠️ Tech Stack

- **React.js**
- **React Router DOM**
- **Tailwind CSS**
- **Toastify JS**
- **LocalStorage**

---

## 📂 Project Structure

Student_Management/
│
├── src/
│ ├── components/
│ │ ├── Navbar.jsx
│ │ └── NotFound.jsx
│ │
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── AddStudent.jsx
│ │ ├── DisplayStudent.jsx
│ │ └── EditStudent.jsx
│ │
│ ├── utils/
│ │ └── toast.js
│ │
│ ├── App.jsx
│ └── main.jsx
│
├── public/
├── package.json
└── README.md



---

## 📦 Installation & Setup

1️⃣ **Clone the repository**
```bash
git clone https://github.com/priyalodha41/Student_Management.git
cd Student_Management
npm install
npm run dev

🔔 Toast Notifications

Toast notifications are implemented using Toastify JS and are triggered on:

Student added successfully

Student edited successfully

Student deleted successfully
