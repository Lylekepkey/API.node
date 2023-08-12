const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Require routes 
const routes = require("./routes");

// Middleware
app.use(express.json());
app.use(cors());

// Use routes
app.use("/",routes);

app.listen(port, () => {
    console.log('Server is running on port ${port}');
});

