# Dashboard-BE

Using Node.js + Express + MongoDB + JWT

## 🧭 Agenda

To build a scalable backend using RESTful APIs with Node.js, Express, MongoDB Atlas, and JWT auth system — optimized for performance and secure access for both users and admins.

## 🧱 Technology Stack

- **Node.js** – Runtime for backend logic  
- **Express.js** – Framework for routing & middleware  
- **MongoDB Atlas** – Cloud-hosted NoSQL DB  
- **JWT** – Token-based authentication  
- **Mongoose** – ORM for MongoDB  
- **Bcrypt.js** – For password hashing  
- **Dotenv** – Environment variable management  

## 📂 Project Structure

```
backend/
├── config/              DB config, env variables
├── controllers/         Request handlers
├── models/              Mongoose schemas
├── routes/              API routes
├── middleware/          Auth, role guards, error handlers
├── utils/               Helper functions (e.g., email, SMS)
├── services/            Business logic & reusable code
├── validators/          Joi/Yup request validation
├── uploads/             Static file storage (if needed)
├── app.js               Main express app
└── server.js            Entry point
```

| Folder/File    | Description                                                                 |
| -------------- | --------------------------------------------------------------------------- |
| `config/`      | Environment setup, DB config, constants                                     |
| `controllers/` | Handles business logic (e.g., login, fetch stock data)                      |
| `middleware/`  | Auth checks, error handlers, logging                                        |
| `models/`      | Mongoose schemas for MongoDB collections                                    |
| `routes/`      | Route definitions (e.g., `/api/auth`, `/api/stocks`)                        |
| `services/`    | External integrations, reusable service logic (e.g., email, 3rd-party APIs) |
| `uploads/`     | Uploaded files (e.g., profile pics, CSVs)                                   |
| `utils/`       | Helper functions (e.g., date format, custom error builders)                 |
| `validators/`  | Request validations using libraries like `Joi`, `express-validator`, etc.   |
| `.gitignore`   | Files/folders to exclude from Git                                           |
| `app.js`       | Initializes express app, connects middleware & routes                       |
| `server.js`    | Starts server (e.g., `app.listen(...)`)                                     |
| `package.json` | Lists dependencies, scripts, and metadata                                   |
| `README.md`    | Docs about how to run/use the project                                       |

## What is Middleware (in Express)?

Middleware is a function that runs before your route handlers (like GET or POST).  
It can modify the request (`req`) or response (`res`), or even stop the request if needed.  
Think of it as a gatekeeper that checks, prepares, or protects your data before it goes to your main logic.

### You use middleware to:

- Add security (e.g., `helmet`)  
- Parse data (e.g., `express.json()`)  
- Log requests  
- Validate tokens  
- Handle errors  

## ⚙️ Installation & Setup

```bash
git clone https://github.com/chukkaweb/Dashboard.BE.git
cd backend
npm install
```

Create `.env` with:

```env
PORT=5000
MONGO_URI=your-mongodb-atlas-uri
JWT_SECRET=your_jwt_key
NODE_ENV=development
```

## Run the project:

```bash
npm run dev
```
