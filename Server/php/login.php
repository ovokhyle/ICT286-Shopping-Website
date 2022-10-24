<?php
$username = $_GET["username"];
$password = $_GET["password"];

$host = "localhost";
$user = "X30000000";
$passwd = "X30000000";
$dbname = "X30000000";

$dbc = mysqli_connect($host, $user, $passwd, $dbname);

if(mysqli_connect_errno()) {
	echo "Failed to connect to MySQL: "
		. mysqli_connect_error()
		. "<br/>Error number:"
		. mysql_connect_errno();
}



$query = 'SELECT * FROM Accounts WHERE Username = "'.$username.'" AND Password ="'.$password.'"';
$result = mysqli_query($dbc, $query);

if(mysqli_num_rows($result) > 0){
	echo $row['SessionID'];
}else{
	echo '<p>Wrong Username or Password<br/>';
	echo 'Username: '.$username.'<br/>';
	echo 'Password: '.$password.'</p>';
}

mysqli_close($dbc);

?>
