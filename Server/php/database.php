<?php

$host = "localhost";
$user = "X30000000";
$passwd = "X30000000";
$dbname = "X30000000";

$dbc = mysqli_connect($host, $user, 
$passwd, $dbname);
// check connection
if (mysqli_connect_errno()) {
echo "Failed to connect to MySQL: " 
. mysqli_connect_error()
. "<br/>Error number:" 
. mysql_connect_errno();
}
	mysqli_close($dbc); 

?>


