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


$id = $_GET["productid"];
$name = $_GET["name"];
$price = $_GET["price"];
$image = $_GET["image"];
$category = $_GET["category"];
$stock = $_GET["stock"];
$Session = $_GET["SessionID"];

$error_username = "";

if($id == "" || $name == "" || $price == "" || $image == "" || $category =="" || $stock == "") {
	echo "Please fill in all fields";
}
else {

	$query= 'UPDATE Product SET ProductId = "'.$id.'",ProductName="'.$name.'",ProductPrice="'.$price.'",ProductImage ="'.$image.'",ProductCategory="'.$category.'",Stock="'.$stock.'"WHERE ProductId="'.$id.'"'; 

	if(mysqli_query($dbc, $query))
	{	
		echo "Product updated successfully";
	}
	else 
	{
		echo "Error updating product: " . mysqli_error($dbc);
	} 

}


mysqli_close($dbc);

?>
