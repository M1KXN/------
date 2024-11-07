// Функция для проверки задачи на выполнение

function check_task() {
    // Кинематика
    const pr_otvet_all = ['20', '2', '25', '6,28', '0,5', '45', '6', '4', '1,6', '60', '13', '6,75', '0,5', '4', '320', '9', '50', '0', '80', '160', '550', '45', '0,5', '0,7', '2,5', '30', '15', '19', '12', '21,6', '3', '3', '12,8', '9', '100', '4,4', '6', '12', '22,5', '312,5', '20', '6', '5', '3', '6', '31', '41', '13', '24', '3', '2', '36', '35', '8', '10', '20', '4', '2', '25', '45', '2', '34', '1,25', '3', '5', '4', '30', '43', '5', '0,3', '2', '0,17', '0,25', '30', '2', '2', '4', '9', '3', '8', '16', '4', '0,034', '4', '13', '3,14'];

    for (let i = 1; i <= pr_otvet_all.length; i++) {
        
        let a, b;

        a = document.getElementById('answer_' + i).value;
        b = pr_otvet_all[i - 1];

        if (a == b) {
            document.getElementById('result_' + i).innerHTML = 'Верно!';
            document.getElementById('result_' + i).style.backgroundColor = 'rgb(59, 254, 72)';
        } if (a != b && a != '') {
            document.getElementById('result_' + i).innerHTML = 'Неверно!';
            document.getElementById('result_' + i).style.backgroundColor = 'rgb(255, 67, 67)';
        }

    }
}