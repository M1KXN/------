// Функция для проверки задачи на выполнение

function check_task() {
    const pr_otvet_1 = '20';
    const otvet_user_1 = document.getElementById('answer_1').value;

    if (otvet_user_1 == pr_otvet_1) {
        document.getElementById('result_1').innerHTML = 'Верно!';
        document.getElementById('result_1').style.backgroundColor = 'rgb(59, 254, 72)';
    } else {
        document.getElementById('result_1').innerHTML = 'Неверно!';
        document.getElementById('result_1').style.backgroundColor = 'rgb(255, 67, 67)';
    }
}

