const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var now = new Date();
var currentHour = now.getHours();

const clock = document.getElementById("clock");
clock.innerHTML = now;
 //what is the data going to look like for the scheduler in the local storage

$(function () {
  const hourBlock = $("#hour-block");
  for (let index = 0; index < hours.length; index++) {
    const hour = hours[index];
    let ampm = "AM";
    let time = `${hour}AM`;
    if (hour > 11) {
      ampm = "PM";
      time = `${hour - 12}${ampm}`;
    }

    if (hour == 12) {
      ampm = "PM";
      time = `${hour}${ampm}`;
    }

    let perspective = "past";

    // are we in the present? yes? perspective = "present"
    if (currentHour == hour) {
      perspective = "present";
    }

    // are we in the future? yes? perspective = "future"

    if (currentHour < hour) {
      perspective = "future";
    }

    $(hourBlock).append(
      `<div id="hour-${hour}" class="row time-block ${perspective}">
        <div class="col-2 col-md-1 hour text-center py-3">${time}</div>
        <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
      </div>`
    );

 let button = $(`#hour-${hour} button`); 
button.on("click", function()     {
  alert( "Handler for `click` called." );
})
$(button).children(addEventListener("click", button))
console.log(button)
    // bring text back out of local storage like in highscores in challenge 4 
    // second way - instead of appending hour block as a string, make a jquery object for each of the tags and then you would have the button since it was just created with create element -  when created with this varitation, you would have a "button" created
  }



  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage.

  //**HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?**

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements.

  //**HINT: How can the id
  // attribute of each time-block be used to do this?**
});

