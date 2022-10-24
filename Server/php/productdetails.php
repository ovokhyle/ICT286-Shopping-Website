<?php
$id = $_GET["productid"];

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


$query = 'SELECT * FROM Product WHERE ProductId ="'.$id.'"';
$result = mysqli_query($dbc, $query);

while($row = mysqli_fetch_array($result)) {
	echo $row['ProductId']."#".$row['ProductName']."#".$row['ProductPrice']."#".$row['ProductImage']."#".$row['ProductCategory']."#".$row['Stock']."#"."1";
}


mysqli_close($dbc);

?>
