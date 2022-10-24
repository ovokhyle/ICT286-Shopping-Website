<?php

function check_login($con)
{
	
	if(isset($_SESSION['CustId']))
	{
		$id = $_SESSION['CustId'];
		$query = "SELECT * FROM Customer WHERE CustId = '$id' limit 1"; 
		
		$result = mysqli_query($con,$query);
		if($result && mysqli_num_rows($result) > 0)
		{
			$customer_data = mysqli_fetch_assoc($result);
			return $customer_data;
		}
	}

	header("Location: login.php");
	die;
}

?>
