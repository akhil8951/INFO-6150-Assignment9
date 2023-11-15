# INFO-6150-Assignment9

CarRentals

Overview

This project is a full-stack web application for a luxury Car rental system. It utilizes React for the frontend, Node.js for the backend, and MongoDB as the database service. The application includes features such as user authentication, car booking, an about page explaining the company's vision, a jobs page listing available positions, and a contact page with a query submission form.

Table of Contents

- Technologies Used
- Features
- Folder Structure
- Getting Started
- Usage
- Contributing
- License

Technologies Used

- Frontend: React.js, React Bootstrap
- Backend: Node.js, Express
- Database: MongoDB

Features

1. User Authentication: Users can log in, and log out. Authentication is connected to the MongoDB database.

2. Car Booking: Users can book desired cars through the system.

3. About Page: Describes the company's vision and purpose.

4. Jobs Page: Lists available job positions. Utilizes React Bootstrap cards and map function to render job details dynamically.

5. Contact Us Page: Includes a form for users to submit queries.

Folder Structure

The project follows a structured organization:

|-- client (React Frontend)
|-- server (Node.js Backend)
|-- models (MongoDB Schema Models)
|-- routes (Express.js API Routes)
|-- controllers (Logic)
|-- ...

Getting Started

1. Clone the repository:

   git clone https://github.com/akhil8951/INFO-6150-Assignment9.git

2. Install dependencies:

   cd backend
   npm install
   cd frontend
   npm install

3. Set up environment variables (e.g., MongoDB connection URL) in the appropriate .env files.

4. Run the application:

   cd ..
   node server.js
   PORT=8000 npm start

Usage

Visit http://localhost:8000 to access the application.
