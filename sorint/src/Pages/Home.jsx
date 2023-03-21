const Home = () =>{
    return(
    <>
    <p className="grandeTesto">THE BEST PING PONG TRACKER</p>
          <div id="divideo">
            <video autoPlay muted loop id="videoback">
              <source src={require("../video/video_Trim.mp4")} type="video/mp4"/>
            </video>
          </div>
          <p className="gTitolo">"COME A CASA <span style={{color: '#a50000'}}>MA PIÙ IN GRANDE</span>" - Star</p>
          <p class ="sottotesto">Tracker di Punteggi per Ping Pong:<br/>Progetto PCTO che sfrutta OpenCV, libreria di python per tracciare il percorso di oggetti, nel nostro caso,della pallina.
          Se questa lascia il campo per più di 1s (quindi fuori dalla portata della webcam) il punto va alla persona che ha tirato, seguendo le regole. Bisogna ancora intraprendere la strada per 
          il tracciamento e l'eventuale evento che si va a creare appena la pallina esce dal campo.</p>
          {/* <div className="txtimg">
            <img className="imgDestra" src="https://imgix.bustle.com/inverse/43/e9/9e/ac/0c64/4d0e/a2bc/dda1d61a31db/on-fire.jpeg?w=350&h=298&fit=crop&crop=faces&auto=format%2Ccompress&blend=000000&blendAlpha=45&blendMode=normal" alt="" />
          </div> */}
          <p className="gTitolo">"<span style={{color: '#a50000'}}>DREAM</span> TEAM" - I.G.N.</p>
          <p class ="sottotesto">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.""Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>

    </>
    )
    
}
export default Home;