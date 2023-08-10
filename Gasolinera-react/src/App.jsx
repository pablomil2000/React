import './App.css'
import { Box, Container } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'

import Home from './pages/Home'
import Surtidor from './pages/Surtidor'
import MethodPayment from './pages/MethodPayment'
import Product from './pages/Product'
import Quantity from './pages/Quantity'
import Resume from './pages/Resume'

function App() {

  return (
    <Box w="100%" h="100vh">
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/surtidor" element={<Surtidor />} />
          <Route path="/MethodPayment" element={<MethodPayment />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Quantity" element={<Quantity />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Surtidor" element={<Surtidor />} />
        </Routes>
      </Container>
    </Box>
  )
}

export default App
