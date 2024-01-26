import React from 'react';
const Sponser=()=>{
    return(
        <>
        <div className="sponser-cont bg-[#0D1117] h-[100vh] text-gray-300 ">
            <div className="sponser-heading">
                <h1>Sponsers</h1>
            </div>
            <div className="sponser-boxes">
            <div className="box">
                <img src={process.env.PUBLIC_URL + "/svg/spykar.svg"} alt="not found"  />
            </div>
            <div className="box">
                <img src={process.env.PUBLIC_URL + "/svg/Westside.svg"} alt="not found"  />
            </div>
            <div className="box">
                <img src={process.env.PUBLIC_URL + "/svg/gfg.svg"} alt="not found"  />
            </div>
            <div className="box">
                <img src={process.env.PUBLIC_URL + "/svg/elixir.svg"} alt="not found"  />
            </div>
            <div className="box">
                <img src={process.env.PUBLIC_URL + "/images/sponserimage/herody.png"} alt="not found"  />
            </div>
            <div className="box">
                <img src={process.env.PUBLIC_URL + "/images/sponserimage/codingblock.png"} alt="not found"  /></div></div>
            
        </div>
        </>
    )
};
export default Sponser;