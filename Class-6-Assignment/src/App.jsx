import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import DemoPage from "./components/DemoPage"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/demo" element={<DemoPage />} />
    </Routes>
  )
}
