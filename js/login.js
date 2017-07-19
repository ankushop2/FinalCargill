var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
var db = TAFFY([
		{"id":1,"name":"vishal", "password":"vishal", "fc":"f"},
		{"id":2,"name":"anwesh", "password":"anwesh", "fc":"c"}
		]);
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
db().limit(db.length).each(function (r) {
		if(username==r.name && password==r.password){
			if(r.fc=="f")
			{
				window.location = "farmer.html";
			}
			else if(r.fc=="c")
			{
				window.location = "commercial.html";
			}
			else
			{
				window.alert("Something is wrong");
			}

		}
});
}
