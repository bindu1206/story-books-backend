# Story Books Backend

A backend learning project — Story Books CRUD application with Google OAuth using **Node.js, Express, MongoDB, Passport.js and Handlebars**.  
Users can log in with Google, create public or private stories, edit and delete their own stories, and view public stories posted by others.

---

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| Node.js | Runtime |
| Express.js | Backend framework |
| MongoDB + Mongoose | Database & ORM |
| Passport.js (Google OAuth) | Authentication |
| Express-Handlebars | View template engine |
| CKEditor | Rich text editor |
| Method-Override | PUT & DELETE in forms |

---

## Getting Started (Clone, Setup, Run)

```bash
# 1) Clone repo & install dependencies
git clone **HTTPS** URL
cd story-books-backend
npm install

# 2) Create `config/config.env` file and add the following:

PORT=3000
MONGO_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# 3) Start server (dev mode with nodemon)
npm run dev

# 4) Open in browser
http://localhost:3000
