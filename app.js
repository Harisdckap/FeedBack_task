"use strict"

// let feedback_form = document.forms.Feedback_Form
// console.log(feedback_form);

// let feed_para = document.querySelector(".feed_para")



// feedback_form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   let Input_val = feedback_form.elements.ename.value
//   let Radio_ch = feedback_form.elements.Feed_Radio.value
//   let Email_val = feedback_form.elements.Feed_email.value
//   let Text_val = feedback_form.elements.Feed_Content.value
//   let Check_ch = feedback_form.elements.Feed_check.checked

//   if (Input_val === "") {
//     feed_para.innerHTML = "The Input value is empty";
//     feed_para.classList.add("para");

//     setTimeout(() => {
//       feed_para.innerHTML = "";
//       feed_para.classList.remove("para");
//     }, 2000);
//   }


//   else if (Radio_ch === "") {
//     feed_para.innerHTML = "Select the Radio Button";
//     feed_para.classList.add("para");

//     setTimeout(() => {
//       feed_para.innerHTML = "";
//       feed_para.classList.remove("para");
//     }, 2000);
//   }

//   else if (Email_val === "") {
//     feed_para.innerHTML = "Enter the Email";
//     feed_para.classList.add("para");

//     setTimeout(() => {
//       feed_para.innerHTML = "";
//       feed_para.classList.remove("para");
//     }, 2000);
//   }

//   else if (Text_val === "") {
//     feed_para.innerHTML = "Enter your Feedback";
//     feed_para.classList.add("para");

//     setTimeout(() => {
//       feed_para.innerHTML = "";
//       feed_para.classList.remove("para");
//     }, 2000);
//   }

//   else if (!Check_ch) {
//     feed_para.innerHTML = "Enter Terms and Conditions";
//     feed_para.classList.add("para");

//     setTimeout(() => {
//       feed_para.innerHTML = "";
//       feed_para.classList.remove("para");
//     }, 2000);
//   }

//   else {
//     feed_para.innerHTML = "The Form Submitted Successfully"
//     feed_para.classList.add("para1");

//     setTimeout(() => {
//       feed_para.innerHTML = "";
//       feed_para.classList.remove("para1");
//     }, 2000);

//     feedback_form.reset();
//   }
// });









//way 2














var feed_para = document.querySelector(".feed_para")

let feedback_form = document.forms.Feedback_Form
console.log(feedback_form);


feedback_form.addEventListener("submit", (event) => {
  event.preventDefault();

  let Input_val = feedback_form.elements.ename.value;
  let Radio_ch = feedback_form.elements.Feed_Radio.value;
  let Email_val = feedback_form.elements.Feed_email.value;
  let Text_val = feedback_form.elements.Feed_Content.value;
  let Check_ch = feedback_form.elements.Feed_check.checked;



  if (Input_val === "") {
    showMessage('The Input value is empty ');
  } else if (Radio_ch === "") {
    showMessage("Please select a radio button");
  } else if (Email_val === "") {
    showMessage("Enter the Email");
  } else if (Text_val === "") {
    showMessage("Enter your Feedback");
  } else if (!Check_ch) {
    showMessage("Enter Terms and Conditions");
  }
  else {
    showMessage("The Form submitted Successfully")
    feed_para.classList.add("para1");
    feedback_form.reset();
  }

});

var feed_para = document.querySelector(".feed_para")

function showMessage(message) {
  feed_para.innerHTML = message;
  feed_para.classList.add("para");

  setTimeout(() => {
    feed_para.innerHTML = "";
    feed_para.classList.remove("para");
    feed_para.classList.remove("para1");
  }, 2000);
}
