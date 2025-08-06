'use client'

import { IconContext } from "react-icons";
import { FaXTwitter } from "react-icons/fa6";

export default function Twitter() {
    return <div style={{ height: "20px", width: "20px", backgroundColor: "white", borderRadius: "50%", padding: "5.5px", textAlign: "center", color: "black" }}>
        <IconContext.Provider value={{size:'20px'}}>
            <FaXTwitter />
        </IconContext.Provider>
    </div>
}