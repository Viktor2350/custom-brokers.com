
//burger menu
$(document).ready(function () {
    $(document).ready(function () {
        $('.header__burger').click(function () {
            $('.header__menu-list').slideToggle('');
        });
    });
});

// AJAX for contact-form
(function ($) {
    $(".form").submit(function (event) {
        event.preventDefault();
        // Сохраняем в переменную form id текущей формы, на которой сработало событие submit
        let form = $('#' + $(this).attr('id'))[0];
        // Сохраняем в переменную класс с параграфом для вывода сообщений
        let message = $(this).find(".form__item");
        let fd = new FormData(form);

        $.ajax({
            url: "/php/sendMsgTG.php",
            type: "POST",
            data: fd,
            processData: false,
            contentType: false,
            success: function success() {
                let respond = true
                let counter = 2;
                if (!respond) {
                    alert('Щось пішло не так. Спробуйте відправити форму ще раз.');
                } else {
                    const btn = document.getElementById('btn');
                    document.getElementById('name').value = ""
                    document.getElementById('phone').value = ""
                    btn.style.background = '#32CD32'
                    btn.value = "Заявку відправлено!"
                    let status = setInterval(function () {
                        if (counter === 2) {
                            btn.style.background = '#2F6299'
                            btn.style.color = '#ffffff'
                            btn.value = "ЗАЛИШИТИ ЗАЯВКУ"
                            clearInterval(status);
                        }

                        console.log(counter)
                        counter++;
                    }, 4000);
                }
            },
        });
    });
}(jQuery));

