import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';  
import About from './components/About';  
import Contact from './components/Contact';
import Resume from './components/Resume'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path= 'react-portfolio' element={<Home />} /> 
          <Route path='About' element={<About />}/> 
          <Route path='contact' element={<Contact/>}/> 
          <Route path='resume' element={<Resume/>}/>

        </Route>
      </Routes>
    </>
  )
}

export default App
