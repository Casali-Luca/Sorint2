import React from "react";
import { RiquadriPersone } from "../Js/riquadri";
const Riquadri = () => {

    return(
        <>
            <div className="divPrinc">
                {RiquadriPersone.map((item)=>{
                    let background = item.img;
                    console.log(background);
                    return(
                    <>
                    <div className="divRiquadri"> 
                        {/* <img className="imgRiquadri" src={`/${item.img}`} /> */}
                        <div className= "immaginiAboutUs" style={{backgroundImage: `url(${background})`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat' 
                        }}>
                            <br />
                            <br />
                        </div>
                        <h1 className="titoloRiquadri">{item.title}</h1>
                        <p className="pRiquadri">{item.p}</p>
                    </div>
                    </>
                )})}

            </div>
        </>
    )
};

export default Riquadri;