
import React from "react";

import ReactDOM from "react-dom/client";


const elem = <span>React Element</span>;
const Heading = ()=> ( 
    
    <h1 className= "head" id="heading">
         Namaste react using the JSX
         

       {elem} {/*writing the element inside the element*/}
        </h1>
    );





// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);

// const Header = ()=>{
//     return <h1>Header component</h1>
// };

// components in react = normal javascript function which returns some javascript element
const HeadingComponent = () =>{
    return(
    <div id="container">
        <h2>{100+200}</h2>
            <Heading/> // heading is another component inside the HeadingComponent i.e called the component composition 
            <h1 className="heading"> Namaste react React ke  functional component</h1>
       
    </div>
     );

};

const HeadingComponent2 = () => <h1> Namaste react functional component</h1>





// 1-> class based components - OLD way
// 2->functional components - NEW way





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

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />)




