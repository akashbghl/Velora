import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './MainLayout'
import Home from './pages/Home'
import NeonLogin from './components/Login'
import Signup from './components/Signup'
import Dashboard from './pages/Dashboard'
import { AuthProvider } from './AuthContext'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Routes with Navbar */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>

          {/* Routes without Navbar */}
          <Route path="/login" element={<NeonLogin />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
