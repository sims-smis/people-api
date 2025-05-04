# People Management API with EJS Frontend

This is a Node.js web application using **Express**, **MongoDB (Mongoose)**, and **EJS** templating engine. It allows you to create, read, update, and delete (CRUD) person records with fields like name, age, gender, and mobile.

## ✨ Features

- Add, edit, and delete people records
- Server-side rendered views using EJS
- Styled UI with custom CSS
- MongoDB integration via Mongoose
- .env support for secure configuration

## 🎥 Demo

Check out the demo video here:  
https://github.com/user-attachments/assets/d87aef5d-4919-4729-ac01-6926ee531e0c


## 📦 Project Structure
```
people-api/
│
├── public/                  # Static files like CSS
│   └── css/
│       └── style.css        # Custom styles for all EJS pages
│
├── views/                   # EJS templates for frontend
│   ├── index.ejs            # Homepage with list of people
│   ├── delete.ejs           # Confirmation page for deletion
│   └── form.ejs             # Reusable form for add/edit
│
├── models/
│   └── person.js            # Mongoose schema for Person
│
├── routes/
│   └── person.js            # Express routes for CRUD operations
│
├── .env                     # Actual environment config (ignored by Git)
├── .env.example             # Sample environment file to share in repo
├── app.js                   # Main Express server file
├── package.json             # NPM dependencies and scripts
└── README.md                # Project documentation

```
