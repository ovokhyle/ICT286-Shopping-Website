
function displayCart() {
	window.location.hash="#cart";
	let SessionID = getCookie("AccountSessionID");

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
                if(xhr.readyState == 4 && xhr.status == 200) {
                        document.getElementById("cartcontainer").innerHTML = xhr.responseText;
			updateCart();
                }
        }
        xhr.open("GET", "../Server/php/cart.php?SessionID="+SessionID, true);
        xhr.send();
}

function addcart(dis) {
	let SessionID = getCookie("AccountSessionID");
        let ProductID = dis;

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
                if(xhr.readyState == 4 && xhr.status == 200) {
                        //will add a counter to addcart and echo the counter based on amount subtracted
			var xmlhr = new XMLHttpRequest();
                        xmlhr.onreadystatechange = function() {
                                if((xhr.readyState == 4 && xhr.status == 200)&&(xmlhr.readyState == 4 && xmlhr.status == 200)) {
                                        document.getElementById("cartcontainer").innerHTML = xmlhr.responseText;
					updateCart();
                                }
                        }
                        xmlhr.open("GET", "../Server/php/cart.php?SessionID="+SessionID, true);
                        xmlhr.send();
                }
        }
        xhr.open("GET", "../Server/php/addcart.php?SessionID="+SessionID+"&ProductId="+ProductID, true);
        xhr.send();
}

function minuscart(dis) {
        let SessionID = getCookie("AccountSessionID");
        let ProductID = dis;

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
                if(xhr.readyState == 4 && xhr.status == 200) {
                        //will add a counter to addcart and echo the counter based on amount subtracted
			var xmlhr = new XMLHttpRequest();
                        xmlhr.onreadystatechange = function() {
                                if((xhr.readyState == 4 && xhr.status == 200)&&(xmlhr.readyState == 4 && xmlhr.status == 200)) {
                                        document.getElementById("cartcontainer").innerHTML = xmlhr.responseText;
					updateCart();
                                }
                        }
                        xmlhr.open("GET", "../Server/php/cart.php?SessionID="+SessionID, true);
                        xmlhr.send();
                }
        }
        xhr.open("GET", "../Server/php/minuscart.php?SessionID="+SessionID+"&ProductId="+ProductID, true);
        xhr.send();
}

function updateCart(){
	let SessionID=getCookie("AccountSessionID");
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4 && xhr.status == 200) {
			document.getElementById("total").innerHTML = xhr.responseText;
		}
	}
	xhr.open("GET", "../Server/php/updatecart.php?SessionID="+SessionID, true);
	xhr.send();
}

function deleteCart(){
	let SessionID=getCookie("AccountSessionID");
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
                if(xhr.readyState == 4 && xhr.status == 200) {

                }
        }
        xhr.open("GET", "../Server/php/deletecart.php?SessionID="+SessionID, true);
        xhr.send();
}
