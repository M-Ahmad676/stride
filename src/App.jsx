import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Store from './Pages/Store Page/Store'

function App() {

  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/Store' element={<Store/>} />
    </Routes>
    </Router>
    </>
  )
}

export default App
