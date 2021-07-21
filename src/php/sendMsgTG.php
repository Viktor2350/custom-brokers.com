<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    //В переменную $token нужно вставить токен, который нам прислал @botFather
    $token = "1761693250:AAHczW8dHy7aW6qtZzUv5MVotO_eXl5CswU";
    //Сюда вставляем chat_id
    $chat_id = "-348326390";
    //Определяем переменные для передачи данных из нашей формы
    if ($_POST['act'] == 'order') {
        $name = ($_POST['name']);
        $phone = ($_POST['phone']);
        //Собираем в массив то, что будет передаваться боту
        $arr = array(
            'Ім\'я: ' => $name,
            'Мобільний телефон: ' => $phone
        );
        //Настраиваем внешний вид сообщения в телеграме
        foreach ($arr as $key => $value) {
            $txt .= "<b>" . $key . "</b>  " . $value . "%0A";
        };
        //Передаем данные боту
        $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");
    }
} else {
    header("Location: /");
}
?>