# Dashboard-BE
Using Node.js + Express + MongoDB + JWT)
## 🧭 Agenda
To build a scalable backend using RESTful APIs with Node.js, Express, MongoDB Atlas, and JWT auth system — optimized for performance and secure access for both users and admins.

## 🧱 Technology Stack
Node.js – Runtime for backend logic
Express.js – Framework for routing & middleware
MongoDB Atlas – Cloud-hosted NoSQL DB
JWT – Token-based authentication
Mongoose – ORM for MongoDB
Bcrypt.js – For password hashing
Dotenv – Environment variable management  —> cross check 

## 📂 Project Structure
backend/
├── config/              DB config, env variables
├── controllers/         Request handlers
├── models/              Mongoose schemas
├── routes/                  API routes
├── middleware/          Auth, role guards, error handlers
├── utils/               Helper functions (e.g. email, SMS)
├── services/            Business logic & reusable code
├── validators/          Joi/Yup request validation
├── uploads/             Static file storage (if needed)
├── app.js               Main express app
└── server.js            Entry point

## ⚙️ Installation & Setup
git clone <repo_url>
cd backend
npm install

Create `.env` with:
PORT=5000
MONGO_URI=your-mongodb-atlas-uri
JWT_SECRET=your_jwt_key
NODE_ENV=development

## Run the project:
bash
npm run dev
