// Initialize Firebase
var config = {
  apiKey: "AIzaSyA41umBYSV6g6izIkDqk4L90YYQDuzYjRk",
  authDomain: "homework7-a6a2e.firebaseapp.com",
  databaseURL: "https://homework7-a6a2e.firebaseio.com",
  projectId: "homework7-a6a2e",
  storageBucket: "homework7-a6a2e.appspot.com",
  messagingSenderId: "838112559611"
};
firebase.initializeApp(config);

var database = firebase.database();


// 2. Button for adding Employees
$("#add-train-btn").on("click", function(event) {
  event.preventDefault();

  // Grabs user input
  var trainName = $("#train-name-input").val().trim();
  var trainDes = $("#destination-input").val().trim();
  var firstTime = moment($("#first-time-input").val().trim(), "DD/MM/YY").format("X");
  var trainFreq = $("#frequency-input").val().trim();

  // Creates local "temporary" object for holding employee data
  var newTrain = {
    name: trainName,
    destination: trainDes,
    first: firstTime,
    frequency: trainFreq
  };

  // database.ref().push(newTrain);

  // Logs everything to console
  console.log(newTrain.trainName);
  console.log(newTrain.trainDes);
  console.log(newTrain.firstTime);
  console.log(newTrain.trainFreq);


});


// Assumptions
var tFrequency = 3;

// Time is 3:30 AM
var firstTime = "03:30";

// First Time (pushed back 1 year to make sure it comes before current time)
var firstTimeConverted = moment(firstTime, "hh:mm").subtract(1, "years");
console.log(firstTimeConverted);

// Current Time
var currentTime = moment();
console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

// Difference between the times
var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
console.log("DIFFERENCE IN TIME: " + diffTime);

// Time apart (remainder)
var tRemainder = diffTime % tFrequency;
console.log(tRemainder);

// Minute Until Train
var tMinutesTillTrain = tFrequency - tRemainder;
console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

// Next Train
var nextTrain = moment().add(tMinutesTillTrain, "minutes");
console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
