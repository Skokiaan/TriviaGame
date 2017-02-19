var intervalId;     //  Variable that holds setInterval that runs timer
var running = false;
var correct = 0;
var incorrect = 0;
var choices = [];
var correctAnswers = ["arthur", "grail", "blue", "nineveh", "what"];

// Get the modal
var modal = document.getElementById('myModal');      
 // Get the button that opens the modal    
var btn = document.getElementById("myBtn");           
    // Get the <span> element that closes the modal  
var span = document.getElementsByClassName("close")[0]; 

//========================================================================================

$(document).ready(function(){

	
window.onload = function() {
    $("#myBtn").on("click", timer.start);
     // modal.style.display = "block";

    
 // When the user clicks the button, open the modal
// btn.onclick = function() {                  
//     modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {                 
//     modal.style.display = "none";
// }

//    // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {     
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
// }

}; // end onload  ============================================================


$(".answers").on("click", function(){
	$(this).attr("value");								           //grab the value
	var selectedValue = $(this).attr("value");			 //put it in a holding varible	
	choices.push(selectedValue);						         //push the holding variable to 'choices' array
	console.log(choices);							               // show choices array in logs

}); //end on click function


function checkAnswers() {

for (var i = 0; i < choices.length; i++) {
       if (choices[i] == correctAnswers[i]) {			// Compare user choices to correct answers
       		correct++;
     } // end if
       else {
       		incorrect++;
     } // end else
 	} // end for loop


    $("#right").html("Right: " + correct);
    $("#wrong").html("Wrong: " + incorrect);

  }  // end checkAnswers

$("#submitBtn").on("click", checkAnswers;



if ("#timeRemain" == 0) {
	running = false;
	clearInterval(intervalId);
	checkAnswers();

}; //end if timer = 0 

}); //end document ready



//============ timer ==========================================================

var timer = {
  time: 5,

  reset: function() {
    timer.time = 30;
    $("#time-remain").html("00:00");  //  Change the "time-remain" div to "00:00."
    running = false;
  }, // end reset

  start: function() {
    if(running == false){  	  //  starts the countdown
    intervalId = setInterval(timer.count, 1000);
    running = true;
  } //end if
  }, //end start

  stop: function() {  		   //  stops the countdown
    clearInterval(intervalId);
    running = false;
  }, //end stop
 
  count: function() {
    timer.time--;  //  decrement time by 1
    //  Get the current time, pass that into the timer.timeConverter function,
    //       and save the result in a variable.
    var converted = timer.timeConverter(timer.time);
    console.log(converted);

    //  Use the variable we just created to show the converted time in the "time-Remain" div.
    $("#time-remain").html(converted);
    console.log(converted);
  },  // end count





//========== time converter ====================================================

timeConverter: function(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  } //end timeConverter
}; //end timer

//=============================================




