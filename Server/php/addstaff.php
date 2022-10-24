<?php

$host = "localhost";
$user = "X30000000";
$passwd = "X30000000";
$dbname = "X30000000";

$dbc = mysqli_connect($host, $user, $passwd, $dbname);
if(mysqli_connect_errno()) {
echo "Failed to connect to MySQL: " . mysqli_connect_error() . "<br/>Error number: " . mysql_connect_errno();
}

		$username = $_GET['username'];
		$password = $_GET['password'];
		$name = $_GET['name'];
		$adress = $_GET['address'];
		$number= $_GET['number'];
		$email = $_GET['email'];
		$SessionID = $_GET['SessionID'];

		if($username == "" || $password =="" || $name == "")
		{
			echo "Username, Password and Name must not be blank";
		}
		else
		{
			$query = 'INSERT INTO Accounts (Username, Password, Name, Address, PhoneNumber, Email, SessionID, Role) VALUES ("'.$username.'", "'.$password.'", "'.$name.'", "'.$address.'", "'.$number.'", "'.$email.'", "'.$SessionID.'", "STAFF")';
			$results = mysqli_query($dbc,$query);


			if(!$results)
			{
					echo "Error: " . $sql . "<br>" . mysqli_error($dbc);
			}
			else
			{
					echo "Staff added successfully";

			}
		}

?>
