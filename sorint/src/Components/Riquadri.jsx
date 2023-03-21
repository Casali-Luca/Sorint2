import React from "react";
import { RiquadriPersone } from "../Js/riquadri";

const Riquadri = () => {
    return(
        <>
            <div className="divPrinc">

                {RiquadriPersone.map((item)=>{return(
                    <div className="divRiquadri">
                        <img className="imgRiquadri" src={item.img}/>
                        <h1 className="titoloRiquadri">{item.title}</h1>
                        <p className="pRiquadri">{item.p}</p>
                    </div>
                )})}
            </div>
    
        </>
       
    )
};

export default Riquadri;