# Workout Master

A full-stack workout generator and tracker application to help you reach your fitness goals.

## Features

- **User Authentication**: Create accounts, log in, and manage your personal profile
- **Workout Generator**: Create custom workouts based on muscle groups and fitness goals
- **Workout History**: Track your completed workouts and see your progress
- **Profile Management**: Update your personal information and fitness level
- **Dark Mode**: Toggle between light and dark themes

## Technology Stack

### Frontend (Vite + React)
- React
- Tailwind CSS
- Axios for API communication
- Context API for state management
- Clerk for authentication

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose

### Next.js App (Alternative Frontend)
- Next.js
- Clerk for authentication
- Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v14 or newer)
- MongoDB (local installation or MongoDB Atlas account)

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/workout-master.git
   cd workout-master
   ```

2. Install backend dependencies
   ```
   npm install
   ```

3. Install frontend dependencies
   ```
   cd frontend
   npm install
   ```

### Configuration

1. **Backend**: Create a `.env` file in the `server` directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/workout-master
   NODE_ENV=development
   ```

   * If using MongoDB Atlas, replace the MONGODB_URI with your connection string

2. **Frontend (Vite)**: Create a `.env` file in the `frontend` directory:
   ```
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   ```

3. **Next.js App**: Create a `.env.local` file in the `clerk-nextjs` directory:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   ```

   Get your Clerk keys from [Clerk Dashboard](https://dashboard.clerk.com/)

### Running the Application

1. Start the backend server
   ```
   cd server
   npm install
   npm start
   ```

2. **Option A: Vite Frontend**
   ```
   cd frontend
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`

3. **Option B: Next.js App**
   ```
   cd clerk-nextjs
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:3000`

## API Endpoints

### Authentication
- `POST /api/users` - Register a new user
- `POST /api/users/login` - Log in
- `POST /api/users/logout` - Log out
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

### Workouts
- `POST /api/workouts` - Create a new workout
- `GET /api/workouts` - Get all user workouts
- `GET /api/workouts/:id` - Get a specific workout
- `PUT /api/workouts/:id/complete` - Mark workout as completed
- `DELETE /api/workouts/:id` - Delete a workout

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

<div align="center">
  <p>Built with ❤️ by Prathmesh</p>
</div>
