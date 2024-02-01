import React from 'react'
import "./styles.css"
import {Route, Routes} from "react-router-dom"
import Home from './routes/Home'
import About from './routes/About'
import Service from './routes/Service'
import Contact from './routes/Contact'

import Predict from './components/Predict/Predict'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import Pred from './routes/Pred'

const App = () => {
  return (
    <div className="App">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/service" element={<Service/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path='/Predict' element={<Predict/>} />
              <Route path='/Login' element={<Login/>}/>
              <Route path='/Signup' element={<Signup/>}/>
              <Route path='/pred' element={<Pred/>}/>
            </Routes>
        </div>
  )
}

export default App
