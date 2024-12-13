import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Signup from "./pages/Signup"
import SignIn from "./pages/SignIn"
import ShareView from "./pages/ShareView"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/user/:sharelink" element={<ShareView />} />

    </Routes>
    </BrowserRouter>
  )
}

export default App