import Navbar  from "./Components/Navbar";

const App = () => {
    return (
      <>
      <link rel="shortcut icon" href="" type="image/x-icon"></link>
        <link rel="stylesheet" href="home.css" />
        <div>
          <Navbar/>
          <p className="grandeTesto">"Testo <span style={{color: '#a50000'}}>a Caso</span> "-Gandhi</p>
          <div id="divideo">
            <h1 id="si">video bello gente che gioca a ping pong</h1>
            <video autoPlay muted loop id="videoback">
              <source src type="video/mp4" />  
            </video>
          </div>
          <p className="gTitolo">"come a casa <span style={{color: '#a50000'}}>ma più in grande</span>"-Star</p>
          <p class ="sottotesto">prova prova prova</p>
          <div className="txtimg">
            <img className="imgDestra" src="https://imgix.bustle.com/inverse/43/e9/9e/ac/0c64/4d0e/a2bc/dda1d61a31db/on-fire.jpeg?w=350&h=298&fit=crop&crop=faces&auto=format%2Ccompress&blend=000000&blendAlpha=45&blendMode=normal" alt="" />
          </div>
          <p className="gTitolo">"<span style={{color: '#a50000'}}>Dream</span> Team" - IGN</p>
        </div>
      </>
    ); 
  };

  export default App;