function clearForm() {

    var name = document.forms["main-form"]["name"].value;
    var email = document.forms["main-form"]["email"].value;
    var contact = document.forms["main-form"]["contact"].value;
    var date = document.forms["main-form"]["date"].value;

    var givenDate = new Date(date);
    var currenDate = new Date();

    if (name == "") {
    alert("Name must be filled out!");
    }
    else if (email == "") {
        alert("Email must be filled out!");
    }
    else if (contact == "") {
        alert("Contact must be filled out!");
    }
    else if (date == "") {
        alert("Date must be filled out!");
    }
    else if (currenDate > givenDate) {
        alert("You must enter a future date!");
    }
    else {
        alert("Thank you for your booking request. We will be in touch shortly!");
    }

}

