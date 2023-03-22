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
          <p class="pDescr">descrizione <font color="#915EAD">descrizione</font> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p>
        </div>
        <div class="divDescr2">
          <p class="pDescr2"> Lorem ipsum dolor sit amet</p>
          <p class="pDescr2"><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</b> Lorem <b>ipsum</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p>
        </div>

        <div class="divProdotti">
          <h2 class="h2Prodotti">TITOLO</h2>
          <div class="fakeScroll2"></div>
          <div class="fakeScroll"></div>
        </div>

        <div class="divImmagini">
        <table>
              <tr>
                  <td>
                      <div class="divCont">
                          <a className="aHome" href="#">
                              <h1 class="h1Titolo">Lorem<br/>Ipsum</h1>
                          </a>
                          <img class="imgProd" src=""/>
                          <p class="pProd">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                  </td>

                  <td>
                      <div class="divCont">
                          <a className="aHome" href="#">
                              <h1 class="h1Titolo">Lorem<br/>Ipsum</h1>
                          </a>
                          <img class="imgProd" src=""/>
                          <p class="pProd">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                  </td>

                  <td>
                      <div class="divCont">
                          <a className="aHome" href="#">
                              <h1 class="h1Titolo">Lorem<br/>Ipsum</h1>
                          </a>
                          <img class="imgProd" src=""/>
                          <p class="pProd">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                  </td>

                  <td>
                      <div class="divCont">
                          <a className="aHome" href="#">
                              <h1 class="h1Titolo">Lorem<br/>Ipsum</h1>
                          </a>
                          <img class="imgProd" src=""/>
                          <p class="pProd">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                  </td>
              </tr>
          </table>
        </div>

        <img class="imgPerf" src="/"/>
        <div class="divPerf">
          <h2 class="h2Perf">LOREM IPSUM</h2>
          <h1 class="h1Perf">LOREM IPSUM DOLOR SIT AMET</h1>
          <p class="pPerf">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button class="buttonPerf" type="button"><a class="aPerf" href="#">SCOPRI DI PIÙ</a></button>
       </div>   
  </>
  )
  
}
export default Home;