# My Project

This project is a full-stack application built using the MERN stack. It includes both backend and frontend parts, with the backend powered by Node.js and Express, and the frontend built with React and Material-UI.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Running the Application](#running-the-application)
  - [Backend](#running-the-backend)
  - [Frontend](#running-the-frontend)
- [Scripts](#scripts)
- [Folder Structure](#folder-structure)
- [License](#license)

## Prerequisites

Make sure you have the following installed on your machine:

- Node.js (>=14.x)
- npm (>=6.x) or yarn (>=1.x)
- MongoDB (>=4.x)
- Git (>=2.x)

## Installation

### Backend

1. **Clone the repository:**

   ```bash
   git clone https://github.com/utsavPatidar9316/at-nodejs-practical.git
   cd at-nodejs-practical/backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the `backend` directory and add the following environment variables:

   ```env
   PORT=5000
   MONGO_URL=mongodb://localhost:27017/your-database-name
   JWT_SECRET=your_jwt_secret
   ```

4. **Start MongoDB:**

   Make sure MongoDB is running on your machine. You can start MongoDB using the following command if it's installed locally:

   ```bash
   mongod
   ```

### Frontend

1. **Navigate to the frontend directory:**

   ```bash
   cd ../frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

## Running the Application

### Running the Backend

1. **Navigate to the backend directory:**

   ```bash
   cd backend
   ```

2. **Start the backend server:**

   ```bash
   nodemon
   ```

   The backend server should now be running on `http://localhost:5000`.

### Running the Frontend

1. **Navigate to the frontend directory:**

   ```bash
   cd ../frontend
   ```

2. **Start the frontend development server:**

   ```bash
   npm run dev
   ```

   The frontend application should now be running on `http://localhost:5173`.
