<? php

session_start();

	include("database.php");
	include("functions.php");
	
	$user_data = check_login($con);

?>
