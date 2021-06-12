//don't forget to comment...
function checkCreds(){
    console.log("checkCreds() started");
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var fullName = firstName + " " + lastName;
    var badgeNumb = document.getElementById("badgeID").value;

    //validate fullName
    if(fullName.length > 20 || fullName.length < 2){
        document.getElementById("loginStatus").innerHTML = "Invalid full name, please resubmit.";
    }else if(badgeNumb > 999 || badgeNumb < 1){
        document.getElementById("loginStatus").innerHTML = "Invalid badge number, please resubmit.";
    }else{
        console.log("Submission Passes");
        alert("Access Granted!  Welcome, " + fullName);
        location.replace("UATSpace.html");
    }
}