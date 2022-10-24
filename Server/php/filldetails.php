<?php
$username = $_GET["username"];

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


$query = 'SELECT * FROM Accounts WHERE Username ="'.$username.'"';
$result = mysqli_query($dbc, $query);

while($row = mysqli_fetch_array($result)) {
	echo $row['Username']."#".$row['Password']."#".$row['Name']."#".$row['Address']."#".$row['PhoneNumber']."#".$row['Email']."#"."1";
}



mysqli_close($dbc);

?>
