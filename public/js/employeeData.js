// delete employee
const deleteEmployee = (employeeId) => {
  fetch(`/employeeData/delete/${employeeId}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.message == "Employee Deleted") {
        location.reload();
      } else {
        alert("Request Failed");
      }
    });
};

// get employee to edit
const getEmployeeToEdit = (employeeId) => {
  let editPopup = document.querySelector(".edit-popup");
  fetch(`/employeeData/single/${employeeId}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      data.map((employeeData) => {
        editPopup.innerHTML = `
        
    <i class="bx bx-x close_popup"
        style="color: red"
        onclick="closeEditPopup()"
      ></i>
      <div class="form">
        <h4>Edit Employee Data</h4>
        <div class="employee-fullname">
          <input
            type="text"
            id="fullname"
            value="${employeeData.fullname}"
            placeholder="Fullname"
          />
        </div>
        <div class="employee-email">
          <input
            type="text"
            id="email"
            value="${employeeData.email}"
            placeholder="Email"
          />
        </div>
        <div class="employee-phone">
          <input
            type="text"
            id="phone"
            value="${employeeData.phone}"
            placeholder="Phone"
          />
        </div>

        <button id="edit-employee-btn" onclick="editEmployeeData(${employeeData.id},fullname.value,email.value,phone.value)">Done</button>
      </div>
        
        `;
        editPopup.style.display = "block";
      });
    });
};

function closeEditPopup() {
  document.querySelector(".edit-popup").style.display = "none";
}

function editEmployeeData(employeeId, fullname, email, phone) {
  let employeeInfo = {
    fullname,
    email,
    phone,
  };
  fetch(`/employeeData/edit/${employeeId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employeeInfo),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.message == "Employee Updated") {
        location.reload();
      } else {
        alert("Request Failed");
      }
    });
}
