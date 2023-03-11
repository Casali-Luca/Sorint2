const Home = () =>{
    return(
    <>
    <p className="grandeTesto">THE BEST PING PONG TRACKER</p>
          <div id="divideo">
            <h1 id="si">Prova a caso</h1>
            <video autoPlay muted loop id="videoback">
              <source src type="video/mp4"/>
            </video>
          </div>
          <p className="gTitolo">"come a casa <span style={{color: '#a50000'}}>ma più in grande</span>"-Star</p>
          <p class ="sottotesto">prova prova prova</p>
          <div className="txtimg">
            <img className="imgDestra" src="https://imgix.bustle.com/inverse/43/e9/9e/ac/0c64/4d0e/a2bc/dda1d61a31db/on-fire.jpeg?w=350&h=298&fit=crop&crop=faces&auto=format%2Ccompress&blend=000000&blendAlpha=45&blendMode=normal" alt="" />
          </div>
          <p className="gTitolo">"<span style={{color: '#a50000'}}>Dream</span> Team" - IGN</p>
    </>
    )
    
}
export default Home;