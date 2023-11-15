# Library Management System

This project involves the development of a robust backend API for an Library Management System application. The primary focus of the project is on the logic and functionality that powers the Library Management platform and the backend's routes, use cases, and careful consideration of edge cases are crucial for building a reliable and functional Library Management System. This backend can later be integrated with various frontend platforms to create a complete Library Management solution.


## Deployed Link

```bash
   https://books-ey4s.onrender.com
```



## Key Features

- **High Prformance**: insures that the Library Management site can handle high traffic loads efficiently.
- **Scalability**: easily adapt to increased user demand by adding more servers or resources as needed.
- **API Devlopment**: building APIs, to interact with frontend interfaces, mobile apps, and third-party services.
- **Database Integration**: can integrate with MongoDB, offering flexibility in choosing the right database solution.
- **Security**: protect sensitive customer information, such as encryption, authentication, and authorization mechanisms.
- **Inventory Management**: efficiently manage book inventory, borrowing processing, and retuen processing.
- **User Authentication and Authorization**: ensures that only authorized users can access certain parts of the website.

## Tech Stack

- Backend: Node.js, TypeScript


## Getting Started

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/aman1722/Varthak_Technologies_Assignment
   ```
   
2. Install dependencies:
   ```
   npm install 
   ```

3. Application Start
   ```
   npm run start
   ```


## Environment Variables

You will need to set the following environment variables in a `.env` file:

```ini
PORT=`YOUR_REQUIRED_PORT`
MONGO_URL=`YOUR_MONGO_ATLAS_URL`
JWT_SECRET=`CREATE_A_SECRET_FOR_LOGIN_TOKEN`
```

## Routes
### User Routes
```
User Registration: POST /auth/register
User Login: POST /auth/login
```
### Book Routes
```
Create a Book: POST /books
Read a Book: GET /books
Read all Existing Books: GET /serach
```
