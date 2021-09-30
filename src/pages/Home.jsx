import React from 'react'
import "./Home.css"
import {Link} from "react-router-dom"
import AppsIcon from '@material-ui/icons/Apps';
import Avtar from '@material-ui/icons/AccountCircle';
import Search from "./Search"


function Home() {
    return (
        <div className="home">
           
            <div className = "home_header">
                <div className = "home_headerLeft">
                    <Link to ="/about">About</Link>
                    <Link to ="/store">Store</Link>

                </div>
                <div className = "home_headerRight">

                    <Link to ="/gmail">Gmail</Link>
                    <Link to ="/images">Images</Link>
                    <AppsIcon/>
                    <Avtar/>
                </div>
            
            </div>
            <div className="home_body">
                <img src = "https://pngimg.com/uploads/google/google_PNG19642.png " alt=""/>
                <div className = "home_inputContainer">
                    <Search 
                    
                    
                    
                    />
                    
                </div>
                
            </div>
           
        </div>
    )
}

export default Home