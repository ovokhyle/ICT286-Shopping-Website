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

$query = 'SELECT P.ProductId AS PPID, C.ProductId AS CPID, P.ProductName AS ProductName, P.ProductPrice AS ProductPrice, P.Stock AS Stock, C.Amount AS Amount, (P.ProductPrice*C.Amount) AS Cost FROM Cart C INNER JOIN Product P ON C.ProductId = P.ProductId WHERE SessionID = "'.$SessionID.'"';
$result = mysqli_query($dbc,$query);

$it = 'SELECT SUM(Amount) AS itemTotal FROM Cart WHERE SessionID = "'.$SessionID.'"';
$itemtot = mysqli_query($dbc,$it);
$itemtotal = mysqli_fetch_array($itemtot);

$ct = 'SELECT SUM(P.ProductPrice*C.Amount) AS costTotal FROM Cart C INNER JOIN Product P ON P.ProductId = C.ProductId WHERE SessionID = "'.$SessionID.'"';
$costtot = mysqli_query($dbc,$ct);
$costtotal = mysqli_fetch_array($costtot);


echo '<form onsubmit="return false">';
echo '	<table border=1>';
echo '	<tr>';
echo '	<th>ProductName</th>';
echo '	<th>ProductId</th>';
echo '	<th>Price</th>';
echo '	<th>Stock</th>';
echo '	<th>Amount</th>';
echo '	<th>Cost</th>';
echo '	</tr>';
while($row = mysqli_fetch_array($result)){
        echo '	<tr>';
        echo '	<td>'.$row["ProductName"].'</td>';
        echo '	<td>'.$row["CPID"].'</td>';
        echo '	<td>$'.$row["ProductPrice"].'</td>';
        echo '	<td>'.$row["Stock"].'</td>';
        echo '	<td>'.$row["Amount"].'<input id="amount" onclick="addcart('.$row['CPID'].');" type="submit" value="+" onsubmit="return false"/><input onclick="minuscart('.$row['CPID'].');" type="submit" value="-"/ onsubmit="return false"></td>';
        echo '	<td>$'.$row["Cost"].'</td>';
        echo '	</tr>';
}
echo '	<tr>';
echo '	<th colspan="4">Totals</th>';
echo '	<td>'.$itemtotal["itemTotal"].'</td>';
echo '	<td>$'.$costtotal["costTotal"].'</td>';
echo '	</tr>';
echo '	</table>';
echo '</form>';

mysqli_close($dbc);

?>
