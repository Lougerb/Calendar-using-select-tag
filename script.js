const inputMonth = document.getElementById("myMonths");
const inputDay = document.getElementById("monthsDay");


//function to add Days to the Day Select
const addDays=function() {
  
  //declare months with 31 and 30 days
  const thirtyOne = ["JAN", "MAR", "MAY", "JUL", "AUG", "OCT", "DEC"];
  const thirty = ["APR", "JUN", "SEP", "NOV"];
  
  //function to remove previous days from selected Month
  //if this is not implemented, every time you select a month
  //More and more days will be added and the days from previous month will remain
  const removePrevDays = function() {
    for (let xDays = 31; xDays >= 0; xDays--) {
      inputDay.innerHTML -= `<option>${xDays}</option>`;
    }
  };
  
//If user pick Febuary
  
  if (inputMonth.value === "FEB") {
    removePrevDays();
    for (let febDay = 1; febDay <= 29; febDay++) {
      document.getElementsByTagName("option");
      inputDay.innerHTML += `<option>${febDay}</option>`;
    }
  }
  
  //For months with 31 days

  for (let monthsWith31 = 0; monthsWith31 <= thirtyOne.length; monthsWith31++) {
    if (inputMonth.value === thirtyOne[monthsWith31]) {
      removePrevDays();

      for (let m31 = 1; m31 <= 31; m31++) {
        inputDay.innerHTML += `<option>${m31}</option>`;
      }
    }
  }

 //For months with 30 days 
  
  for (let monthsWith30 = 0; monthsWith30 <= thirty.length; monthsWith30++) {
    if (inputMonth.value === thirty[monthsWith30]) {
      removePrevDays();
      for (let m30 = 1; m30 <= 30; m30++) {
        inputDay.innerHTML += `<option>${m30}</option>`;
      }
    }
  }
};
inputMonth.addEventListener("change", addDays);
