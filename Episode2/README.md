# Episode 02 Inception
<br>

# Parcel
  - Dev Build
  - Local server
  - HMR -> Hot Module Replacement
  - File wactching algorithm -> written in c++
  - Caching -> Faster Builds
  - Image Optimization
  - Minification 
  - Bundling
  - Compress
  - Consistent Hashing
  - Code splitting
  - Differential Bundling -> Supports Older Browsers 
  - Diagnostic(beautiful erros) -> User can not see errors they are displayed on the console
  - Error Handling
  - HTTPS
  - Tree shaking -> remove unused code
  - Different dev and production bundles

While Adding npm into this folder i used test command : jest 
<br>
package.json file is a configuration for our npm 
<br>
^ -> caret -> automatically updates minor version of dependencies
<br>
~ -> tilde -> automatically updates major version of dependencies

<br>

# Commands
  - npm init -> To initialise npm
  - npm install -d packagename -> To install package as devdependency
  - npm install packagename -> To install package as normal dependencies 
  - npm i packagename -> this is also same as above 
  - npm install packagename --save  -> It saves its version in package.json file
  - npm -v -> It gives the version of installed npm
  -npm config get save -> Gives the value of save either true or false 
    => true specifies the installed package is automatically stored inside the package.json file
    => false specifies the installed packages is not stored inside the package.json file we have to use npm install packagename --save or set the save to true
  - npm config set save true
  - npx parcel sourcefile -> It creates the dev build and host it into server at some local host port
  - npx parcel build sourcefile -> same as above it creates the production build  


