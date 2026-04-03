# Finance-Data-Processing-and-Access-Control-Backend
Scalable Finance Backend API with JWT Authentication, MongoDB, and RESTful architecture

💰 Finance Backend API

📄 Description

This is a simple Finance Backend API for managing users and financial records.
It allows user registration, login, record management, and dashboard summary.

🚀 Features
	•	User registration and login
	•	Create, Read financial records
	•	Dashboard summary with totals
	•	Tested with Postman collection

🛠 Technologies Used
	•	Node.js
	•	Express.js
	•	MongoDB
	•	Postman (API testing)

⚡ Getting Started

Prerequisites
	•	Node.js installed
	•	MongoDB running locally

Installation
	1.	Clone the repo:

git clone <your-repo-url>
cd finance-backend

	2.	Install dependencies:

npm install

	3.	Start the server:

npm run dev

Server will run on http://localhost:3000

⸻

🧪 Postman Collection

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

Login

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

📂 Folder Structure

finance-backend/
 ├── models/
 ├── routes/
 ├── docs/
 │    └── finance-api.postman_collection.json
 ├── README.md


⸻

⚡ License

MIT
