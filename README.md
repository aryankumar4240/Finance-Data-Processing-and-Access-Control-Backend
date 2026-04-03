# Finance-Data-Processing-and-Access-Control-Backend
Scalable Finance Backend API with JWT Authentication, MongoDB, and RESTful architecture

## Finance Backend API

## Description

This is a simple Finance Backend API for managing users and financial records.
It allows user registration, login, record management, and dashboard summary.

## 🚀 Features
	•	User registration and login
	•	Create, Read financial records
	•	Dashboard summary with totals
	•	Tested with Postman collection

## 🛠 Technologies Used
	•	Node.js
	•	Express.js
	•	MongoDB
	•	Postman (API testing)

⚡ Getting Started

### Prerequisites
	•	Node.js installed
	•	MongoDB running locally

## Installation
	1.	Clone the repo:

git clone <your-repo-url>
cd finance-backend

	2.	Install dependencies:

npm install

	3.	Start the server:

npm run dev

Server will run on http://localhost:3000

⸻

## 🧪 Postman Collection

You can test all APIs using the Postman collection:
	•	Collection file: docs/finance-api.postman_collection.json

Import in Postman
	1.	Open Postman
	2.	Click Import
	3.	Select finance-api.postman_collection.json
	4.	All APIs are ready to test!

⸻

🔑 Example API Usage

Register

POST /users/register

{
  "name": "Aryan",
  "email": "aryan@gmail.com",
  "password": "1234",
  "role": "admin"
}

## Login

POST /users/login

Get Records

GET /records
Headers:

Authorization: <token>

Create Record

POST /records
Headers:

Authorization: <token>

Dashboard Summary

GET /dashboard/summary
Headers:

Authorization: <token>


⸻

## 📂 Folder Structure

finance-backend/
 ├── docs/
 ├──  └── finance-api.postman_collection.json
 ├── middleware/
 ├── models/
 ├── routes/
 ├── LICENSE
 ├── README.md
 ├── app.js
 ├── package-lock.json
 ├── package.json


⸻

⚡ License

MIT

⸻

# API TESTING POSTMAN 

## Register API
  
<img width="810" height="787" alt="docs:screenshots:register_api" src="https://github.com/user-attachments/assets/2842c630-4aec-42c0-903e-5c93fa3a3394" />

## Login API
  
<img width="805" height="786" alt="docs:screenshots:login_api" src="https://github.com/user-attachments/assets/f747e738-7d1d-4d07-b335-8e82e1a347cc" />

## dashboard API
  
<img width="819" height="800" alt="docs:screenshots:dashboard" src="https://github.com/user-attachments/assets/43b47f1a-b437-447e-9b5a-9a9274315fc4" />


# API Check

<img width="1435" height="728" alt="Screenshot 2026-04-03 at 12 38 20 PM" src="https://github.com/user-attachments/assets/22346dda-afcc-45e7-97a1-367d9ed99690" />




