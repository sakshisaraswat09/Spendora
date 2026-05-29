# Spendora 💰

Spendora is a full-stack AI-powered personal finance management platform that helps users track expenses, manage budgets, analyze spending patterns, and predict future expenses using machine learning.

## Features

### Core Features
- User Authentication & Authorization
- Multiple Account Management
- Income & Expense Tracking
- Recurring Transactions
- Budget Management
- Transaction Filtering & Sorting
- Interactive Financial Dashboard
- Monthly Financial Reports

### AI Features
- Expense Prediction using CatBoost
- AI-Powered Spending Insights
- AI Receipt Scanner
- Automated Monthly Financial Analysis

### Automation
- Budget Alert Emails
- Monthly Report Generation
- Recurring Transaction Processing
- Scheduled Background Jobs using Inngest

### Security
- Rate Limiting
- Bot Protection with Arcjet
- Secure Authentication
- Protected API Routes

---

## Tech Stack

### Frontend
- Next.js
- React.js
- TypeScript
- Tailwind CSS
- Shadcn UI

### Backend
- Next.js API Routes
- Node.js
- Prisma ORM

### Database
- PostgreSQL

### AI / Machine Learning
- Python
- Flask
- CatBoost
- Joblib

### Automation & Services
- Inngest
- Resend
- Arcjet

---

## System Architecture

Frontend (Next.js + React)
        ↓
Backend APIs (Node.js)
        ↓
PostgreSQL + Prisma
        ↓
ML Service (Flask + CatBoost)
        ↓
Expense Predictions

---

## Screenshots

### Home Page
<img width="874" height="450" alt="image" src="https://github.com/user-attachments/assets/d025c43c-79be-4ea6-87f5-cd9e945b0ace" />

### User Registration Page
<img width="884" height="522" alt="image" src="https://github.com/user-attachments/assets/c3458dfc-cd6e-4129-b4ef-2ba7fe101ee7" />

### User Login Page
<img width="880" height="487" alt="image" src="https://github.com/user-attachments/assets/06cc9ff3-e834-4bb9-b41f-e25c14de1951" />

### Dashboard of User
<img width="860" height="475" alt="image" src="https://github.com/user-attachments/assets/9bfcd545-da84-4c80-9ccb-b6777e095039" />

### Account Page
<img width="867" height="454" alt="image" src="https://github.com/user-attachments/assets/cb15fea7-9cda-40a3-baad-93bef130ce9b" />

<img width="876" height="432" alt="image" src="https://github.com/user-attachments/assets/5ca98386-24b2-4d9a-afc8-4ce70a123261" />

### Create Transaction Page
<img width="865" height="391" alt="image" src="https://github.com/user-attachments/assets/a4e2f250-976c-4e1b-aba6-f6ce0af04b39" />

### Expense Page 
<img width="863" height="388" alt="image" src="https://github.com/user-attachments/assets/16d5a247-26ab-4f69-9210-e43e6ca26156" />

---

## Installation

### Clone Repository

git clone https://github.com/sakshisaraswat09/Spendora.git

cd spendora

### Install Dependencies

npm install

### Configure Environment Variables

Create a .env file and add:

DATABASE_URL=
CLERK_SECRET_KEY=
RESEND_API_KEY=
ARCJET_KEY=

### Run Frontend

npm run dev

### Run ML Service

cd ml-service

pip install -r requirements.txt

python app.py

---

## Machine Learning Model

The expense prediction engine uses CatBoost Regressor trained on financial and demographic data.

Input Features:
- Income
- Occupation
- Age
- Gender
- Fixed Expenses
- Variable Expenses
- Historical Spending Patterns

Output:
- Predicted Monthly Expense

---

## Future Improvements

- Mobile Application
- Bank Account Integration
- Multi-Currency Support
- Advanced Analytics
- Push Notifications
- PWA Support

---

## Note

The machine learning prediction service currently runs locally through a Flask API and has not been deployed to production yet.

---

## Author

Sakshi Saraswat
