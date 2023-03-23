import Riquadri from "../Components/Riquadri";
const About_us = () => {
    return (
      <> 
        { <div className="divPrimo">
            <div className="divTitolo">
            <h1 className="h1AU">About<br/><span style={{color: '#a50000'}}>Us</span></h1>
          </div>
        <div className="divImmagine">
            {/* <img className="imgAU" src="sorint\public\images\download.jpg" alt="" /> */}
          </div>
        </div> }

        <div className="divPrinc">
          <Riquadri></Riquadri>
        </div>
      </>
    ); 
  };
export default About_us;