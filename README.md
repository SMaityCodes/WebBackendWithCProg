## 📦 The Organization of this repository:-

```
project-root/
├── docs/                  # Contains the fronend hosting files
│   ├── index.html
│   ├── script.js
│   └── style.css

├── render-backend/        # Contains the backend hosting files
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
├── readme.md              # This file

```
## Programmer's Guidelines:-
This repository has been created to learn how to fist 1) Develop and test a full-stack website on local machine and then host it on web.

## How to test it on local machine:-
### Prerequisite 
- Nodejs : for server-side scripting, supporting requirement for ganache etc.
- VSCode : editor for solidity etc.
- LiveServer : for hosting web-server

### Testing Steps
- download the repo.
- open the 'script.js' and change the API-URL with your machine's IP adress (or loopback address) in this line:-

  `fetch("https://websitewithbackend-v2.onrender.com/calculate", {`
- like this:-

  `fetch("http://172.26.23.122:10000/calculate", {`
    - use your IP in the above (or loopback address)
    - note that we have replaced 'https' by 'http' . Why? Investigate by yourself.
- open the index.html in a browser
- go to the "render-backend" folder and run the following commands:-
  
   `npm init -y`
  
    `npm install express cors body-parser`
  
    `node server.js`
  
- Now it is deployed at your local machine - test it on the browser you opened in the above step.
- if you want to access your webiste from another machine on the same network (intranet):-
  - host the fronend on your machine using some web-hosting application (you may use "LiveServer" using which you can deploy easily from Visual Studio)
  - access the site using the following url on browser from any other machine on the same network:
 
    `http://172.26.23.122:5500/index.html`
  - note that "LiveServer" hosts the web-application in port-no. 5500. For other web-hosting applications, port no. may be different


## Deployment Guidelines:-

Same as main branch
