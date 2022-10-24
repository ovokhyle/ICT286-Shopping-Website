function signUp() {
	let username = document.getElementById("susername").value;
	let password = document.getElementById("spassword").value;
	let name = document.getElementById("sname").value;
	let SessionID = getCookie("AccountSessionID");
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
                if(xhr.readyState == 4 && xhr.status == 200) {
			if(xhr.responseText == 2)
			{
				window.alert("Sign up successful");
				cook("0", 0);
			}
			else if(xhr.responseText == 1)
			{
				window.alert("Username taken. Please enter a different one.");
			}
                }
        }
        xhr.open("GET", "../Server/php/signup.php?username="+username+"&password="+password+"&name="+name+"&SessionID="+SessionID, true);
        xhr.send();
}



function AddStaff() {
	let username = document.getElementById("staffusername").value;
	let password = document.getElementById("staffpassword").value;
	let name = document.getElementById("staffname").value;
	let address = document.getElementById("staffaddress").value;
	let number = document.getElementById("staffnumber").value;
	let email= document.getElementById("staffemail").value;
	let SessionID = randSession();

        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
                if(xhr.readyState == 4 && xhr.status == 200) {
			window.alert(xhr.responseText);
/*	                if(xhr.responseText == 1)
			{
				window.alert("Staff added successfully");
			}else if(xhr.responseText == 2){
				window.alert("Username taken");
			}else if(xhr.responseText ==3){
				window.alert("Username, Password, and Name are required fields");
			} */
                }
        }
        xhr.open("GET", "../Server/php/addstaff.php?SessionID="+SessionID+"&username="+username+"&password="+password+"&name="+name+"&address="+address+"&number="+number+"&email="+email, true);
	xhr.send();
}
