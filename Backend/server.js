const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();



// Middlewares
app.use(express.json());
// app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(
//   cors({
//     origin: ["http://localhost:3000", "https://pinvent-app.vercel.app"],
//     credentials: true,
//   })
// );

// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes Middleware
// app.use("/api/users", userRoute);
// app.use("/api/products", productRoute);
// app.use("/api/contactus", contactRoute);

// Routes
app.get('/api/', (req, res) => {
    res.send(  'API working!' );
});


// Error Middleware
// app.use(errorHandler);

const PORT = process.env.PORT || 5000;

mongoose
  .connect('mongodb+srv://GANESHPRASHINDE:Ganesh%40143@cluster0.ne9dv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Running on port ${PORT}`);
    });
  })
  .catch((err) => console.log('MongoDB Connection Error:', err));