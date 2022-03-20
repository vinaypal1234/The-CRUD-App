// GETTING VALUES
let fullname = document.querySelector("#fullname");
let number = document.querySelector("#number");
let email = document.querySelector("#email");

// ADD VALIDATION
let fullnameValidation = document.getElementById("fullname-validation");
let numberValidation = document.getElementById("number-validation");
let emailValidation = document.getElementById("email-validation");

// REGISTER BUTTON
let addBtn = document.querySelector("button");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let employeeInfo;

  //   VALIDATING FORM HERE
  if (
    fullname.value == "" ||
    fullname.value.length < 3 ||
    number.value == "" ||
    number.value.length < 10 ||
    number.value.length > 10 ||
    email.value == ""
  ) {
    document.querySelectorAll("form div").forEach((input) => {
      input.style.marginBottom = "30px";
    });

    fullnameValidation.innerText = "This field is required";
    numberValidation.innerText = "This field is required";
    emailValidation.innerText = "This field is required";
    // ageValidation.innerText = "This field is required";

    // Fullname Validation
    if (fullname.value != "" && fullname.value.length < 3) {
      fullnameValidation.innerText =
        "Fullname should be longer than 2 Alphabets";
    } else if (fullname.value.length > 2) {
      fullnameValidation.innerText = "";
    }

    // NUMBER Validation
    if (number.value != "" && number.value.length < 10) {
      numberValidation.innerText = "Number should be 10 digits long";
    } else if (number.value != "" && number.value.length > 10) {
      numberValidation.innerText = "Number should be 10 digits long";
    } else if (number.value.length > 9) {
      numberValidation.innerText = "";
    }

    // Email Validation
    let regex =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (email.value != "" && !regex.test(email.value)) {
      emailValidation.innerText = "npt valid";
    } else if (regex.test(email.value)) {
      emailValidation.innerText = "";
    }
  } else {
    // AFTER VALIDATION COMPLETES
    employeeInfo = {
      fullname: fullname.value,
      phone: number.value,
      email: email.value,
    };

    // // SENDING DATA TO SERVER
    fetch("/register/registerEmployee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employeeInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message == "Form Submitted") {
          alert(data.message);
          fullname.value = "";
          number.value = "";
          email.value = "";
          fullnameValidation.innerText = "";
          numberValidation.innerText = "";
          emailValidation.innerText = "";
        } else {
          alert("Request Failed");
        }
      });
  }
});
