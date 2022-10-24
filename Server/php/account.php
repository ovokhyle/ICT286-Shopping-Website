<?php 
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


$username = $_GET["username"];
$password = $_GET["password"];
$name = $_GET["name"];
$address = $_GET["address"];
$number = $_GET["number"];
$email = $_GET["email"];
$Session = $_GET["SessionID"];

$error_username = "";

if($username == "" || $password == "" || $name == "") {
	echo 3;
}
else {

$query= 'UPDATE Accounts SET Username = "'.$username.'",Password="'.$password.'",Address="'.$address.'",PhoneNumber ="'.$number.'",Email="'.$email.'",Name="'.$name.'"WHERE SessionID="'.$Session.'"'; 
$result = mysqli_query($dbc, $query);

if(mysqli_query($dbc, $query)) {
	echo 1;
}
else {
	echo 2;
}

}
if($row['Role'] == "STAFF")
{
	echo 4;
}
if($row['Role'] == "CUSTOMER")
{
	echo 5;
}

mysqli_close($dbc);

?>
