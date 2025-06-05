import React from "react";
import galang from "./assets/me.jpg"

function SAS() {
    return (
        <div>
            <h1>SAS</h1>
            <p>Ini adalah foto saya ketika saya sedang di kawah ratu di ketinggian 1437 MDPL.   </p>
            <img style={{width: "200px"}} src={galang} alt="foto galang"/>
        </div>
    );
}

export default SAS 