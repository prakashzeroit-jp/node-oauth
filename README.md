# Node OAuth - MVC Core Architecture

A production-grade, highly resilient backend boilerplate that implements the standard **OAuth 2.0 Authorization Code Flow** using an **MVC (Model-View-Controller)** pattern. Built purely on standard dependencies without reliance on restrictive third-party passport frameworks.

## 🛠 Tech Stack
- **Runtime Environment:** Node.js (ES Modules)
- **Framework:** Express.js
- **Database Engine:** MongoDB (via Mongoose)
- **Authentication Handlers:** JSON Web Tokens (JWT),

## 📁 System Architecture (MVC)
```text
├── config/         # Engine & external microservice configurations
├── controllers/    # Route handler definitions & core business logic execution
├── models/         # Database persistence layers & schemas
├── routes/         # Network routing & endpoint mapping configurations
└── server.js       # App entry script orchestration context
```

## 🚀 Getting Started

### 1. Register Your Application with GitHub
1. Go to your **GitHub Settings** -> **Developer Settings** -> **OAuth Apps** -> **New OAuth App**.
2. Set your **Homepage URL** to `http://localhost:5000`.
3. Set your **Authorization callback URL** to `http://localhost:5000/api/auth/github/callback`.

### 2. Configure Local Settings
Create a `.env` file within your project's root folder and populate it with your environment keys:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/node-oauth
JWT_SECRET=your_jwt_signing_key_here
GITHUB_CLIENT_ID=your_client_id_from_github
GITHUB_CLIENT_SECRET=your_client_secret_from_github
GITHUB_CALLBACK_URL=http://localhost:5000/api/auth/github/callback
```

### 3. Local Installation & Launch
```bash
# 1. Install dependencies
npm install

# 2. Run in standard Production environment 
npm start

# 3. Run in Development monitoring environment (requires nodemon)
npm run dev
```

## 🔌 API Endpoints Reference

| HTTP Verb | Endpoint Route | Description |
| :--- | :--- | :--- |
| **GET** | `/api/auth/github` | Initiates the GitHub redirect sequence with random CSRF protection state. |
| **GET** | `/api/auth/github/callback` | Receives authorization code, requests access token, verifies profile information, and issues HTTP-only session cookies. |
| **GET** | `/api/auth/logout` | Destroys cookies and signs the user out cleanly. |

## 🔒 Security Design Implementation
- **CSRF Defense Matrix:** Mitigates intercept vectors during handshakes via a cryptographic state tracker matching parameters on response return.
- **Session Layer Vulnerability Mitigation:** Tokens are explicitly wrapped into `HttpOnly` and `SameSite` configurations to eliminate cross-script theft attempts.
