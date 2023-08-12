const express = require('express');
const router = express.Router();

// Define routes here

// Get / - home page displaying all routes 
router.get('/', (req, res) => {
    //Implement logic to display routes and descriptions
});

// Get /users - Display a list of users 
router.get('/users', (req, res) => {
    //Implement logic to fetch and display users
});

//Get /user/:id - Display a single user
router.get('/user/:id', (req, res) => {
    //Implement logic to fetch and display a single user
});

//Put /user/:id - Update user's record
router.put('/user/:id', (req, res) => {
    //Implement logic to update a user's record
});

//Patch /user/:id - Modify a use's record
router.patch('/user/:id', (req, res) => {
    //Implement logic to modify a user's record
});

// ... and so on for other routes

MediaQueryListEvent.exports = router;
