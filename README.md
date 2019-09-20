# Better Mortgage Frontend Test
This is a simple implementation of a chat user interface.
Please implement the spec (design and product) using these instructions.

## Instructions 
* cd into the client folder and run ```npm install``` 
* cd into the root directory run ```npm install``` 
* now that we've install all dependencies installed, please run the command ```npm run dev```

##  Project architectural
React, node and mongoDB.

Basic infomration flow: 
The front end will communicate to our express/node backend. The backend will communication with the mongodb database. Afterwards, he backend will be send a response to the react app. 

When running in dev mode, we will have a react and express/node server. In production mode, however, there will only be an express server which will serve up the front end javascript bundle. This was chosen because the production version will help facilitate seemless requests from browser (because we are on the same port). The advantages to his is: we do not have to use CORs, do not need worry about cookies and can make use of relative routes. To help mimick this in dev, a proxy was used. 


