<?
// $_GET and $_POST are built-in PHP SuperGlobals that handle those kind of form submissions, respectively.
//The line below merges both into one array so that this script will handle both GET and POST form submissions.

$submitted_form_data = array_merge($_GET,$_POST);
?>

<!DOCTYPE html>
<html>
<head>
  <title>Echo of HTML Form Submission</title>
</head>
<body>


<table width="" cellspacing="0" cellpadding="3">
    <tr>


      <? $cols = array("name", "email", "age","mood","bio","youare","gender","graduation","fav_building","visited_buildings");
      foreach ($cols as $title){
        ?>
      <th><?=$title?></th>

      <? } ?>
    </tr>
    <tr>
    <?foreach ($cols as $key) { ?>
      <td><?=$submitted_form_data[$key]?></td>
    <? } ?>
    </tr>

</table>

</body>
</html>
