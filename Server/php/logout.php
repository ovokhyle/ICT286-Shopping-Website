<?php 

	session_start();
	session_unset();
	session_destroy();
	
	echo "Logout successful";
	header("location: ../home.html#home");
	exit();
?>
