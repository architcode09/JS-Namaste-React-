/*
*Header 
 -- logo
 --Nav items
 *body
 - search
 -restaurant container
  -restaurantCard
    -img
    -Name of res, Star Rating ,cuisines ,delivery time

*footer
- copyright
-links
-address
-contact
*/

import React from "react";

import ReactDOM from "react-dom/client";
import Burger from "./burger.png";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">

            <img
             className="logo" 
             src={Burger} 
             alt="Food Logo"
            />

            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>

            </div>

        </div>
    );
}

const RestaurantCard = ()=> {
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img 
            className="res-logo"
            alt="res-logo"
            src="https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1667807671/arya7zjutdlras4zza6c.webp"/>
            <h3>Arabian Grills</h3>
            <h4>Biryani , North Indian , Asian</h4>
            <h4>4.4 stars</h4>
            <h4>Delivery within-38 minutes</h4>

        </div>
    );
}

const Body = () =>{
    return (
    <div className="body">
        <div className="search">
          Search
        </div>
        <div className="res-container">
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
        </div>
    </div>
    );
}

  
const AppLayout = () =>{
    return (
        <div className="app">

            <Header></Header>
            <Body></Body>

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);