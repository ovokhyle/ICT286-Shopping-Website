function order() {
        let SessionID = getCookie("AccountSessionID");

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
               	if(xhr.readyState == 4 && xhr.status == 200) {
			document.getElementById("cartcontainer").innerHTML = xhr.responseText;
			deleteCart();
			displayCart();
       		}
	}
        xhr.open("GET", "../Server/php/order.php?SessionID="+SessionID, true);
        xhr.send();
}

