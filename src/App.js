import Home from "../src/components/Home"
import About from "../src/components/About"
import Socials from "../src/components/Socials"
import {Routes, Route} from "react-router-dom"
import Navigation from "./components/Navigation"
import styled from "styled-components"

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
//   background-color: #a0dcff;
//   font-family: sans-serif;
// `

const App = () => {
  return ( 
    // <Container>
    <div>
      {/* <Navigation /> */}
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/socials" element={<Socials />}/>
      </Routes>
      </div>
    // </Container>
   );
}
 
export default App;
