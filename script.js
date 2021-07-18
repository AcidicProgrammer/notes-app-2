function openBox() {
    let linkbox = document.getElementsByClassName("linkbox")[0];

    if(linkbox.style.display == "none") {
        linkbox.style.display = "block";
    }
    else {
        linkbox.style.display = "none";
    }
}

function create() {
    let text = document.getElementById("text").value;
    let link = document.getElementById("link").value;

    if(text == "" || link == "") {
        alert("Please input something");
    }
    else if(!link.includes("https://")) {
        alert("Please use a valid link");
    }
    else {
    let display_link = document.createElement('a');
    let linkText = document.createTextNode(text);
    display_link.appendChild(linkText);
    display_link.href = link;
    document.getElementById("notes").appendChild(display_link);

    this.text.value = "";
    this.link.value = "";
  }

  let linkbox = document.getElementsByClassName("linkbox")[0];
 
    if(this.text.value == "" && this.link.value == "") {
        linkbox.style.display = "none";
    }
    else {
        linkbox.style.display = "block";
    }
}

function register() {
    let email = document.getElementById("email").value.toLowerCase();
    let first_name = document.getElementById("fname").value;
    let password = document.getElementById("password").value;
    
    if(email == "" || first_name == "" || password == "") {
      alert("Please fill all fields.");
    }
    else if(email == localStorage.getItem("Email") && first_name == localStorage.getItem("First Name") && password == localStorage.getItem("Password")) {
      alert("You've already made an account with these credentials");

      this.email.value = "";
      this.first_name.value = "";
      this.password.value = "";
    }
    else {
      location.href = "index.html";
      localStorage.setItem("Email", email);
      localStorage.setItem("First Name", first_name);
      localStorage.setItem("Password", password);

      alert("Thank you for making an account, " + localStorage.getItem("First Name") + "!");
    }

  }  

  function login() {
    let first_name = document.getElementById("fname").value;
    let password = document.getElementById("password").value;

      localStorage.getItem("First Name", first_name);
      localStorage.getItem("Password", password);


    if(first_name == localStorage.getItem("First Name") && password == localStorage.getItem("Password")) {
        location.href = "index.html";
        alert('Welcome, ' + localStorage.getItem("First Name"));
    }
    else if(first_name !== localStorage.getItem("First Name")) {
        alert("Incorrect name");
    }
    else if(password !== localStorage.getItem("Password")) {
        alert("Incorrect password");
    }
    else {
        alert("Incorrect login credentials. Please try again.");
    }
 }

 function createPassword() {

    let email = document.getElementById("email").value;
    let new_password1 = document.getElementById("new_password1").value;
    let new_password2 = document.getElementById("new_password2").value;

    localStorage.getItem("Email");

    if(email == "" ||  new_password1 == "" || new_password2 == "") {
        alert("Please input something");
    }
    else if(!email == localStorage.getItem("Email")) {
        alert("Incorrect email");
    }
    else if(new_password1 !== new_password2) {
        alert("Passwords do not match");
    }
    else {
        let new_password = new_password1, new_password2;
        new_password = localStorage.setItem("Password", new_password);
        alert("Password successfully changed!");
    }
}

var notes_written = document.getElementById("notes");

function save() {

    if (document.getElementById("notes").innerHTML == localStorage.getItem("Notes Written")) {
        alert("You haven't made any changes to your notes for them to be saved");
    }
    else if(notes_written.innerHTML == "") {
        alert("You haven't written anything to save yet!");
    }
    else {
        let notes_name = prompt("What would you like to name your notes?");
        let first_letter = notes_name.charAt(0); 
        let fl_uppercase = first_letter.toUpperCase(); 
        let notes_length = notes_name.length - 1; 
        let final = fl_uppercase + notes_name.substr(1, notes_length);  
        
        if(notes_name == null) {
            alert("Notes saving cancelled");
            localStorage.removeItem("Notes Written");
        }
        else {
            notes_written = document.getElementById("notes").innerHTML;
            localStorage.setItem("Notes Written", notes_written);
            localStorage.setItem("Notes Name", final);
            alert(`"${final}" successfully saved!`);
        }    
    }
}

function loadNotes() {

  let notes_name = localStorage.getItem("Notes Name");

  if(localStorage.getItem("Notes Written") === null) {
      alert("You have no notes saved yet.")
  }
  else {
    alert(`${notes_name} successfully loaded`);
    document.getElementById("notes").innerHTML = localStorage.getItem("Notes Written");
  }
}

function DeleteNotes() {

    if(localStorage.getItem("Notes Written") == null && localStorage.getItem("Notes Name") == null) {
        alert("There is nothing to delete");
    }
    else if(localStorage.getItem("Notes Written") && localStorage.getItem("Notes Name") !== null) {
        var prompt_confirmation = prompt(`Are you sure you'd like to delete the notes "${localStorage.getItem("Notes Name")}"? If so, type CONFIRM and If not, press cancel.`);

         if(prompt_confirmation == null) {
            alert("Deletion cancelled");
        }
         else if(prompt_confirmation === "confirm" || prompt_confirmation === "Confirm" || prompt_confirmation === "CONFIRM") {
          localStorage.removeItem("Notes Written");
          localStorage.removeItem("Notes Name");
          alert("Notes successfully deleted!");
       } 
    }
}

function logout() {
    let confirmation = confirm("Are you sure you'd like to logout?");

    if(confirmation !== false) {
        alert("You have been logged out");
        location.href = "login.html";
    }
}

let fontSize = document.querySelector("#fontSize").value;
const selection = document.getSelection();

if(selection) {
    
}


// function checkList() {
//     let box = document.getElementsByClassName("list")[0];

//     if(box.style.display == "none") {
//         box.style.display = "block";
//     }
//     else {
//         box.style.display = "none";
//     }

// }

// Things to maybe do:

// If notes are already saved, but you're about to save some new notes, give an alert that there's already some notes saved

// Give an option to save multiple notes. The user would be able to name the notes + look through the names of notes that already have been named previously and choose to open that specific note if they type in the name that exists.

// Maybe add a rename notes option but it's not a major priority or necessary