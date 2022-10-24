
window.onload = function showProducts() {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4 && xhr.status == 200) {
			document.getElementById("container").innerHTML = xhr.responseText;
		}
	}
	xhr.open("GET", "../Server/php/product.php", true);
	xhr.send();

	cook('0', 0);
}

window.onscroll = function() { stickyNav() }; 

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyNav() {
	if(window.pageYOffset >= sticky) {
		navbar.classList.add("sticky")
	}else{
		navbar.classList.remove("sticky");
	}
}

function displayCart() {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4 && xhr.status == 200) {
			document.getElementById("cartcontainer").innerHTML = xhr.responseText;
		}
	}
	xhr.open("GET", "../Server/php/cart.php", true);
	xhr.send();
}

function updateDetails() {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4 && xhr.status == 200) {
			document.getElementById("cartcontainer").innerHTML = xhr.responseText;
		}
	}
	xhr.open("GET", "../Server/php/account.php", true);
	xhr.send();
}

 function AddProduct() {

	let productid = document.getElementById("prodid").value;
	let productname = document.getElementById("prodname").value;
	let price = document.getElementById("price").value;
	let image = document.getElementById("image").value;
	let category = document.getElementById("category").value;
	let stock = document.getElementById("stock").value;
	let SessionID = getCookie("AccountSessionID");

	let xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if(xhr.readyState == 4 && xhr.status == 200) {
				let response = xhr.responseText;
				window.alert(response);
				if(response = "Product added successfully")
				{
					document.getElementById("prodname").value = "";
					document.getElementById("price").value = "";
					document.getElementById("image").value = "";
					document.getElementById("category").value = "";
					document.getElementById("stock").value = "";
					document.getElementById("prodid").value =="";
				}
			}
		}

	xhr.open("GET", "../Server/php/addproduct.php?SessionID="+SessionID+"&productname="+productname+"&price="+price+"&image="+image+"&category="+category+"&stock="+stock+"&productid="+productid, true);
	xhr.send();
}


function DeleteProduct() {

	let ProductID = document.getElementById("delproductid").value;
	let xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if(xhr.readyState == 4 && xhr.status == 200) {
				let response = xhr.responseText;
				window.alert(response);
				document.getElementById("delproductid").value = "";
			}
		}

	xhr.open("GET", "../Server/php/deleteproduct.php?ProductID="+ProductID, true);
	xhr.send();
}

$(document).ready(function(){
	var burger = document.getElementById("burger");
	$(burger).click(function() {
		$(burger).toggleClass('active')
		$('.navigation').toggleClass('active');
	})
})

$(document).ready(function(){
	var accounticon = document.getElementById("accounticon");
	$(accounticon).click(function() {
		$(accounticon).toggleClass('active')
		$('.right-menu').toggleClass('active');
	})
})

function ProductDetails() {
	let productid = document.getElementById("prodidupdt").value;
	let xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4 && xhr.status == 200) {
			document.getElementById("prodidupdt").value = productid;
			let info = xhr.responseText.split("#");
			let prodid = info[0];
			document.getElementById("prodidupdt").value = prodid;
			let name = info[1];
			document.getElementById("prodnameupdt").value = name;
			let price = info[2];
			document.getElementById("priceupdt").value = price;
			let image = info[3];
			document.getElementById("imageupdt").value = image;
			let category = info[4];
			document.getElementById("categoryupdt").value = category;
			let stock = info[5];
			document.getElementById("stockupdt").value = stock;
			if(info[6] == 1)
			{
			$("#prodnameupdt").show();
			$("#priceupdt").show();
			$("#imageupdt").show();
			$("#categoryupdt").show();
			$("#stockupdt").show();
			$("#updateprodbtn").show();
			$("#prodnamelabel").show();
			$("#pricelabel").show();
			$("#imagelabel").show();
			$("#categorylabel").show();
			$("#stocklabel").show();
			$("#searchproduct").hide();	
			}
			else
			{
				window.alert("Product not found");	
			} 
		}
	}
	xhr.open("GET", "../Server/php/productdetails.php?productid="+productid, true);
	xhr.send();
}

function UpdateProduct() {
	let productid = document.getElementById("prodidupdt").value;
	let name = document.getElementById("prodnameupdt").value;
	let price = document.getElementById("priceupdt").value;
	let image = document.getElementById("imageupdt").value;
	let category = document.getElementById("categoryupdt").value;
	let stock = document.getElementById("stockupdt").value;
	let SessionID = getCookie("AccountSessionID");

	let xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4 && xhr.status == 200) {
			let response = xhr.responseText;
			window.alert(response);
			$("#prodnameupdt").hide();
			$("#priceupdt").hide();
			$("#imageupdt").hide();
			$("#categoryupdt").hide();
			$("#stockupdt").hide();
			$("#updateprodbtn").hide();
			$("#prodnamelabel").hide();
			$("#pricelabel").hide();
			$("#imagelabel").hide();
			$("#categorylabel").hide();
			$("#stocklabel").hide();
			$("#searchproduct").show();	
		}
	}
	xhr.open("GET", "../Server/php/updateproduct.php?SessionID="+SessionID+"&productid="+productid+"&name="+name+"&price="+price+"&image="+image+"&category="+category+"&stock="+stock, true);
	xhr.send();
}
