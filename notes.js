//package.json is a configration  for the npm
/* 
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

*/ 

