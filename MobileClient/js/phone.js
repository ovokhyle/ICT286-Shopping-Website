function displayPhone() {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4 && xhr.status == 200) {
			document.getElementById("phonecontainer").innerHTML = xhr.responseText;
		}
	}
	xhr.open("GET", "../Server/php/phone.php", true);
	xhr.send();
}

function displayLaptop() {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4 && xhr.status == 200) {
			document.getElementById("laptopcontainer").innerHTML = xhr.responseText;
		}
	}
	xhr.open("GET", "../Server/php/laptop.php", true);
	xhr.send();
}

function displayTablet() {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4 && xhr.status == 200) {
			document.getElementById("tabletcontainer").innerHTML = xhr.responseText;
		}
	}
	xhr.open("GET", "../Server/php/tablet.php", true);
	xhr.send();
}

