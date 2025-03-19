# User Management API

## Setup

1. Clone the repository.
2. Install dependencies: `npm install`
3. Create a `.env` file with `MONGO_URI`, `JWT_SECRET`, and `PORT`.
4. Run the application: `npm start`

## API Endpoints

- **User Registration**: `POST /api/users`
- **User Login**: `POST /api/login` (Not implemented in this version)
- **Get Users**: `GET /api/users` (Requires JWT token)
- **Get User**: `GET /api/users/:id` (Requires JWT token)
- **Update User**: `PUT /api/users/:id` (Requires JWT token)
- **Delete User**: `DELETE /api/users/:id` (Requires JWT token)

