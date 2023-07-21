// index.js (inside the server directory)

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

let generatedOTP = null;

// Your other existing endpoints and configurations go here...

app.get("/", (req, res) => {
    res.send("Welcome to the Macro-Touch application!");
});
// Endpoint for sending OTP
app.post("/api/sendOTP", (req, res) => {
    // Get the phone number from the request body
    const { phoneNumber } = req.body;

    // Generate the OTP (You may use a library for generating OTP, e.g., 'otp-generator')
    generatedOTP = generateOTP();

    // In a real-world scenario, you should send the OTP to the user's phone number via SMS
    // Here, we'll just respond with the generated OTP for demonstration purposes.

    console.log(`OTP sent to ${phoneNumber}: ${generatedOTP}`);

    // Send the OTP back to the client as a response
    res.json({ otp: generatedOTP });
});

// Endpoint for OTP verification
app.post("/api/verifyOTP", (req, res) => {
    const { otp } = req.body;

    // For demonstration purposes, we'll consider the OTP "123456" as valid
    // In a real-world scenario, you should compare the received OTP with the generated OTP (e.g., from a database)
    // If the OTP is valid, send success response; otherwise, send an error response.

    if (otp === generatedOTP) {
        res.status(200).json({ message: "OTP verification successful" });
    } else {
        res.status(400).json({ message: "Invalid OTP" });
    }
});

// Function to generate OTP (you may use a library for this)
function generateOTP() {
    // Example: Generate a random 6-digit OTP
    return Math.floor(100000 + Math.random() * 900000).toString();
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
