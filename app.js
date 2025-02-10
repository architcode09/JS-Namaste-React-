
import React from "react";

import ReactDOM from "react-dom/client";



const jsxHeading = <h1 className= "head" id="heading"> namaste react using the JSX</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);


// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am an h1 tag"),
//     React.createElement("h2", {}, "I am an h2 tag"),
//   ]),
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am an h1 tag"),
//     React.createElement("h2", {}, "I am an h2 tag"),
//   ]),
// ]);
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);



