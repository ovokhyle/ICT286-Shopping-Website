<?php

$host = "localhost";
$user = "X30000000";
$passwd = "X30000000";
$dbname = "X30000000";

$dbc = mysqli_connect($host, $user, $passwd, $dbname);
if(mysqli_connect_errno()) {
echo "Failed to connect to MySQL: " . mysqli_connect_error() . "<br/>Error number: " . mysql_connect_errno();
}

		$id = $_GET['ProductID'];

		if($id == "")
		{
			echo "Please enter a ProductID";
		}
		else
		{

			$query2 = "SELECT * FROM Product WHERE ProductId = '$id'";
			$results = mysqli_query($dbc, $query2);

			$query = "DELETE From Product WHERE ProductId = '$id'";
			$result = mysqli_query($dbc,$query);

			if(mysqli_num_rows($results) > 0) {
			while($row = mysqli_fetch_assoc($results)) 
			{
    					echo "Product deleted successfully";
			}
			}
			else
			{
					echo "Invalid ProductID";
			}
		}

?>
