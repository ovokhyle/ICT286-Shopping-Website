<?php

$host = "localhost";
$user = "X30000000";
$passwd = "X30000000";
$dbname = "X30000000";

$dbc = mysqli_connect($host, $user, $passwd, $dbname);
if(mysqli_connect_errno()) {
echo "Failed to connect to MySQL: " . mysqli_connect_error() . "<br/>Error number: " . mysql_connect_errno();
}

		$name = $_GET['name'];
		$username = $_GET['username'];
		$password = $_GET['password'];
		$SessionID = $_GET['SessionID'];

		$query2 = "SELECT * FROM Accounts WHERE Username  = '$username';";
		$sql = mysqli_query($dbc, $query2);

		$query = "INSERT INTO Accounts (Username, Password, Name, SessionID, Role) VALUES ('".$username."','".$password."','".$name."',".$SessionID.",'CUSTOMER')";
		$results = mysqli_query($dbc,$query);


		if(mysqli_num_rows($sql) > 0)
		{
				echo 1;
		} 
		else
		{
				echo 2;
		} 

?>
