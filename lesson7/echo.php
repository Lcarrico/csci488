<? $submitted_form_data = array_merge($_GET,$_POST); ?>

<!DOCTYPE html>
<html>
<head>
  <title>Echo of HTML Form Submission</title>
</head>
<body>
<table width="" cellspacing="0" cellpadding="3">
    <tr>
      <? $cols = array("name", "email", "age","mood","bio","youare","gender","graduation","fav_building","visited_buildings");
      foreach ($cols as $title){ ?>
        <th><?=$title?></th>
      <? } ?>
    </tr>
    <tr>
      <?foreach ($cols as $key) {
        $value = $submitted_form_data[$key]; ?>
        <td><?=(is_array($value) ? implode($value, "<br>") : $value)?></td>
      <? } ?>
    </tr>
</table>

</body>
</html>
