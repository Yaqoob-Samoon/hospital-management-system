🏥 ZeeCare - Hospital Management System (MERN Stack)

A comprehensive, full-stack Hospital Management System designed to streamline healthcare operations. This application provides a secure, role-based ecosystem with separate dashboards for Administrators, Doctors, and Patients to manage appointments, schedules, and medical data seamlessly.

🚀 Key Features

🔐 Secure Authentication: Robust user authentication and login logic utilizing JSON Web Tokens (JWT), secure HTTP-only cookies, and Bcrypt password encryption.

👥 Role-Based Access Control (RBAC): Three distinct, protected dashboards:

Admin Panel: Track patient appointments, manage doctor schedules in real-time, and add new staff.

Doctor Panel: View assigned appointments and manage patient interactions.

Patient Interface: Browse hospital departments, view doctors, and book appointments securely.

📅 Appointment Management: Real-time tracking and scheduling system for patient bookings.

☁️ Cloud Integration: Integrated with the Cloudinary API to efficiently handle user profile image uploads and securely store medical-related media.

⚡ Modern Frontend: Built with React and Vite for a fast, responsive user interface.

🛠️ Tech Stack

Frontend:

React.js (Vite)

JavaScript (ES6+)

HTML5 & CSS3

Axios (Network Requests)

Backend:

Node.js

Express.js

RESTful API Architecture

JWT (Authentication)

Cloudinary (Image Hosting)

Database:

MongoDB

Mongoose (ODM)

💻 Installation & Setup

1. Clone the repository

git clone https://github.com/Yaqoob-Samoon/hospital-management-system.git
cd hospital-management-system


2. Environment Variables

You will need to create a .env file in the root of the backend directory with the following variables:

PORT=4000
MONGO_URI=your_mongodb_connection_string
FRONTEND_URL=http://localhost:5173
DASHBOARD_URL=http://localhost:5174
JWT_SECRET_KEY=your_secret_key
JWT_EXPIRES=7d
COOKIE_EXPIRE=7
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_secret


3. Install Dependencies & Run

You need to run three separate servers for this project (Backend, Frontend, and Dashboard). Open three terminal instances:

Terminal 1: Backend

cd backend
npm install
npm start


Terminal 2: Frontend (Patient App)

cd frontend
npm install
npm run dev


Terminal 3: Dashboard (Admin App)

cd dashboard
npm install
npm run dev


👨‍💻 Author

Yaqoob Samoon

LinkedIn: linkedin.com/in/yaqoob-samoon

GitHub: github.com/Yaqoob-Samoon
