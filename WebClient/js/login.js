let login = document.getElementById('login');
let signup = document.getElementById('signup');

window.onclick = function(event) {
	if(event.target == login || event.target == signup) {
		login.style.display = "none";
		signup.style.display = "none";
	}
}

function AccountLogin() {
	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;

        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
                if(xhr.readyState == 4 && xhr.status == 200) {
                        xhr.responseText; //echos session id or failed login with enter username and password
                }
        }
        xhr.open("GET", "../Server/php/login.php?username="+username+"&password="+password, true);
        xhr.send();
	deleteCart();
	loginCookie();
	checkLogin();
}

function checkLogin() {
	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;

        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
                if(xhr.readyState == 4 && xhr.status == 200) {
			let info = xhr.responseText.split("#");
			if(info[0] == 1) {
				$("#usericon").hide();
				$("#accounticon").show();
				$("#accountbtn").show();
				$("#editact").show();
				$("#logoutbtn").show();
				$("#welcome").show();
				$("#wrong").hide();
				checkRole();

			}else{
				$("#wrong").show();
				$("#welcome").hide();
			}

		}
	}
	xhr.open("GET", "../Server/php/checklogin.php?username="+username+"&password="+password, true);
	xhr.send();

}

function logout(){
	delCookie();
	createCookie();
	document.getElementById("username").value = "";
	document.getElementById("password").value = "";
	$("#welcome").hide();
	$("#logoutbtn").hide();
	$("#accountbtn").hide();
	$("#usericon").show();	
	$("#accounticon").hide();	
/*	var accounticon = document.getElementById("accounticon");
	$(accounticon).toggleClass('inactive')
	$('.right-menu').toggleClass('inactive');
	$(".accountmenu").toggleClass('inactive'); */
	$(".accountmenu").hide();
	$("#Checkout").hide();
}

function UpdateAccount() {
	let SessionID = getCookie("AccountSessionID");
	let xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4 && xhr.status == 200) {
			let info = xhr.responseText.split("#");
			let username = info[0];
			document.getElementById("upusername").value = username;
			let password = info[1];
			document.getElementById("uppassword").value = password;
			let name = info[2];
			document.getElementById("name").value = name;
			let address = info[3];
			document.getElementById("address").value = address;
			let number = info[4];
			document.getElementById("number").value = number;
			let email = info[5];
			document.getElementById("email").value = email;
		}
	}
	xhr.open("GET", "../Server/php/AccountLogin.php?SessionID="+SessionID, true);
	xhr.send();
}

function ApplyUpdate() {
	let username = document.getElementById("upusername").value;
	let password = document.getElementById("uppassword").value;
	let name = document.getElementById("name").value;
	let address = document.getElementById("address").value;
	let number = document.getElementById("number").value;
	let email= document.getElementById("email").value;
	let SessionID = getCookie("AccountSessionID");

	let xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4 && xhr.status == 200) {
			if(xhr.responseText == 1)
			{
				window.alert("Updated Successfully");
			}else if(xhr.responseText == 2){
				window.alert("Username taken");
			}else if(xhr.responseText ==3){
				window.alert("Username, Password, and Name are required fields");
			}
		}
	}
	xhr.open("GET", "../Server/php/account.php?SessionID="+SessionID+"&username="+username+"&password="+password+"&name="+name+"&address="+address+"&number="+number+"&email="+email, true);
	xhr.send();
}


function checkRole() {
	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;
	let SessionID = getCookie("AccountSessionID");

	let xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4 && xhr.status == 200) {
			let response = xhr.responseText;

			if(response == "STAFF") {
				$("#addprod").show();
				$("#editcustomer").show();
				$("#addstaffbtn").show();
				$("#deleteprod").show();
				$("#updateprod").show();
				$("#Checkout").show();
			}
			else if(response == "CUSTOMER"){
				$("#addprod").hide();
				$("#editcustomer").hide();
				$("#addstaffbtn").hide();
				$("#updateprod").hide();
				$("#deleteprod").hide();
				$("#Checkout").show();
			}else{
				$("#addprod").hide();
				$("#editcustomer").hide();
				$("#addstaffbtn").hide();
				$("#updateprod").hide();
				$("#deleteprod").hide();
				$("#Checkout").hide();
			} 
		}
	}
	xhr.open("GET", "../Server/php/checkrole.php?SessionID="+SessionID, true);
	xhr.send();
}

function FillDetails() {
	let username = document.getElementById("custusername").value;
	let xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4 && xhr.status == 200) {
			let info = xhr.responseText.split("#");
			let username = info[0];
			document.getElementById("custusername").value = username;
			let password = info[1];
			document.getElementById("custpassword").value = password;
			let name = info[2];
			document.getElementById("custname").value = name;
			let address = info[3];
			document.getElementById("custaddress").value = address;
			let number = info[4];
			document.getElementById("custnumber").value = number;
			let email = info[5];
			document.getElementById("custemail").value = email;
			if(info[6] == 1)
			{
			$("#custpassword").show();
			$("#custname").show();
			$("#custaddress").show();
			$("#custemail").show();
			$("#custnumber").show();
			$("#updatecust").show();
			$("#custuselabel").show();
			$("#custpasslabel").show();
			$("#custaddresslabel").show();
			$("#custphonelabel").show();
			$("#custemaillabel").show();
			$("#searchcustomer").hide();	
			}
			else
			{
				window.alert("Username not found");	
			}
		}
	}
	xhr.open("GET", "../Server/php/filldetails.php?username="+username, true);
	xhr.send();
}

function UpdateCustomer() {
	let username = document.getElementById("custusername").value;
	let password = document.getElementById("custpassword").value;
	let name = document.getElementById("custname").value;
	let address = document.getElementById("custaddress").value;
	let number = document.getElementById("custnumber").value;
	let email= document.getElementById("custemail").value;
	let SessionID = getCookie("AccountSessionID");

	let xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4 && xhr.status == 200) {
			let response = xhr.responseText;
			window.alert(response);
			$("#custpassword").hide();
			$("#custname").hide();
			$("#custaddress").hide();
			$("#custemail").hide();
			$("#custnumber").hide();
			$("#updatecust").hide();
			$("#custuselabel").hide();
			$("#custpasslabel").hide();
			$("#custaddresslabel").hide();
			$("#custphonelabel").hide();
			$("#custemaillabel").hide();
			$("#searchcustomer").show();	
		}
	}
	xhr.open("GET", "../Server/php/updatecustomer.php?SessionID="+SessionID+"&username="+username+"&password="+password+"&name="+name+"&address="+address+"&number="+number+"&email="+email, true);
	xhr.send();
}
