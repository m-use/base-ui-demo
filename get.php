<?php

	$servername = "localhost";
	$username = "root";
	$password = "root";
	$dbname = "button";

	$link = mysqli_connect($servername, $username, $password, $dbname);

	if (!$link) {
		die('Could not connect: ' . mysqli_connect_error());
	}

	$sql = 'SELECT * FROM settings';

	$query = mysqli_query($link, $sql);

	if(!$query) {
		die('SQL Error: ' . mysqli_error($link));
	}

	while ($row = mysqli_fetch_array($query)) {
		echo $row['button_background_color'];
	}

	mysqli_close($link);
?>