<?php

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "button";

$link = mysqli_connect($servername, $username, $password, $dbname);

if (!$link) {
	die('Could not connect: ' . mysqli_connect_error());
}

$button_background_color = $_POST['button_background_color'];
$button_text_color = $_POST['button_text_color'];
$button_border_color = $_POST['button_border_color'];
$button_hover_background_color = $_POST['button_hover_background_color'];
$button_hover_text_color = $_POST['button_hover_text_color'];
$button_hover_border_color = $_POST['button_hover_border_color'];
$button_font_size = $_POST['button_font_size'];
$button_font_family = $_POST['button_font_family'];
$button_font_weight = $_POST['button_font_weight'];
$button_border_radius = $_POST['button_border_radius'];
$button_border_width = $_POST['button_border_width'];
$button_vertical_padding = $_POST['button_vertical_padding'];
$button_horizontal_padding = $_POST['button_horizontal_padding'];

$sql = "INSERT INTO settings (
	button_background_color,
	button_text_color,
	button_border_color,
	button_hover_background_color,
	button_hover_text_color,
	button_hover_border_color,
	button_font_size,
	button_font_family,
	button_font_weight,
	button_border_radius,
	button_border_width,
	button_vertical_padding,
	button_horizontal_padding
) VALUES (
	'$button_background_color',
	'$button_text_color',
	'$button_border_color',
	'$button_hover_background_color',
	'$button_hover_text_color',
	'$button_hover_border_color',
	'$button_font_size',
	'$button_font_family',
	'$button_font_weight',
	'$button_border_radius',
	'$button_border_width',
	'$button_vertical_padding',
	'$button_horizontal_padding'
)";

if(mysqli_query($link, $sql)){
    echo "Records inserted successfully.";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}

$getsql = 'SELECT * FROM settings';

$query = mysqli_query($link, $getsql);

if(!$query) {
	die('SQL Error: ' . mysqli_error($link));
}

while ($row = mysqli_fetch_array($query)) {
	echo $row['button_background_color'];
}
 
// Close connection
mysqli_close($link);
?>