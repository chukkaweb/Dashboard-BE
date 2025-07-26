# 🔧 Middleware Used

✅ **Built-in and External Middlewares**

---

## **express.json()**
Parses incoming JSON requests and makes it available in `req.body`.

### What it does:
- Parses incoming JSON data from the client into `req.body`.

### Example:
```javascript
app.use(express.json());

router.post('/user', (req, res) => {
    console.log(req.body.name); // Ganesh
});
```

---

## **cors**
Enables cross-origin requests so the Angular frontend can communicate with the backend.

---

## **helmet**
Adds security headers to protect against common web vulnerabilities.

### What it does:
- Adds security headers to your HTTP responses.

### Example:
```javascript
const helmet = require('helmet');
app.use(helmet());
```

### Why:
- Helps prevent cross-site scripting (XSS)
- Blocks sniffing attacks
- Secures cookies
- It’s like putting a helmet on your server!

---

## **dotenv**
Loads environment variables from a `.env` file into `process.env`.

### What it does:
- Loads environment variables from a `.env` file.

### Example:
```javascript
require('dotenv').config();
```

---

## **express.urlencoded({ extended: true })**
Parses URL-encoded form data (like from an HTML form).

### What it does:
- Parses URL-encoded data (form submissions).

### Example:
```javascript
app.use(express.urlencoded({ extended: true }));

// Form data sent from a form like:
<form method="POST">
    <input name="username" />
</form>

// Can be read using:
req.body.username;
```

---

### **Middleware Summary Table**

| Middleware             | Purpose                                | Example                    |
| ---------------------- | -------------------------------------- | -------------------------- |
| `express.json()`       | Parses JSON data                       | `req.body.name`            |
| `express.urlencoded()` | Parses form data                       | `req.body.username`        |
| `helmet`               | Adds security headers                  | Prevents XSS, clickjacking |
| `dotenv`               | Reads `.env` values into `process.env` | `process.env.PORT`         |
