import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Signup from "./pages/Signup"
import SignIn from "./pages/SignIn"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App