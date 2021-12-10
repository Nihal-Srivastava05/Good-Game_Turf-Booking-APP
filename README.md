# Good-Game_Turf-Booking-System

This is a sports turf booking app (Like an event booking app) with added feature of connecting with people to play with. It has in-buit chatting system in which we can make rooms so people can communicate and find new people. It also has a credit system which you can earn by playing and winning more games and those points can be later redemeed into gift coupons or items from store.

This web app is made in **React js** with **graphql** backend which links with **mongodb** database. It also uses a socket.io server for messaging feature.

## Setup:
- Install the necessary packages by using the `npm install`
- The above command needs to be done at three places(react, graphql and socket server) 
- First do `npm install` at root directory then cd into frontend and do the same and last do it in server folder.
- To run the server run `npm start` on root directory.
- To client client app cd into frontend and run `npm start`
- finally for messaging cd into server and run `npm start`
- Go to https://localhost:3000/ to view the app.

## Setup Google API for maps and Database (MongoDB):
- For MongoDB go to its official website and make an account.
- Next make a cluster in it and copy its key.
- Open the project and make a file called nodemon.json
- make variable MONGO_USER, MONGO_PASSWORD and MONGO_DB and store your creditials over there.
- Also make a similary file called .env.local inside components folder and store your GCP cluster key in a variable called REACT_APP_GOOGLE_MAPS_API_KEY.
- Now you are ready to use the app.

References:
I followed a few tutorials online to make this app: <br>
https://www.youtube.com/watch?v=7giZGFDGnkc&list=PL55RiY5tL51rG1x02Yyj93iypUuHYXcB <br>
https://www.youtube.com/watch?v=NU-HfZY3ATQ
