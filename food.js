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

import Header from "./src/components/Header";
import Body from "./src/components/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Body></Body>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
