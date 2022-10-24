<?php

$host = "localhost";
$user = "X30000000";
$passwd = "X30000000";
$dbname = "X30000000";

$dbc = mysqli_connect($host, $user, $passwd, $dbname);
if(mysqli_connect_errno()) {
echo "Failed to connect to MySQL: " . mysqli_connect_error() . "<br/>Error number: " . mysql_connect_errno();
}
		
		$productid = $_GET['productid'];
		$productname = $_GET['productname'];
		$price = $_GET['price'];
		$image = $_GET['image'];
		$category = $_GET['category'];
		$stock = $_GET['stock'];
		$SessionID = $_GET['SessionID'];

		if($productname == "" || $price =="" || $image == "" || $category == "" || $stock == "")
		{
			echo "Please fill in all fields";
		}
		else 
		{
		$query = "INSERT INTO Product (ProductId, ProductName, ProductPrice, ProductImage, ProductCategory, Stock) VALUES ('".$productid."','".$productname."','".$price."','".$image."','".$category."','".$stock."')";

		if(mysqli_query($dbc, $query))
		{
				echo "Product added successfully";
		} 
		else
		{
				echo "Error: " . $sql . "<br>" . mysqli_error($dbc);;
		} 	
		}

?>
