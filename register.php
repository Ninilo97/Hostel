<?php

require 'db_connection.php';

if(isset($_POST['submit']))
{
  $conn = OpenCon();
  $name    = $conn->real_escape_string($_POST['name']);
  $dob   = $conn->real_escape_string($_POST['dob']);
  $cat  = $conn->real_escape_string($_POST['cat']);
  $disability = $conn->real_escape_string($_POST['disability']);
  $mobilenumber  = $conn->real_escape_string($_POST['mobilenumber']);
  $email   = $conn->real_escape_string($_POST['email']);
  $line1   = $conn->real_escape_string($_POST['line1']);
  $postcode   = $conn->real_escape_string($_POST['postcode']);
  $city   = $conn->real_escape_string($_POST['city']);
  $state   = $conn->real_escape_string($_POST['state']);
  $country   = $conn->real_escape_string($_POST['country']);
  $Perma   = $conn->real_escape_string($_POST['Perma']);
  $Cline1   = $conn->real_escape_string($_POST['Cline1']);
  $Cpostcode   = $conn->real_escape_string($_POST['Cpostcode']);
  $Ccity   = $conn->real_escape_string($_POST['Ccity']);
  $Cstate   = $conn->real_escape_string($_POST['Cstate']);
  $Ccountry   = $conn->real_escape_string($_POST['Ccountry']);
  $Ename   = $conn->real_escape_string($_POST['Ename']);
  $relationship   = $conn->real_escape_string($_POST['relationship']);
  $specify   = $conn->real_escape_string($_POST['specify']);
  $Emobilenumber   = $conn->real_escape_string($_POST['Emobilenumber']);
  $Eemail   = $conn->real_escape_string($_POST['Eemail']);
  $query   = "INSERT INTO `registration`(`name`,`dob`,`cat`,`disability`,`mobilenumber`,`email`,`line1`,`postcode`,`city`,`state`,`country`,`Perma`,`Cline1`,`Cpostcode`,`Ccity`,`Cstate`,`Ccountry`,`Ename`,`relationship`,`specify`,`Emobilenumber`,`Eemail`) VALUES ('$name','$dob','$cat','$disability','$mobilenumber','$email','$line1','$postcode','$city','$state','$country','$Perma','$Cline1','$Cpostcode','$Ccity','$Cstate','$Ccountry','$Ename','$relationship','$specify','$Emobilenumber','$Eemail')";


  $success = $conn->query($query);

  if (!$success) {
    die("Could not enter data: ".$conn->error);
  }
  else {
    header("Location:http://localhost/hostel/registration.html");
    CloseCon($conn);
    ;
  }
}

?>
