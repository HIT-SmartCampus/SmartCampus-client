const express = require('express')
const router = express.Router()
const schemas = require("../models/schemas")
const axios = require('axios')
const jwt = require('jsonwebtoken');



router.post("/register", async(request, response) => {
    const url = 'https://us-east-1.aws.data.mongodb-api.com/app/application-0-utuik/endpoint/register';
    const {email, firstName, lastName, password} = request.body
    const userData = {
        email: email,
        firstName:firstName,
        lastName: lastName,
        password: password,
        role: "Viewer",
        }
        
axios.post(url, userData)
  .then(response => {
    // Handle the response here (if needed)
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.message);
    response.end(); 
  });
   
    response.end()
})

router.post('/login', async (request, response) => {
  const url = 'https://us-east-1.aws.data.mongodb-api.com/app/application-0-utuik/endpoint/login'; // Replace this with your login endpoint URL
  const { email, password } = request.body;
  const userData = {
    email: email,
    password: password,
  };
  axios
    .post(url, userData)
    .then((apiResponse) => {
      
      const user = apiResponse.data; // Assuming the API response returns the user data
      if (apiResponse.status === 200 && user.email === email) {
        const token = jwt.sign({ email: user.email, role: user.role, thingsBoardToken:user.thingsBoardToken }, '1234');
        response.json({ token:token , user: user });
      } else {
        response.status(401).json({ error: 'Invalid login credentials'});
      }
    })
    .catch((error) => {
      console.error('Error while logging in:', error);
      response.status(500).json({ error: 'Internal server error' });
    });
});
module.exports = router