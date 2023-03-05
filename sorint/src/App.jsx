const App = () => {
    return (
      <div>
        <link rel="stylesheet" href="home.css" />
        <div className="gTitolo">
          <div className="bar">
            <a href>Home</a>
            <a href>History</a>
            <a href>Shop</a>
            <a href>Video</a>
            <a href>Download The Code!(WIP)</a>
          </div>
          <p className="grandeTesto">"Testo <span style={{color: '#a50000'}}>a Caso</span> "-Gandhi</p>
          <div id="divideo">
            <h1 id="si">aaaaa</h1>
            <video autoPlay muted loop id="videoback">
              <source src type="video/mp4" />  
            </video>
          </div>
          <p className="grandeTesto">"come a casa <span style={{color: '#a50000'}}>ma più in grande</span>"-Star</p>
          <div className="txtimg">
            <img className="imgDestra" src="https://imgix.bustle.com/inverse/43/e9/9e/ac/0c64/4d0e/a2bc/dda1d61a31db/on-fire.jpeg?w=350&h=298&fit=crop&crop=faces&auto=format%2Ccompress&blend=000000&blendAlpha=45&blendMode=normal" alt="" />
            <p className="testoImg" />
          </div>
          <p className="grandeTesto">"<span style={{color: '#a50000'}}>Dream</span> Team" - IGN</p>
          <p className="testoImg" />
        </div>  
      </div>
    );
  };

  export default App;