//~ Версия 1.2
//~ Поискать новую версию можно тут: avesnin.ru
$(document).ready(function () {
  // Регулярка для выделения номера игрока, стадии и раунда из span.id
  $regAct = /actg(\d+)st(\d+)r(\d+)/;
  // Регулярка для выделения номера игрока при определении ролей
  $regRole = /sRole(\d+)/;

  $cssFolder = "css/";

  $titleRole = "Роль";
  $titleName = "Игрок";

  $classHeader = "sHeader";
  $classMaff = "roleMaff";
  $classDie = "gamerDie";
  $classBtnSelected = "btnSelected";
  $waitTimerDefault = 0; // Таймер на три минуты

  // Роли, используемые в игре
  // Роли нельзя менять местами, так как механизм скрипта завязан на идентификаторы.
  // Названия ролей менять можно
  $arRoles = Array();
  $arRoles[1] = "&nbsp;"; // Мирный, обыватель
  $arRoles[2] = "Мафия";
  $arRoles[3] = "Дон";
  $arRoles[4] = "Детектив";
  $arRoles[5] = "Доктор";
  $arRoles[6] = "Леди ночь";
  $arRoles[7] = "Адвокат";
  $arRoles[8] = "Подкидыш";
  $arRoles[9] = "Медвежатник";
  $arRoles[10] = "Химик";
  $arRoles[11] = "Маньячелло";

  // Список ролей
  $select = "<select>";
  for ($i = 1; $i < $arRoles.length; $i++)
    $select =
      $select + '<option value="' + $i + '">' + $arRoles[$i] + "</option>";
  $select = $select + "</select>";

  // Названия кнопок и отметок в протоколе
  // Нельзя указывать html-формат символов типа &#8258; - надо указывать сам символ!
  // Коды можно глянуть тут, например: http://an-site.ru/utf.htm
  $arBtnTitles = Array();
  $arBtnTitles[1] = "X"; // для убийства
  $arBtnTitles[2] = "В"; // для Медвежатника
  $arBtnTitles[3] = "✚"; // для лечения
  $arBtnTitles[4] = "Ш"; // для проверки Детективом
  $arBtnTitles[5] = "❤"; // для спасения красоткой
  $arBtnTitles[6] = "A"; // для обработки адвокатом
  $arBtnTitles[7] = "✕"; // для убийства днём
  $arBtnTitles[8] = "*"; // для взрыва Химика
  $arBtnTitles[9] = "М"; // для убийства Маньчелло
  // ➌
  // Краткое описание ролей
  s =
    "Обозначения:<br /><strong>" +
    $arBtnTitles[1] +
    "</strong> - Убийство мафией<br /><strong>" +
    $arBtnTitles[2] +
    "</strong> - Медвежатник крадёт способность<br /><strong>" +
    $arBtnTitles[3] +
    "</strong> -  Доктор лечит<br /><strong>" +
    $arBtnTitles[4] +
    "</strong> - Детектив проверяет<br />" +
    $arBtnTitles[5] +
    "</strong> - Леди ночь спасает<br /><strong>" +
    $arBtnTitles[6] +
    "</strong> - Адвокат действует<br />" +
    $arBtnTitles[7] +
    "</strong> - расстрел днём<br /><strong>" +
    $arBtnTitles[8] +
    "</strong> - взрыв Химика";
  $arBtnTitles[9] + "</strong> - Убийство Маньячелло";
  $("#dInfoSigns").html(s);
});
