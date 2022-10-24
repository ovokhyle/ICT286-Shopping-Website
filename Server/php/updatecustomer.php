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
	echo "Username, Password, and Name are required fields";
}
else {

$query= 'UPDATE Accounts SET Username = "'.$username.'",Password="'.$password.'",Address="'.$address.'",PhoneNumber ="'.$number.'",Email="'.$email.'",Name="'.$name.'"WHERE Username="'.$username.'"'; 
$result = mysqli_query($dbc, $query);

if(mysqli_query($dbc, $query)) 
{
	echo "User Account Updated";
}
else 
{
	echo "Error updating record: " . mysqli_error($dbc);
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
