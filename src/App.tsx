import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Layout from "./pages/Layout"

function App() {

  return (
    <>
      <BrowserRouter>
      
        <Routes>

          <Route path="/" element={<Layout />}>
          
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<Navigate to="/" />} /> {/* Navigate to home if URI doesn't exist*/}

          </Route>

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
