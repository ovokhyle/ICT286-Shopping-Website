<?php
$SessionID = $_GET["SessionID"];
$ProductId = $_GET["ProductId"];

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

$q = 'SELECT * FROM Cart WHERE SessionID = "'.$SessionID.'" AND ProductId = "'.$ProductId.'"';
$select = mysqli_query($dbc,$q);
$row = mysqli_fetch_array($select);

$c = 'SELECT * FROM Product WHERE ProductId = "'.$ProductId.'"';
$check = mysqli_query($dbc,$c);
$chk = mysqli_fetch_array($check);

	if( (mysqli_num_rows($select)>0) && ($chk["Stock"] > $row["Amount"]) ){
		$up = 'UPDATE Cart SET Amount = '.$row["Amount"].'+1 WHERE SessionID = "'.$SessionID.'" AND ProductId ="'.$ProductId.'"';
	        $update = mysqli_query($dbc,$up);
	}else if(mysqli_num_rows($select)<=0){
		$query = 'INSERT INTO Cart (SessionID, ProductId, Amount) VALUES ("'.$SessionID.'","'.$ProductId.'", 1)';
		$insert = mysqli_query($dbc,$query);
	}


mysqli_close($dbc);

?>
