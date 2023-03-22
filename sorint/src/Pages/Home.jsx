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
          <p class ="sottotesto">Tracker di Punteggi per Ping Pong:<br/>Il presente progetto di PCTO si avvale dell'utilizzo della libreria OpenCV di Python 
          al fine di tracciare il percorso degli oggetti in gioco, nello specifico, la pallina. In caso la suddetta dovesse abbandonare il campo di gioco per 
          un intervallo di tempo maggiore di un secondo, fuori dal campo visivo della webcam, il punto verrà assegnato alla persona che ha effettuato il tiro, 
          attenendosi alle regole stabilite. Tuttavia, si rende necessario ancora l'avvio dell'implementazione del processo di tracciamento e la definizione 
          dell'evento che avverrà in concomitanza con l'uscita della pallina dal campo di gioco.</p>
          {/* <div className="txtimg">
            <img className="imgDestra" src="https://imgix.bustle.com/inverse/43/e9/9e/ac/0c64/4d0e/a2bc/dda1d61a31db/on-fire.jpeg?w=350&h=298&fit=crop&crop=faces&auto=format%2Ccompress&blend=000000&blendAlpha=45&blendMode=normal" alt="" />
          </div> */}
          <p className="gTitolo">"<span style={{color: '#a50000'}}>DREAM</span> TEAM" - I.G.N.</p>
          <p class ="sottotesto">Il tracking di una pallina da ping pong è un tema di grande attualità e interesse, grazie all'ampia gamma di applicazioni che questo processo può offrire. 
          In particolare, in ambito sportivo, il tracciamento della pallina consente di ottenere informazioni dettagliate sulla prestazione dei giocatori e 
          sull'andamento della partita, rendendolo un'utile strumento per l'allenamento e la formazione tecnica degli atleti. Grazie all'analisi dei dati raccolti durante il gioco, 
          è possibile migliorare la velocità di reazione e la precisione dei tiri, individuando eventuali errori e correggendoli per ottenere una maggiore efficacia in campo.
          Inoltre, il tracciamento della pallina può essere utilizzato anche a scopo didattico, in particolare nell'ambito scolastico, per insegnare agli studenti le regole del 
          gioco del ping pong e per introdurli alle tecniche di gioco. Grazie all'uso di strumenti tecnologici, come i software di tracciamento, gli studenti possono apprendere 
          in modo più coinvolgente e interattivo, rendendo più efficace il processo di insegnamento e di apprendimento.
          Infine, il tracciamento della pallina può essere adottato anche in ambito industriale, per la realizzazione di sistemi di automazione che utilizzano il rilevamento 
          ottico degli oggetti per controllare e gestire i processi di produzione. Ad esempio, nei processi di confezionamento di prodotti alimentari, il tracciamento della 
          pallina può essere utilizzato per verificare la corretta posizione dei prodotti all'interno dell'imballaggio, garantendo così la qualità e la sicurezza dei prodotti stessi.</p>

    </>
    )
    
}
export default Home;