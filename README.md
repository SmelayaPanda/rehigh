# rehigh

> re:High Studio Work panel page

for deploy to firebase hosting run only: 
  $ firebase deploy (without yarn build) 

Notes:
1. global.scss
   + npm install sass-resources-loader
   + npm install node-sass
   + npm install sass-loader
   + build/utils.js replace sass loader
   + import global.scss file into main.js and in resources of build/utils.js
