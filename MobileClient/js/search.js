function search() {
	let product = document.getElementById("search").value;
	let check = product.toLowerCase();
	let strlength = check.length;
	if((strlength>0)&&(check!="select")&&(check!="update")&&(check!="delete")&&(check!="insert")&&(check!="'")&&(check!=";")&&(check!="show")){
		if(check=="phone"){
			phpsearch("Phone", "1");
		}else if(check=="laptop"){
			phpsearch("Laptop", "1");
		}else if(check=="tablet"){
			phpsearch("Tablet", "1");
		}else{
			phpsearch("Default", "1");
		}
	}else if(strlength=0 || product==""){
		phpsearch("Empty", "0");
	}else{
		window.alert("INVALID INPUT: Please Try Agian");
	}
}

function phpsearch(t,p) {
	let product = document.getElementById("search").value;
	let type = t;
	let pass = p;
	if(pass=="1"){
		if((type=="Phone")||(type=="Laptop")||(type=="Tablet")){
			var xhre = new XMLHttpRequest();
			xhre.onreadystatechange = function() {
				if(xhre.readyState == 4 && xhre.status == 200) {
					document.getElementById("searchcontainer").innerHTML = xhre.responseText;
				}
			}
			xhre.open("GET", "../Server/php/catsearch.php?product="+product+"&type="+type, true);
			xhre.send();

		}else if(type=="Default"){
			var xhr = new XMLHttpRequest();
                        xhr.onreadystatechange = function() {
                                if(xhr.readyState == 4 && xhr.status == 200) {
                                        document.getElementById("searchcontainer").innerHTML = xhr.responseText;
                                }
                        }
                        xhr.open("GET", "../Server/php/search.php?product="+product, true);
                        xhr.send();

		}
	}else if(type=="Empty"){
		document.getElementById("searchcontainer").innerHTML = "<p>Error textbox can't be empty</p>";
	}else{
		window.alert("INVALID INPUT: Please Try Agian");
		document.getElementById("searchcontainer").innerHTML = "<p>INVALID INPUT: Please Try Agian</p>"
		document.getElementById("search").value="";
	}
}
