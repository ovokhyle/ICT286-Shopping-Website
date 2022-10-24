<?php
$SessionID = $_GET["SessionID"];

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


$query = 'SELECT * FROM Accounts WHERE SessionID = "'.$SessionID.'"';
$result = mysqli_query($dbc, $query);


if(mysqli_num_rows($result) > 0){
	echo '1';
}else{
	echo '0';
}

mysqli_close($dbc);

?>
