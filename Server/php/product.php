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


$query = "SELECT * FROM Product";
$result = mysqli_query($dbc, $query);

while($row = mysqli_fetch_array($result)) {
	echo '<div class="item-box">';
	echo '	<form onsubmit="addcart('.$row['ProductId'].'); return false">';
	echo '  	<div class="item-img">';
	echo '			<button type="submit" class="add-cart" onsubmit="return false"><i class="glyphicon glyphicon-shopping-cart"></i></button>';
	echo '			<img src="' . $row['ProductImage'] . '" alt="image1" class="img-fluid card-img-top">';
	echo '		</div>';
	echo '		<div class="item-details">';
	echo '			<a href="#" class="item-name" id="prod'.$row['ProductId'].'">' . $row['ProductName'] . '</a>';
	echo '			<span class="item-price">$' . $row['ProductPrice'] . '</span>';
	echo '		</div>';
	echo '	</form>';
	echo '</div>';

}

mysqli_close($dbc);

?>
