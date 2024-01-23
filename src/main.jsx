import React from 'react'
import ReactDOM from 'react-dom/client'
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes.jsx'
import { AuthProvider } from './context/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'
import ChatProvider from './context/ChatProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ChatProvider>
        <RouterProvider router={router}>
          <ToastContainer />
          {/* Other components go here */}
        </RouterProvider>
      </ChatProvider>
    </AuthProvider>
  </React.StrictMode>
)
