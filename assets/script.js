const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var now = new Date();
var currentHour = now.getHours();
const scheduleInfos = ["wash the car", "", "", "", "", "", "", "", ""];
const clock = document.getElementById("clock");
clock.innerHTML = now;

$(function () {
  const hourBlock = $("#hour-block");
  for (let index = 0; index < hours.length; index++) {
    const hour = hours[index];
    const scheduleInfo = scheduleInfos[index];
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
        <textarea class="col-8 col-md-10 description" rows="3">${scheduleInfo} </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
      </div>`
    );

    let button = $(`#hour-${hour} button`);
    button.on("click", function () {
      alert("Handler for `click` called.");
    })

    function saveUserData() {
      const key = "scheduleData";
      // call get item to see what is already in storage
      // parse it from a string to an array 
      const localStorageSchedule = localStorage.getItem(key);
      let schedule = scheduleInfos;
      schedule = JSON.parse(localStorageSchedule);
      // get what user types into text area
      // put it in the array 

      //then set array back into local storage ( stringify)
      const scheduleJSON = JSON.stringify(schedule);
      localStorage.setItem(key, scheduleJSON);
    }
    saveUserData();
  }

  //**HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?**

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements.

  //**HINT: How can the id
  // attribute of each time-block be used to do this?**
});

