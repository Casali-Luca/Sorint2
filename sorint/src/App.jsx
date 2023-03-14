import Navbar  from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import About_us from './Pages/About_us'
import History from './Pages/History'

const App = () => {
    return (
      <>
      <link rel="shortcut icon" href="" type="image/x-icon"></link>
      <link rel="stylesheet" href="home.css"/>  
        <Router>
        <div>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/About_us" element={<About_us/>} />
            <Route exact path="/History" element={<History/>} />
          </Routes>
        </div>
        </Router>
      </>
    ); 
  };

  export default App;