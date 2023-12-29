import React, { Component } from "react";
import './main.css'
function Main({ children }: any){
    return (
       <div className="main">
        { children }
       </div>
    )
}

export default Main