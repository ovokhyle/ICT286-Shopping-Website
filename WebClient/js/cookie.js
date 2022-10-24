function cook(flag, loop){

	let xc = getCookie("AccountSessionID");
	if(!(xc.length>0)){
		//if cookie doesnt exist (new user)
		createCookie();
	}else{
		//if cookie exists (has a session(anonymous/not yet logged in)
		//cook has to be called twice to function properly so loop is called to represent how many times it has been called
		if(loop==0){
			checkSession(xc);
		}
		if(flag=="1"){
			//session exists session is not logged in

			let xhr = new XMLHttpRequest();
		        xhr.onreadystatechange = function() {
				if(xhr.readyState == 4 && xhr.status == 200) {
					let info = xhr.responseText.split("#");
					let username = info[0];
					document.getElementById("username").value = username;
					let password = info[1];
					document.getElementById("password").value = password;
					$('.right-menu').toggleClass('active');
					window.location.hash="#home";
					AccountLogin();

				}
			}
			xhr.open("GET", "../Server/php/SessionLogin.php?SessionID="+xc, true);
			xhr.send();
		}else{
			$("#Checkout").hide();
		}
	}
}

function loginCookie(){
	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;

	let xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4 && xhr.status == 200) {
			let info = xhr.responseText.split("#");
			let SessionID = info[1];
			if(info[0] == 1) {
				changeCookie(SessionID);
			}else if(info[0] == -1){

			}
		}
	}
	xhr.open("GET", "../Server/php/checklogin.php?username="+username+"&password="+password, true);
	xhr.send();

}

function changeCookie(cookiie){
	delCookie();
	document.cookie = "AccountSessionID="+cookiie+"; expires=Fri, 31 Dec 9999 12:00:00 UTC";
}

function delCookie(){
	document.cookie = "AccountSessionID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/~34023461/assignment2;"
}

function callBack(flag){
	cook(flag, 1);
}

function checkSession(xc){
	let SessionID = xc
	let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
                if(xhr.readyState == 4 && xhr.status == 200) {

			let flag = xhr.responseText;
			callBack(flag);
                }
        }
        xhr.open("GET", "../Server/php/checkSession.php?SessionID="+SessionID, true);
        xhr.send();
}

function createCookie(){
	let randomS = randSession();
	document.cookie = "AccountSessionID="+randomS+"; expires=Fri, 31 Dec 9999 12:00:00 UTC";
}

function randSession(){
	const d = new Date();
        let year = d.getFullYear();
        let day = d.getDate();
        let month = d.getMonth();
        let hour = d.getHours();
        let minute = d.getMinutes();
        let second = d.getSeconds();
        let rand = (year+hour+second+minute+day+month+3)*12546;
	return rand;
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
	let c = ca[i];
	while (c.charAt(0) == ' ') {
		c = c.substring(1);
	}
	if (c.indexOf(name) == 0) {
		return c.substring(name.length, c.length);
	}
  }
  return "";
}
