# ISS SPACESHIP VIEWER    

# Deployement : https://iss-viewer.netlify.com/

> A Node/React Js website

`ISS-SPACESHIP-VIEWER` is a dynamic website that includes 2D and 3D maps to see the position of the ISS, a vocal command who can tell where ISS is, Google street view of the inside, a live cam filming the earth from the spaceship, a quiz about the life onboard, and pictures of the space who change everyday.

It was created by 5 students of the Wild Code School Marseille during 5 weeks : Ornella Gristi, marie gory, Florian Plot, Alexis ARCHER and Dylan BERTHIER.

Everyone is welcome to use it. It's our second project since we started coding, and we are very proud of it.


## Structure

- `/app.js` Entry point for the application, configures the router
- `components/Router.js` Allows to change component without refresh page
- `components/bouton/Arty.js` Initialisation of the vocal command
- `components/bouton/ArtyomComander.js` Parameters of the vocal command
- `components/footer/Footer.js`End of the page, contact
- `components/footer/SocialMedia.js`End of the page, social networks links
- `components/live/Live.js` Iframe of a live from ISS
- `components/map/Map.js` 2D Map for localise position of ISS
- `components/streetview/Streetview.js` Iframe of the streetview of ISS by Google
- `components/miniGame/MiniGame.js`Iframe of ghify and Nasa mini retro games
- `components/navbar/Navbar.js`Head of page, Links for components in routers
- `components/pictureOfDay/PictureOfDay.js`Pic of space from Nasa, change every day
- `components/quiz/Quiz.js`Quiz call
- `components/quiz/QuizData.js`Quiz data 



## Dependencies

- [React.JS](https://reactjs.org/)
- [Node.JS](https://nodejs.org/)
