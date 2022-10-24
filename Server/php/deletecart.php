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

$it = 'DELETE FROM Cart WHERE SessionID = "'.$SessionID.'"';
$itemtot = mysqli_query($dbc,$it);
$itemtotal = mysqli_fetch_array($itemtot);

mysqli_close($dbc);

?>
