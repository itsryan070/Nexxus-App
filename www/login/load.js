c = new Controller();
c.renderLoginForm();

// handle form
console.log("Checking for form..");
$("#loginform").submit(function (e) {
    e.preventDefault();

    c.handleRequest();
    console.log("Form has been submit");
});
