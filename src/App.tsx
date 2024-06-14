// import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
// import Navigation from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Sideb from './components/sideb';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Container fluid={true} className='mainContainer'>
        <Outlet />
      </Container>
    </>
  )
}

export default App;
