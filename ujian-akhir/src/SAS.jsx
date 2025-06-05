import React from "react";
import galang from "./assets/me.jpg"

function SAS() {
    return (
        <div>
            <h1>SAS</h1>
            <p>Ini adalah foto saya ketika saya sedang di kawah putri.</p>
            <img style={{width: "200px"}} src={galang} alt="foto galang"/>
        </div>
    );
}

export default SAS 