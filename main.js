function seePass() {
    let password = "";

    do {
        password = prompt("Enter a password longer than 4 characters", "");
    }

    while (password.length < 4);

    window.alert("Entered Password: " + password);
}