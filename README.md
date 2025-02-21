 // const heading = React.createElement("h1", {}, "Hello World from react");
this react.createElement is an object
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(heading);
 this render is converting the heading object to h1 tag and then putting it on the webpage //




/*
under is written for the issue we faced in using the 
reactdom.createroot
react-dom: Contains utilities like ReactDOM.render (deprecated) and ReactDOM.hydrate.
react-dom/client: Introduces createRoot, which is required for concurrent rendering.
*/


//package.json is a configration  for the npm

npm is basically is a package manager and it will manage all the packages that we will install in our system
and sometimes these packages are also known as the dependencies . our project is dependent on alot of packages and the packages on which
our project is dependent are called dependencies.
npm will take care of the what is the version of that package we are using


BUNDLERS :

When working with React, bundlers are tools that process and package your code (JavaScript, CSS, images, etc.) 
into optimized files for the browser. 
These bundlers rely on dependencies (packages) to perform tasks like:

Minification (making the code smaller)
Tree shaking (removing unused code)
Code splitting (loading only what’s needed)
Transpiling (converting modern JS to older versions)

Popular Bundlers in React


Webpack (Most Common, Used in Create React App)
---> Parcel (Fast, Zero Config)
Vite (Super Fast, Uses ES Modules)
Snowpack (Deprecated, Used ES Modules)
Wheat (Lesser Known, Lightweight Alternative)



NOTE :
there are two types of dependencies that we can install 
1-> devdependencies : used when we are developing our app
2-> normal dependendencies :used in production 



In package.json, caret (^) and tilde (~) are used for versioning dependencies, 
and they define how updates are handled when running npm install.

caret:
used to install the minor versions
✅ Will install versions from 18.2.0 → 18.9.0 (but not 19.0.0)
tilda:
used to install the major versions
✅ Will install versions from 18.2.0 → 18.2.9 (but not 18.3.0)



PACKAGE LOCK.json :
package-lock.json keeps the track of the latest version that is being installed
it basically locks the version and keeps the track of it


node modules:
it contains all the code that we fetched from the npm



transitive dependencies:
our code has a parcel dependencies and if parcel has another dependency x and that x if  has
another dependency then this type of dependencies are called transitive dependencies 


----note-----
 npx parcel index.html
Server running at http://localhost:1234
✨ Built in 2.38s

after running the above command  parcel has created  our app and it is running on the local port 1234

what is the npx command:
npx parcel means executing a package

# parcel:
-DEV build
- local server
- HMR HOT MODULE REPLACEMENT
-  parcel gives us the faster developing build       
   because it uses the cashing 

- parcel will do the image optimisation also
- minification
- bundling the things
- compress our file too
- parcel uses consistent hashing
- code spilitting 
- differential bundling - to support the older browsers

- gives us better error handling 
- does the diagnostics 
- parcel also  does the tree shaking i.e it removes the unused code    
- gives the different dev and prod bundles




NOTE :--> parcel does all this using the file watching algorithm - and it is written in c++

# when we do the npx parcel  build index.html it will bundle and put all our files in the new dist folder created 


/*react elements :
React.createElement is an example of the react element 
react elements at the end of  the day are objects and when we render this object onto the dom then it becomes the HTMLelement
*/

const root = ReactDOM.createRoot(document.getElementById("root"));
// here above the react dom is used because we want to display this on the browser

/*
const heading = React.createElement("h1",{id:"heading"},"Namaste React");
const root = ReactDOM.createRoot(document.getElementById("root"));
# here above the react dom is used because we want to display this on the browser
root.render(heading);

$ here if we look at the above code to create a react element we can see that its more complicated than a normal html syntax to just create an h1 heading using react so f.b developers created something known as the JSX :
and note that jsx is not a part of the react jsx is separate and react is different jsx just makes the life of the developers easy 

example of the jsx syntax :
const jsxheading = <h1> namaste react using the javascript</h1>
// we can see here how easy the syntax is made using the react . AND note that jsx is not html jsx is html like syntax 


// our javascript engine understands the echmascript i.e es6 it does not understands the JSX

So the jsx is transpiled before it goes to the js engine  and that transpiling is done the parcel and in parcel there is a package called babel which is doing all this

const jsxHeading = <h1> Namaste react using the javascript</h1>

above heading will get converted to react.createElement automatically when it gets transpiled and it is done all by the parcel



# PROPS IN REACT :
   short form of the  properties , we can pass props to the component in react , here we will need this for the creation of the different menu cards as same RestaurantCard component can not be used to create menu card for all the restaurants So we use props here

   PROPS are just the normal arguments to a function

   NOTE that when i say I am passing props to a function it is same as that i am passing the parameters to a function




# Config driven UI :
         -"Config-Driven UI is a pattern where the UI structure, content, and behavior are controlled using external configuration files (like JSON or databases) instead of hardcoding everything. This allows companies like Swiggy, Zomato, and Netflix to dynamically change UI based on location, user preferences, or business needs without modifying the codebase."

        - Config-Driven UI allows companies to dynamically change UI elements based on the user's region, preferences, and behavior without hardcoding everything.

        For example, in Swiggy or Zomato:

         A user in Delhi might see North Indian restaurants at the top.
         A user in Chennai might see South Indian restaurants first.
         A user in Mumbai might see Maharashtrian dishes as priority.




API MEANING AND API CALL :
     -Think of an API like a waiter in a restaurant 🍽️.
      You (the frontend) place an order (request).
      The waiter (API) takes the order to the kitchen (backend).
      The kitchen prepares the food (data processing) and gives it to the waiter.
      The waiter then serves the food to you (response).
      So, when you  use an API, you're requesting data from a server and receiving a response.
     frontend->request->API-> gets data from->backend
      



      API_CALL:
      -An API call means sending a request to a server (backend) from your frontend (React/JavaScript app) to fetch or send data.

         For example, when you open Swiggy:

         The app makes an API call to fetch restaurant data.
         The API sends back a list of restaurants.
         The frontend displays the restaurants dynamically.




   Two types of export and import :
       -
       default export/ import //used when we  have to export and import one component from the single file

       - named export/import // when we have to export or import the multiple components from the dingle file


       Note: "We can use both default export and named export in the same React or JavaScript file. "
      import multiply, { add, subtract } from './utils';



# REACT HOOKS

     -(Normal js utility functions)
     -useState() - used to generate superPowerful react variables and keep in mind that useState is used to create state variables

     and useEffects() are the two main utility functions


Normal JS variable -> let nameofvariable;
State variable -> const [nameofvariable] = useState();
Note whenever the stateVariable  updates react will rerender the component




GYAAN KI BAAT;
  - when we try to fetch the api of a live website we get error that fetch blocked by the CORS policy i.e our browser blocks us





const Body = () => {
  const [resList, setResList/* state variable */] = useState(resListData);
    /*In React, useState is a hook used to create state variables.

    State variables are variables that React tracks. When their values change, React re-renders 
    the component to reflect the new data. */

    
    /*useEffect has two parameters 
      -1 callback function.
      -2 dependency array
      
      this call back function inside the useEffect is called  after
      our component renders */
      useEffect(()=>{
        fetchData();
      },[]);