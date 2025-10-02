# 🗣️ Velora - Your AI Friend

This project is a full-stack web application featuring an AI Voice Assistant. It allows users to interact with an AI assistant through both voice and text input. The application incorporates user authentication, a real-time chat interface, and leverages the Vapi.ai library for seamless voice interactions. The backend is built with Node.js, Express, and MongoDB, providing a robust and scalable foundation. The frontend, developed using React, offers a responsive and intuitive user experience.

## 🚀 Key Features

- **Voice and Text Interaction:** Interact with the AI assistant using either voice or text input. 🎤⌨️
- **User Authentication:** Secure user authentication system with signup, login, and logout functionality. 🔒
- **Real-time Chat Interface:** Dynamic chat interface to display conversations with the AI assistant. 💬
- **Vapi.ai Integration:** Utilizes the Vapi.ai web SDK for high-quality voice interaction. 🌐
- **Responsive Design:** A user interface that adapts seamlessly to different screen sizes. 📱💻
- **Liquid Ether Visual Effect:** Engaging visual effects using a custom `LiquidEther` component. 💧
- **Toast Notifications:** User-friendly notifications for important events and feedback. 🔔
- **Secure Password Management:** Uses bcrypt for secure password hashing and storage. 🛡️
- **JWT Authentication:** Employs JSON Web Tokens (JWT) for secure session management. 🔑

## 🛠️ Tech Stack

- **Frontend:**
    - React
    - React Router DOM
    - Radix UI
    - Lucide React (icons)
    - React Toastify
    - Tailwind CSS
    - Tailwind Merge
    - Class Variance Authority (cva)
    - clsx
    - Motion (animation library)
    - @number-flow/react, number-flow
    - Axios
    - Three.js, OGL (3D Graphics)
    - @vapi-ai/web (VAPI AI)
- **Backend:**
    - Node.js
    - Express
    - CORS
    - Cookie Parser
    - Dotenv
- **Database:**
    - MongoDB
    - Mongoose
- **AI Integration:**
    - AssemblyAI (for speech-to-text)
    - Vapi.ai
- **Other:**
    - bcrypt (password hashing)
    - jsonwebtoken (JWT)
    - ws (WebSockets)
    - mic (microphone access)
    - querystring
    - fs (file system)
    - stream
    - node-record-lpcm16

## 📦 Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running
- Vapi.ai account and API key
- AssemblyAI API key

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/akashbghl/Velora.git
    cd Velora
    ```

2.  Install server dependencies:

    ```bash
    cd server
    npm install
    ```

3.  Install client dependencies:

    ```bash
    cd client
    npm install
    ```

4.  Create a `.env` file in both the `server` and `client` directories. Add the following environment variables:

    **server/.env:**

    ```
    PORT=5000
    MONGO_URI=<Your MongoDB Connection String>
    JWT_SECRET=<Your JWT Secret Key>
    VAPI_PUBLIC_KEY=<Your Vapi.ai Public Key>
    VAPI_ASSISTANT_ID=<Your Vapi.ai Assistant ID>
    ASSEMBLYAI_API_KEY=<Your AssemblyAI API Key>
    ```

    **client/.env:**

    ```
    VITE_BACKEND_URL=http://localhost:5000
    ```

### Running Locally

1.  Start the backend server:

    ```bash
    cd server
    npm run dev
    ```

2.  Start the frontend development server:

    ```bash
    cd client
    npm run dev
    ```

The application should now be running on `http://localhost:5173` (or the port specified by Vite).

## 📂 Project Structure

```
├── client/             # Frontend React application
│   ├── src/            # Source code
│   │   ├── App.jsx     # Main application component
│   │   ├── AuthContext.jsx # Authentication context
│   │   ├── main.jsx    # Entry point for React
│   │   ├── pages/      # Page components
│   │   │   ├── Home.jsx    # Home page
│   │   │   ├── Dashboard.jsx # Dashboard page
│   │   ├── components/ # Reusable components
│   │   ├── index.css   # Global styles
│   │   └── ...
│   ├── public/         # Public assets
│   ├── package.json    # Dependencies and scripts
│   ├── vite.config.js  # Vite configuration
│   └── ...
├── server/             # Backend Node.js application
│   ├── index.js        # Main server file
│   ├── config/         # Configuration files
│   │   ├── db.js       # Database connection
│   ├── routes/         # API routes
│   │   ├── authRoutes.js       # Authentication routes
│   │   ├── indexRoutes.js      # Index routes
│   │   ├── assistantRoutes.js  # Assistant routes
│   ├── middlewares/    # Middleware functions
│   │   ├── authMiddleware.js   # Authentication middleware
│   ├── models/         # Mongoose models
│   │   ├── user.js       # User model
│   ├── utils/          # Utility functions
│   │   ├── Assembly.js   # AssemblyAI integration
│   │   ├── speechToText.js # Speech-to-text functions
│   ├── package.json    # Dependencies and scripts
│   └── ...
├── .gitignore          # Specifies intentionally untracked files
├── README.md           # Project documentation
└── ...
```

## 📸 Screenshots


## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Push your changes to your fork.
5.  Submit a pull request to the main repository.

## 📝 License

This project is licensed under the [MIT License](LICENSE).

## 📬 Contact

[Akash Baghel] - [mailto:akash27aug.2002@gmail.com]

## 💖 Thanks

Thank you for checking out this project! We hope you find it useful and interesting.
