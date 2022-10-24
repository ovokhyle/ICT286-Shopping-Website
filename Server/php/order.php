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

$query = 'SELECT P.ProductId AS PPID, C.ProductId AS CPID, P.Stock AS Stock, C.Amount AS Amount FROM Cart C INNER JOIN Product P ON C.ProductId = P.ProductId WHERE SessionID = "'.$SessionID.'"';
$result = mysqli_query($dbc,$query);


while($row = mysqli_fetch_array($result)){
	$it = 'UPDATE Product SET Stock=(Stock-'.$row["Amount"].') WHERE ProductId = "'.$row['PPID'].'"';
	$itemtot = mysqli_query($dbc,$it);
	$itemtotal = mysqli_fetch_array($itemtot);
}

echo "<p>Checkout Success</p>";

mysqli_close($dbc);

?>
