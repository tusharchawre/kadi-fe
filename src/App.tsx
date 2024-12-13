import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Signup from "./pages/Signup"
import SignIn from "./pages/SignIn"
import ShareView from "./pages/ShareView"
import { RecoilRoot } from "recoil"

function App() {
  return (
    <RecoilRoot>
    <BrowserRouter>
    <Routes>
      
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/user/:sharelink" element={<ShareView />} />

    </Routes>
    </BrowserRouter>
    </RecoilRoot>
  )
}

export default App