const Home = () =>{
    return(
    <>
    
    <p className="grandeTesto">THE BEST PING PONG TRACKER</p>
          <div id="divideo">
            <video autoPlay muted loop id="videoback">
              <source src={require("../video/video_Trim.mp4")} type="video/mp4"/>
            </video>
          </div>

          {/*<div className = "textBox"> 
            <h1 className = "titolo">Titolo</h1>
            <p>contenuto</p>
          </div>
          <div className = "textBox"> 
            <h1 className = "titolo">Titolo</h1>
            <p>contenuto</p>
          </div>


        <div class="divProdotti">
          <h2 class="h2Prodotti">I NOSTRI PRODOTTI</h2>
          <div class="fakeScroll2" style="float: left"></div>
          <div class="fakeScroll"></div>
        </div>/*}
        













          
          <p className="gTitolo">"COME A CASA <span style={{color: '#a50000'}}>MA PIÙ IN GRANDE</span>" - Star</p>
          <p class ="sottotesto">Tracker di Punteggi per Ping Pong: nasce tutto in preparazione al Project Day della nostra scuola, per il quale il nostro gruppo ha deciso di realizzare un tracker di movimento per pinpong, con l'intento di seguire la pallina durante il gioco segnando i punti automaticamente. L'intento è quello di realizzarlo in linguaggio Python, permettendo la comunicazione tra componenti hardware e software del progetto<br/></p>
          {/* <div className="txtimg">
            <img className="imgDestra" src="https://imgix.bustle.com/inverse/43/e9/9e/ac/0c64/4d0e/a2bc/dda1d61a31db/on-fire.jpeg?w=350&h=298&fit=crop&crop=faces&auto=format%2Ccompress&blend=000000&blendAlpha=45&blendMode=normal" alt="" />
          </div> */}
          <p className="gTitolo">"<span style={{color: '#a50000'}}>DREAM</span> TEAM" - I.G.N.</p>
          <p class ="sottotesto">Il tracking di una pallina da ping pong è un tema di grande attualità e interesse, grazie all'ampia gamma di applicazioni che questo progetto può offrire. 
          In particolare, in ambito sportivo, il tracciamento della pallina consente di ottenere informazioni dettagliate sulla prestazione dei giocatori e 
          sull'andamento della partita, rendendolo un utile strumento per l'allenamento e la formazione tecnica degli atleti. Grazie all'analisi dei dati raccolti durante il gioco, 
          è possibile migliorare la velocità di reazione e la precisione dei tiri, individuando eventuali errori e correggendoli per ottenere una maggiore efficacia in campo.
          Inoltre, il tracciamento della pallina può essere utilizzato anche a scopo didattico, in particolare nell'ambito scolastico, per insegnare agli studenti le regole del 
          gioco del ping pong e per introdurli alle tecniche di gioco. Grazie all'uso di strumenti tecnologici, come i software di tracciamento, gli studenti possono apprendere 
          in modo più coinvolgente e interattivo, rendendo più efficace il processo di insegnamento e di apprendimento.
          Infine, il tracciamento della pallina può essere adottato anche in ambito industriale, per la realizzazione di sistemi di automazione che utilizzano il rilevamento 
          ottico degli oggetti per controllare e gestire i processi di produzione.</p>
           
    </>
    )
    
}
export default Home;