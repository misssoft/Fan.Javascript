# Fan.Javascript

This is a Javascript development starter kit. A learning exercise from Pluralsight course
  https://app.pluralsight.com/library/courses/javascript-development-environment/ 

The starter kit considers
- ES6 Modules
- Package Automation (npm script)
- Web Server (express)
- Transpiling (babel)
- Bundle (webpack)
- Linting (ESLint)
- Testing (Mocha, Chai)
- API (fetch, Jason Server)
- Deployment (Heroku)

The starter kit includes a Demo project, which 
- retrives 5 person records from a Mock API
- user can delete a record
- user can update a record
- user can update all records in one click (seems not working in Chrome, fetch api issue)
- The updated data is persisted in local file: src\api\db.json

To run the demo
- npm install
- npm start

After start
- The web app will be running at: http://localhost:3000   (in Chrome, a refresh is needed to load API data)
- The web api will be running at: http://localhost:3001/users
  


