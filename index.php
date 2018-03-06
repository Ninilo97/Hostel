<?php

require 'db_connection.php';

if(isset($_POST['submit2']))
{
	$conn = OpenCon();
	$name    = $conn->real_escape_string($_POST['name']);
	$email   = $conn->real_escape_string($_POST['email']);
	$mobilenumber  = $conn->real_escape_string($_POST['mobilenumber']);
	$message = $conn->real_escape_string($_POST['message']);
	$query   = "INSERT INTO `enquiry`(`name`, `email`, `mobilenumber`, `message`) VALUES ('$name','$email','$mobilenumber','$message')";

	$success = $conn->query($query);

	if (!$success) {
		die("Could not enter data: ".$conn->error);
	}
	else {
		header("Location:http://localhost/hostel/index.html#Register");
		CloseCon($conn);
		;
	}
}
