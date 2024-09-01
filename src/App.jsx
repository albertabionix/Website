import './App.css'
import Header from './components/header.jsx'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home.jsx'
import Contact from './pages/contact.jsx'
import Projects from './pages/projects.jsx'
function App() {

  return (
    <div>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
