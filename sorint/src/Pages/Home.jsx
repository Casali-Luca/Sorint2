const Home = () =>{
  return(
  <>
  <p className="grandeTesto">THE BEST PING PONG TRACKER</p>
        <div id="divideo">
          <video autoPlay muted loop id="videoback">
            <source src={require("../video/video_Trim.mp4")} type="video/mp4"/>
          </video>
        </div>

        <div class="divDescr">
          <p class="pDescr">Un metodo <font color="#915EAD">rivoluzionario</font> di vedere il Ping Pong. Non lasciarti sfuggire l'opportunità di diventare un giocatore <font color="#8b0000">migliore</font>  ..</p>
        </div>
        <div class="divDescr2">
          <p class="pDescr2"> È facile da utilizzare!</p>
          <p class="pDescr2"><b>Il Tracking si adatta a qualsiasi tavolo da Ping Pong..</b> Inoltre il nostro sistema rende il gioco <b>più preciso e avvincente che mai.</b> Non devi essere un esperto di tecnologia per utilizzarlo!..</p> 
        </div>

        <div class="divProdotti">
          <h2 class="h2Prodotti">LE SUE APPLICAZIONI</h2>
          <div class="fakeScroll2"></div>
          <div class="fakeScroll"></div>
        </div>

        <div class="divImmagini">
        <table>
              <tr>
                  <td>
                      <div class="divCont">
                          <a className="aHome" href="#">
                              <h1 class="h1Titolo">Allenamento<br/>Guidato</h1>
                          </a>
                          <img class="imgProd" src=""/>
                          <p class="pProd">Migliora le tue skills, sia a casa, sia con il tuo coach!.</p>
                    </div>
                  </td>

                  <td>
                      <div class="divCont">
                          <a className="aHome" href="#">
                              <h1 class="h1Titolo">Arbitraggio<br/>Automatico</h1>
                          </a>
                          <img class="imgProd" src=""/>
                    </div>
                          <p class="pProd">È possibile segnale in modo preciso e istantaneo l'assegnazione dei punti.</p>
                  </td>

                  <td>
                      <div class="divCont">
                          <a className="aHome" href="#">
                              <h1 class="h1Titolo">Mappatura della<br/>Pallina</h1>
                          </a>
                          <img class="imgProd" src=""/>
                          <p class="pProd">Grazie ad esso è possibile stabilire in tempo reale la posizione della pallina, facilitando anche l'arbitraggio!.</p>
                    </div>
                  </td>

                  <td>
                      <div class="divCont">
                          <a className="aHome" href="#">
                              <h1 class="h1Titolo">Utilizzabile<br/>Ovunque</h1>
                          </a>
                          <img class="imgProd" src=""/>
                          <p class="pProd">Non solo nel Ping Pong! Il tracking è applicabile in ambiti nel quale seguire i movimenti degli oggetti nello spazio è utile, basti pensare ai magazzini! .</p>
                    </div>
                  </td>
              </tr>
          </table>
        </div>

        <img class="imgPerf" src="/"/>
        <div class="divPerf">
          <h2 class="h2Perf">IL PROGRESS ROUTE</h2>
          <h1 class="h1Perf"><font color="#915EAD">COME È NATA L'IDEA DEL PROGETTO </font>?</h1>
          <p class="pPerf">Spesso, durante le partite, si verificavano discussioni sul fatto che la pallina fosse dentro o fuori dal campo. Abbiamo quindi ideato un sistema di tracking basato sulla famosa libreria in Python (con colore diverso) OpenCV e tecnologia di riconoscimento visivo per tracciare con precisione la posizione della pallina. Questo Tracker registra automaticamente i punti, eliminando qualsiasi ambiguità e garantendo una competizione più equa e divertente per tutti i giocatori.</p>
          <button class="buttonPerf" type="button"><a class="aPerf" href="#">SCOPRI DI PIÙ</a></button>
       </div>   
  </>
  )
}
export default Home;