// Функция для проверки задачи на выполнение

function check_task() {
    // Кинематика
    const pr_otvet_all = ['20', '2', '25', '6,28', '0,5', '45', '6', '4', '1,6' ];

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


/*
    // Задание 1
    const pr_otvet_1 = '20';
    const otvet_user_1  = document.getElementById('answer_1').value;
    if (otvet_user_1 == pr_otvet_1) {
        document.getElementById('result_1').innerHTML = 'Верно!';
        document.getElementById('result_1').style.backgroundColor = 'rgb(59, 254, 72)';
    } else {
        document.getElementById('result_1').innerHTML = 'Неверно!';
        document.getElementById('result_1').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 2
    const pr_otvet_2 = '2';
    const otvet_user_2 = document.getElementById('answer_2').value;
    if (otvet_user_2 == pr_otvet_2) {
        document.getElementById('result_2').innerHTML = 'Верно!';
        document.getElementById('result_2').style.backgroundColor = 'rgb(59, 254, 72)';
    } else {
        document.getElementById('result_2').innerHTML = 'Неверно!';
        document.getElementById('result_2').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 3
    const pr_otvet_3 = '25';
    const otvet_user_3 = document.getElementById('answer_3').value;
    if (otvet_user_3 == pr_otvet_3) {
        document.getElementById('result_3').innerHTML = 'Верно!';
        document.getElementById('result_3').style.backgroundColor = 'rgb(59, 254, 72)';
    } else {
        document.getElementById('result_3').innerHTML = 'Неверно!';
        document.getElementById('result_3').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 4
    const pr_otvet_4 = '6,28';
    const otvet_user_4 = document.getElementById('answer_4').value;
    if (otvet_user_4 == pr_otvet_4) {
        document.getElementById('result_4').innerHTML = 'Верно!';
        document.getElementById('result_4').style.backgroundColor = 'rgb(59, 254, 72)';
    } else {
        document.getElementById('result_4').innerHTML = 'Неверно!';
        document.getElementById('result_4').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 5
    const pr_otvet_5 = '0,5';
    const otvet_user_5 = document.getElementById('answer_5').value;
    if (otvet_user_5 == pr_otvet_5) {
        document.getElementById('result_5').innerHTML = 'Верно!';
        document.getElementById('result_5').style.backgroundColor = 'rgb(59, 254, 72)';
    } else {
        document.getElementById('result_5').innerHTML = 'Неверно!'; 
        document.getElementById('result_5').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 6
    const pr_otvet_6 = '45';
    const otvet_user_6 = document.getElementById('answer_6').value;
    if (otvet_user_6 == pr_otvet_6) {
        document.getElementById('result_6').innerHTML = 'Верно!';
        document.getElementById('result_6').style.backgroundColor = 'rgb(59, 254, 72)';
    } else {
        document.getElementById('result_6').innerHTML = 'Неверно!';
        document.getElementById('result_6').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 7
    const pr_otvet_7 = '6';
    const otvet_user_7 = document.getElementById('answer_7').value;
    if (otvet_user_7 == pr_otvet_7) {
        document.getElementById('result_7').innerHTML = 'Верно!';
        document.getElementById('result_7').style.backgroundColor = 'rgb(59, 254, 72)';
    } else {
        document.getElementById('result_7').innerHTML = 'Неверно!';
        document.getElementById('result_7').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 8
    const pr_otvet_8 = '4';
    const otvet_user_8 = document.getElementById('answer_8').value;
    if (otvet_user_8 == pr_otvet_8) {
        document.getElementById('result_8').innerHTML = 'Верно!';
        document.getElementById('result_8').style.backgroundColor = 'rgb(59, 254, 72)';
    } else {
        document.getElementById('result_8').innerHTML = 'Неверно!';
        document.getElementById('result_8').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 9
    const pr_otvet_9 = '1,6';
    const otvet_user_9 = document.getElementById('answer_9').value;
    if (otvet_user_9 == pr_otvet_9) {
        document.getElementById('result_9').innerHTML = 'Верно!';
        document.getElementById('result_9').style.backgroundColor = 'rgb(59, 254, 72)';
    } else {
        document.getElementById('result_9').innerHTML = 'Неверно!';
        document.getElementById('result_9').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 10
    const pr_otvet_10 = '60';
    const otvet_user_10 = document.getElementById('answer_10').value;
    if (otvet_user_10 == pr_otvet_10) {
        document.getElementById('result_10').innerHTML = 'Верно!';
        document.getElementById('result_10').style.backgroundColor = 'rgb(59, 254, 72)';
    } else {
        document.getElementById('result_10').innerHTML = 'Неверно!';
        document.getElementById('result_10').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 11
    const pr_otvet_11 = '13';
    const otvet_user_11 = document.getElementById('answer_11').value;
    if (otvet_user_11 == pr_otvet_11) {
        document.getElementById('result_11').innerHTML = 'Верно!';
        document.getElementById('result_11').style.backgroundColor = 'rgb(59, 254, 72)';
    } else {
        document.getElementById('result_11').innerHTML = 'Неверно!';
        document.getElementById('result_11').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 12
    const pr_otvet_12 = '6,75';
    const otvet_user_12 = document.getElementById('answer_12').value;
    if (otvet_user_12 == pr_otvet_12) {
        document.getElementById('result_12').innerHTML = 'Верно!';
        document.getElementById('result_12').style.backgroundColor = 'rgb(59, 254, 72)';
    } else {
        document.getElementById('result_12').innerHTML = 'Неверно!';
        document.getElementById('result_12').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 13
    const pr_otvet_13 = '0,5';
    const otvet_user_13 = document.getElementById('answer_13').value;
    if (otvet_user_13 == pr_otvet_13) {
        document.getElementById('result_13').innerHTML = 'Верно!';
        document.getElementById('result_13').style.backgroundColor = 'rgb(59, 254, 72)';
    } else {
        document.getElementById('result_13').innerHTML = 'Неверно!';
        document.getElementById('result_13').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 14
    const pr_otvet_14 = '4';
    const otvet_user_14 = document.getElementById('answer_14').value;
    if (otvet_user_14 == pr_otvet_14) {
        document.getElementById('result_14').innerHTML = 'Верно!';
        document.getElementById('result_14').style.backgroundColor = 'rgb(59, 254, 72)';
    } else {
        document.getElementById('result_14').innerHTML = 'Неверно!';
        document.getElementById('result_14').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 15
    const pr_otvet_15 = '320';
    const otvet_user_15 = document.getElementById('answer_15').value;
    if (otvet_user_15 == pr_otvet_15) {
        document.getElementById('result_15').innerHTML = 'Верно!';
        document.getElementById('result_15').style.backgroundColor = 'rgb(59, 254, 72)';
    } else {
        document.getElementById('result_15').innerHTML = 'Неверно!';
        document.getElementById('result_15').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 16
    const pr_otvet_16 = '9';
    const otvet_user_16 = document.getElementById('answer_16').value;
    if (otvet_user_16 == pr_otvet_16) {
        document.getElementById('result_16').innerHTML = 'Верно!';
        document.getElementById('result_16').style.backgroundColor = 'rgb(59, 254, 72)';
    } else {
        document.getElementById('result_16').innerHTML = 'Неверно!';
        document.getElementById('result_16').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 17
    const pr_otvet_17 = '50';
    const otvet_user_17 = document.getElementById('answer_17').value;
    if (otvet_user_17 == pr_otvet_17) {
        document.getElementById('result_17').innerHTML = 'Верно!';
        document.getElementById('result_17').style.backgroundColor = 'rgb(59, 254, 72)';
    } else {
        document.getElementById('result_17').innerHTML = 'Неверно!';
        document.getElementById('result_17').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 18
    const pr_otvet_18 = '0';
    const otvet_user_18 = document.getElementById('answer_18').value;
    if (otvet_user_18 == pr_otvet_18) {
        document.getElementById('result_18').innerHTML = 'Верно!';
        document.getElementById('result_18').style.backgroundColor = 'rgb(59, 254, 72)';
    } else {
        document.getElementById('result_18').innerHTML = 'Неверно!';
        document.getElementById('result_18').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 19
    const pr_otvet_19 = '80';
    const otvet_user_19 = document.getElementById('answer_19').value;
    if (otvet_user_19 == pr_otvet_19) {
        document.getElementById('result_19').innerHTML = 'Верно!';
        document.getElementById('result_19').style.backgroundColor = 'rgb(59, 254, 72)';
    } else {
        document.getElementById('result_19').innerHTML = 'Неверно!';
        document.getElementById('result_19').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 20
    const pr_otvet_20 = '160';
    const otvet_user_20 = document.getElementById('answer_20').value;
    if (otvet_user_20 == pr_otvet_20) {
        document.getElementById('result_20').innerHTML = 'Верно!';
        document.getElementById('result_20').style.backgroundColor = 'rgb(59, 254, 72)';
    } else {
        document.getElementById('result_20').innerHTML = 'Неверно!';
        document.getElementById('result_20').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 21
    const pr_otvet_21 = '550';
    const otvet_user_21 = document.getElementById('answer_21').value;
    if (otvet_user_21 == pr_otvet_21) {
        document.getElementById('result_21').innerHTML = 'Верно!';
        document.getElementById('result_21').style.backgroundColor = 'rgb(59, 254, 72)';
    } else {
        document.getElementById('result_21').innerHTML = 'Неверно!';
        document.getElementById('result_21').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 22
    const pr_otvet_22 = '45';
    const otvet_user_22 = document.getElementById('answer_22').value;
    if (otvet_user_22 == pr_otvet_22) {
        document.getElementById('result_22').innerHTML = 'Верно!';
        document.getElementById('result_22').style.backgroundColor = 'rgb(59, 254, 72)';
    } else {
        document.getElementById('result_22').innerHTML = 'Неверно!';
        document.getElementById('result_22').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 23
    const pr_otvet_23 = '0,5';
    const otvet_user_23 = document.getElementById('answer_23').value;
    if (otvet_user_23 == pr_otvet_23) {
        document.getElementById('result_23').innerHTML = 'Верно!';
        document.getElementById('result_23').style.backgroundColor = 'rgb(59, 254, 72)';
    } else {
        document.getElementById('result_23').innerHTML = 'Неверно!';
        document.getElementById('result_23').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 24
    const pr_otvet_24 = '0,7';
    const otvet_user_24 = document.getElementById('answer_24').value;
    if (otvet_user_24 == pr_otvet_24) {
        document.getElementById('result_24').innerHTML = 'Верно!';
        document.getElementById('result_24').style.backgroundColor = 'rgb(59, 254, 72)';
    } else {
        document.getElementById('result_24').innerHTML = 'Неверно!';
        document.getElementById('result_24').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 25
    const pr_otvet_25 = '2,5';
    const otvet_user_25 = document.getElementById('answer_25').value;
    if (otvet_user_25 == pr_otvet_25) {
        document.getElementById('result_25').innerHTML = 'Верно!';
        document.getElementById('result_25').style.backgroundColor = 'rgb(59, 254, 72)';
    } else {
        document.getElementById('result_25').innerHTML = 'Неверно!';
        document.getElementById('result_25').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 26
    const pr_otvet_26 = '30';
    const otvet_user_26 = document.getElementById('answer_26').value;
    if (otvet_user_26 == pr_otvet_26) {
        document.getElementById('result_26').innerHTML = 'Верно!';
        document.getElementById('result_26').style.backgroundColor = 'rgb(59, 254, 72)';
    } else {
        document.getElementById('result_26').innerHTML = 'Неверно!';
        document.getElementById('result_26').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 27
    const pr_otvet_27 = '15';
    const otvet_user_27 = document.getElementById('answer_27').value;
    if (otvet_user_27 == pr_otvet_27) {
        document.getElementById('result_27').innerHTML = 'Верно!';
        document.getElementById('result_27').style.backgroundColor = 'rgb(59, 254, 72)';
    } else {
        document.getElementById('result_27').innerHTML = 'Неверно!';
        document.getElementById('result_27').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 28
    const pr_otvet_28 = '19';
    const otvet_user_28 = document.getElementById('answer_28').value;
    if (otvet_user_28 == pr_otvet_28) {
        document.getElementById('result_28').innerHTML = 'Верно!';
        document.getElementById('result_28').style.backgroundColor = 'rgb(59, 254, 72)';
    } else {
        document.getElementById('result_28').innerHTML = 'Неверно!';
        document.getElementById('result_28').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 29
    const pr_otvet_29 = '12';
    const otvet_user_29 = document.getElementById('answer_29').value;
    if (otvet_user_29 == pr_otvet_29) {
        document.getElementById('result_29').innerHTML = 'Верно!';
        document.getElementById('result_29').style.backgroundColor = 'rgb(59, 254, 72)';
    } else {
        document.getElementById('result_29').innerHTML = 'Неверно!';
        document.getElementById('result_29').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 30
    const pr_otvet_30 = '21,6';
    const otvet_user_30 = document.getElementById('answer_30').value;
    if (otvet_user_30 == pr_otvet_30) {
        document.getElementById('result_30').innerHTML = 'Верно!';
        document.getElementById('result_30').style.backgroundColor = 'rgb(59, 254, 72)';
    } else {
        document.getElementById('result_30').innerHTML = 'Неверно!';
        document.getElementById('result_30').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 31
    const pr_otvet_31 = '3';
    const otvet_user_31 = document.getElementById('answer_31').value;
    if (otvet_user_31 == pr_otvet_31) {
        document.getElementById('result_31').innerHTML = 'Верно!';
        document.getElementById('result_31').style.backgroundColor = 'rgb(59, 254, 72)';
    } else {
        document.getElementById('result_31').innerHTML = 'Неверно!';
        document.getElementById('result_31').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 32
    const pr_otvet_32 = '3';
    const otvet_user_32 = document.getElementById('answer_32').value;
    if  (otvet_user_32 == pr_otvet_32) {
        document.getElementById('result_32').innerHTML = 'Верно!';
        document.getElementById('result_32').style.backgroundColor = 'rgb(59, 254, 72)';
    } else {
        document.getElementById('result_32').innerHTML = 'Неверно!';
        document.getElementById('result_32').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 33
    const pr_otvet_33 = '12,8';
    const otvet_user_33 = document.getElementById('answer_33').value;
    if (otvet_user_33 == pr_otvet_33) {
        document.getElementById('result_33').innerHTML = 'Верно!';
        document.getElementById('result_33').style.backgroundColor = 'rgb(59, 254, 72)';
    } else {
        document.getElementById('result_33').innerHTML = 'Неверно!';
        document.getElementById('result_33').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 34
    const pr_otvet_34 = '9';
    const otvet_user_34 = document.getElementById('answer_34').value;
    if (otvet_user_34 == pr_otvet_34) {
        document.getElementById('result_34').innerHTML = 'Верно!';
        document.getElementById('result_34').style.backgroundColor = 'rgb(59, 254, 72)';
    } else {
        document.getElementById('result_34').innerHTML = 'Неверно!';
        document.getElementById('result_34').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 35
    const pr_otvet_35 = '100';
    const otvet_user_35 = document.getElementById('answer_35').value;
    if (otvet_user_35 == pr_otvet_35) {
        document.getElementById('result_35').innerHTML = 'Верно!';
        document.getElementById('result_35').style.backgroundColor = 'rgb(59, 254, 72)';
    } else {
        document.getElementById('result_35').innerHTML = 'Неверно!';
        document.getElementById('result_35').style.backgroundColor = 'rgb(255, 67, 67)';
    }  
    // Задание 36
    const pr_otvet_36 = '4,4';
    const otvet_user_36 = document.getElementById('answer_36').value;
    if (otvet_user_36 == pr_otvet_36) {
        document.getElementById('result_36').innerHTML = 'Верно!';
        document.getElementById('result_36').style.backgroundColor = 'rgb(59, 254, 72)';
    } else {
        document.getElementById('result_36').innerHTML = 'Неверно!';
        document.getElementById('result_36').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 37
    const pr_otvet_37 = '6';
    const otvet_user_37 = document.getElementById('answer_37').value;
    if (otvet_user_37 == pr_otvet_37) {
        document.getElementById('result_37').innerHTML = 'Верно!';
        document.getElementById('result_37').style.backgroundColor = 'rgb(59, 254, 72)';
    } else {
        document.getElementById('result_37').innerHTML = 'Неверно!';
        document.getElementById('result_37').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 38
    const pr_otvet_38 = '12';
    const otvet_user_38 = document.getElementById('answer_38').value;
    if (otvet_user_38 == pr_otvet_38) {
        document.getElementById('result_38').innerHTML = 'Верно!';
        document.getElementById('result_38').style.backgroundColor = 'rgb(59, 254, 72)';
    } else {
        document.getElementById('result_38').innerHTML = 'Неверно!';
        document.getElementById('result_38').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 39
    const pr_otvet_39 = '22,5';
    const otvet_user_39 = document.getElementById('answer_39').value;
    if (otvet_user_39 == pr_otvet_39) {
        document.getElementById('result_39').innerHTML = 'Верно!';
        document.getElementById('result_39').style.backgroundColor = 'rgb(59, 254, 72)';
    } else {
        document.getElementById('result_39').innerHTML = 'Неверно!';
        document.getElementById('result_39').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 40
    const pr_otvet_40 = '312,5';
    const otvet_user_40 = document.getElementById('answer_40').value;
    if (otvet_user_40 == pr_otvet_40) {
        document.getElementById('result_40').innerHTML = 'Верно!';
        document.getElementById('result_40').style.backgroundColor = 'rgb(59, 254, 72)';
    } else {
        document.getElementById('result_40').innerHTML = 'Неверно!';
        document.getElementById('result_40').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 41
    const pr_otvet_41 = '20';
    const otvet_user_41 = document.getElementById('answer_41').value;
    if (otvet_user_41 == pr_otvet_41) {
        document.getElementById('result_41').innerHTML = 'Верно!';
        document.getElementById('result_41').style.backgroundColor = 'rgb(59, 254, 72)';
    } else {
        document.getElementById('result_41').innerHTML = 'Неверно!';
        document.getElementById('result_41').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 42
    const pr_otvet_42 = '6';
    const otvet_user_42 = document.getElementById('answer_42').value;
    if (otvet_user_42 == pr_otvet_42) {
        document.getElementById('result_42').innerHTML = 'Верно!';
        document.getElementById('result_42').style.backgroundColor = 'rgb(59, 254, 72';
    } else {
        document.getElementById('result_42').innerHTML = 'Неверно!';
        document.getElementById('result_42').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 43
    const pr_otvet_43 = '5';
    const otvet_user_43 = document.getElementById('answer_43').value;
    if (otvet_user_43 == pr_otvet_43) {
        document.getElementById('result_43').innerHTML = 'Верно!';
        document.getElementById('result_43').style.backgroundColor = 'rgb(59, 254, 72';
    } else {
        document.getElementById('result_43').innerHTML = 'Неверно!';
        document.getElementById('result_43').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 44
    const pr_otvet_44 = '3';
    const otvet_user_44 = document.getElementById('answer_44').value;
    if (otvet_user_44 == pr_otvet_44) {
        document.getElementById('result_44').innerHTML = 'Верно!';
        document.getElementById('result_44').style.backgroundColor = 'rgb(59, 254, 72';
    } else {
        document.getElementById('result_44').innerHTML = 'Неверно!';
        document.getElementById('result_44').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 45
    const pr_otvet_45 = '6';
    const otvet_user_45 = document.getElementById('answer_45').value;
    if (otvet_user_45 == pr_otvet_45) {
        document.getElementById('result_45').innerHTML = 'Верно!';
        document.getElementById('result_45').style.backgroundColor = 'rgb(59, 254, 72';
    } else {
        document.getElementById('result_45').innerHTML = 'Неверно!';
        document.getElementById('result_45').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 46
    const pr_otvet_46 = '31';
    const otvet_user_46 = document.getElementById('answer_46').value;
    if (otvet_user_46 == pr_otvet_46) {
        document.getElementById('result_46').innerHTML = 'Верно!';
        document.getElementById('result_46').style.backgroundColor = 'rgb(59, 254, 72';
    } else {
        document.getElementById('result_46').innerHTML = 'Неверно!';
        document.getElementById('result_46').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 47
    const pr_otvet_47 = '41';
    const otvet_user_47 = document.getElementById('answer_47').value;
    if (otvet_user_47 == pr_otvet_47) {
        document.getElementById('result_47').innerHTML = 'Верно!';
        document.getElementById('result_47').style.backgroundColor = 'rgb(59, 254, 72';
    } else {
        document.getElementById('result_47').innerHTML = 'Неверно!';
        document.getElementById('result_47').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 48
    const pr_otvet_48 = '13';
    const otvet_user_48 = document.getElementById('answer_48').value;
    if (otvet_user_48 == pr_otvet_48) {
        document.getElementById('result_48').innerHTML = 'Верно!';
        document.getElementById('result_48').style.backgroundColor = 'rgb(59, 254, 72';
    } else {
        document.getElementById('result_48').innerHTML = 'Неверно!';
        document.getElementById('result_48').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 49
    const pr_otvet_49 = '24';
    const otvet_user_49 = document.getElementById('answer_49').value;
    if (otvet_user_49 == pr_otvet_49) {
        document.getElementById('result_49').innerHTML = 'Верно!';
        document.getElementById('result_49').style.backgroundColor = 'rgb(59, 254, 72';
    } else {
        document.getElementById('result_49').innerHTML = 'Неверно!';
        document.getElementById('result_49').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 50
    const pr_otvet_50 = '3';
    const otvet_user_50 = document.getElementById('answer_50').value;
    if (otvet_user_50 == pr_otvet_50) {
        document.getElementById('result_50').innerHTML = 'Верно!';
        document.getElementById('result_50').style.backgroundColor = 'rgb(59, 254, 72';
    } else {
        document.getElementById('result_50').innerHTML = 'Неверно!';
        document.getElementById('result_50').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 51
    const pr_otvet_51 = '2';
    const otvet_user_51 = document.getElementById('answer_51').value;
    if (otvet_user_51 == pr_otvet_51) {
        document.getElementById('result_51').innerHTML = 'Верно!';
        document.getElementById('result_51').style.backgroundColor = 'rgb(59, 254, 72';
    } else {
        document.getElementById('result_51').innerHTML = 'Неверно!';
        document.getElementById('result_51').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 52
    const pr_otvet_52 = '36';
    const otvet_user_52 = document.getElementById('answer_52').value;
    if (otvet_user_52 == pr_otvet_52) {
        document.getElementById('result_52').innerHTML = 'Верно!';
        document.getElementById('result_52').style.backgroundColor = 'rgb(59, 254, 72';
    } else {
        document.getElementById('result_52').innerHTML = 'Неверно!';
        document.getElementById('result_52').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 53
    const pr_otvet_53 = '35';
    const otvet_user_53 = document.getElementById('answer_53').value;
    if (otvet_user_53 == pr_otvet_53) {
        document.getElementById('result_53').innerHTML = 'Верно!';
        document.getElementById('result_53').style.backgroundColor = 'rgb(59, 254, 72';
    } else {
        document.getElementById('result_53').innerHTML = 'Неверно!';
        document.getElementById('result_53').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 54
    const pr_otvet_54 = '8';
    const otvet_user_54 = document.getElementById('answer_54').value;
    if (otvet_user_54 == pr_otvet_54) {
        document.getElementById('result_54').innerHTML = 'Верно!';
        document.getElementById('result_54').style.backgroundColor = 'rgb(59, 254, 72';
    } else {
        document.getElementById('result_54').innerHTML = 'Неверно!';
        document.getElementById('result_54').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 55
    const pr_otvet_55 = '10';
    const otvet_user_55 = document.getElementById('answer_55').value;
    if (otvet_user_55 == pr_otvet_55) {
        document.getElementById('result_55').innerHTML = 'Верно!';
        document.getElementById('result_55').style.backgroundColor = 'rgb(59, 254, 72';
    } else {
        document.getElementById('result_55').innerHTML = 'Неверно!';
        document.getElementById('result_55').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 56
    const pr_otvet_56 = '20';
    const otvet_user_56 = document.getElementById('answer_56').value;
    if (otvet_user_56 == pr_otvet_56) {
        document.getElementById('result_56').innerHTML = 'Верно!';
        document.getElementById('result_56').style.backgroundColor = 'rgb(59, 254, 72';
    } else {
        document.getElementById('result_56').innerHTML = 'Неверно!';
        document.getElementById('result_56').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 57
    const pr_otvet_57 = '4';
    const otvet_user_57 = document.getElementById('answer_57').value;
    if (otvet_user_57 == pr_otvet_57) {
        document.getElementById('result_57').innerHTML = 'Верно!';
        document.getElementById('result_57').style.backgroundColor = 'rgb(59, 254, 72';
    } else {
        document.getElementById('result_57').innerHTML = 'Неверно!';
        document.getElementById('result_57').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 58
    const pr_otvet_58 = '2';
    const otvet_user_58 = document.getElementById('answer_58').value;
    if (otvet_user_58 == pr_otvet_58) {
        document.getElementById('result_58').innerHTML = 'Верно!';
        document.getElementById('result_58').style.backgroundColor = 'rgb(59, 254, 72';
    } else {
        document.getElementById('result_58').innerHTML = 'Неверно!';
        document.getElementById('result_58').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 59
    const pr_otvet_59 = '25';
    const otvet_user_59 = document.getElementById('answer_59').value;
    if (otvet_user_59 == pr_otvet_59) {
        document.getElementById('result_59').innerHTML = 'Верно!';
        document.getElementById('result_59').style.backgroundColor = 'rgb(59, 254, 72';
    } else {
        document.getElementById('result_59').innerHTML = 'Неверно!';
        document.getElementById('result_59').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 60
    const pr_otvet_60 = '45';
    const otvet_user_60 = document.getElementById('answer_60').value;
    if (otvet_user_60 == pr_otvet_60) {
        document.getElementById('result_60').innerHTML = 'Верно!';
        document.getElementById('result_60').style.backgroundColor = 'rgb(59, 254, 72';
    } else {
        document.getElementById('result_60').innerHTML = 'Неверно!';
        document.getElementById('result_60').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 61
    const pr_otvet_61 = '2';
    const otvet_user_61 = document.getElementById('answer_61').value;
    if (otvet_user_61 == pr_otvet_61) {
        document.getElementById('result_61').innerHTML = 'Верно!';
        document.getElementById('result_61').style.backgroundColor = 'rgb(59, 254, 72';
    } else {
        document.getElementById('result_61').innerHTML = 'Неверно!';
        document.getElementById('result_61').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 62
    const pr_otvet_62 = '34';
    const otvet_user_62 = document.getElementById('answer_62').value;
    if (otvet_user_62 == pr_otvet_62) {
        document.getElementById('result_62').innerHTML = 'Верно!';
        document.getElementById('result_62').style.backgroundColor = 'rgb(59, 254, 72';
    } else {
        document.getElementById('result_62').innerHTML = 'Неверно!';
        document.getElementById('result_62').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 63
    const pr_otvet_63 = '1,25';
    const otvet_user_63 = document.getElementById('answer_63').value;
    if (otvet_user_63 == pr_otvet_63) {
        document.getElementById('result_63').innerHTML = 'Верно!';
        document.getElementById('result_63').style.backgroundColor = 'rgb(59, 254, 72';
    } else {
        document.getElementById('result_63').innerHTML = 'Неверно!';
        document.getElementById('result_63').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 64
    const pr_otvet_64 = '3';
    const otvet_user_64 = document.getElementById('answer_64').value;
    if (otvet_user_64 == pr_otvet_64) {
        document.getElementById('result_64').innerHTML = 'Верно!';
        document.getElementById('result_64').style.backgroundColor = 'rgb(59, 254, 72';
    } else {
        document.getElementById('result_64').innerHTML = 'Неверно!';
        document.getElementById('result_64').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 65
    const pr_otvet_65 = '5';
    const otvet_user_65 = document.getElementById('answer_65').value;
    if (otvet_user_65 == pr_otvet_65) {
        document.getElementById('result_65').innerHTML = 'Верно!';
        document.getElementById('result_65').style.backgroundColor = 'rgb(59, 254, 72';
    } else {
        document.getElementById('result_65').innerHTML = 'Неверно!';
        document.getElementById('result_65').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 66
    const pr_otvet_66 = '4';
    const otvet_user_66 = document.getElementById('answer_66').value;
    if (otvet_user_66 == pr_otvet_66) {
        document.getElementById('result_66').innerHTML = 'Верно!';
        document.getElementById('result_66').style.backgroundColor = 'rgb(59, 254, 72';
    } else {
        document.getElementById('result_66').innerHTML = 'Неверно!';
        document.getElementById('result_66').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 67
    const pr_otvet_67 = '30';
    const otvet_user_67 = document.getElementById('answer_67').value;
    if (otvet_user_67 == pr_otvet_67) {
        document.getElementById('result_67').innerHTML = 'Верно!';
        document.getElementById('result_67').style.backgroundColor = 'rgb(59, 254, 72';
    } else {
        document.getElementById('result_67').innerHTML = 'Неверно!';
        document.getElementById('result_67').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 68
    const pr_otvet_68 = '43';
    const otvet_user_68 = document.getElementById('answer_68').value;
    if (otvet_user_68 == pr_otvet_68) {
        document.getElementById('result_68').innerHTML = 'Верно!';
        document.getElementById('result_68').style.backgroundColor = 'rgb(59, 254, 72';
    } else {
        document.getElementById('result_68').innerHTML = 'Неверно!';
        document.getElementById('result_68').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 69
    const pr_otvet_69 = '5';
    const otvet_user_69 = document.getElementById('answer_69').value;
    if (otvet_user_69 == pr_otvet_69) {
        document.getElementById('result_69').innerHTML = 'Верно!';
        document.getElementById('result_69').style.backgroundColor = 'rgb(59, 254, 72';
    } else {
        document.getElementById('result_69').innerHTML = 'Неверно!';
        document.getElementById('result_69').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 70
    const pr_otvet_70 = '0,3';
    const otvet_user_70 = document.getElementById('answer_70').value;
    if (otvet_user_70 == pr_otvet_70) {
        document.getElementById('result_70').innerHTML = 'Верно!';
        document.getElementById('result_70').style.backgroundColor = 'rgb(59, 254, 72';
    } else {
        document.getElementById('result_70').innerHTML = 'Неверно!';
        document.getElementById('result_70').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 71
    const pr_otvet_71 = '2';
    const otvet_user_71 = document.getElementById('answer_71').value;
    if (otvet_user_71 == pr_otvet_71) {
        document.getElementById('result_71').innerHTML = 'Верно!';
        document.getElementById('result_71').style.backgroundColor = 'rgb(59, 254, 72';
    } else {
        document.getElementById('result_71').innerHTML = 'Неверно!';
        document.getElementById('result_71').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 72
    const pr_otvet_72 = '0,17';
    const otvet_user_72 = document.getElementById('answer_72').value;
    if (otvet_user_72 == pr_otvet_72) {
        document.getElementById('result_72').innerHTML = 'Верно!';
        document.getElementById('result_72').style.backgroundColor = 'rgb(59, 254, 72';
    } else {
        document.getElementById('result_72').innerHTML = 'Неверно!';
        document.getElementById('result_72').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 73
    const pr_otvet_73 = '0,25';
    const otvet_user_73 = document.getElementById('answer_73').value;
    if (otvet_user_73 == pr_otvet_73) {
        document.getElementById('result_73').innerHTML = 'Верно!';
        document.getElementById('result_73').style.backgroundColor = 'rgb(59, 254, 72';
    } else {
        document.getElementById('result_73').innerHTML = 'Неверно!';
        document.getElementById('result_73').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 74
    const pr_otvet_74 = '30';
    const otvet_user_74 = document.getElementById('answer_74').value;
    if (otvet_user_74 == pr_otvet_74) {
        document.getElementById('result_74').innerHTML = 'Верно!';
        document.getElementById('result_74').style.backgroundColor = 'rgb(59, 254, 72';
    } else {
        document.getElementById('result_74').innerHTML = 'Неверно!';
        document.getElementById('result_74').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 75
    const pr_otvet_75 = '2';
    const otvet_user_75 = document.getElementById('answer_75').value;
    if (otvet_user_75 == pr_otvet_75) {
        document.getElementById('result_75').innerHTML = 'Верно!';
        document.getElementById('result_75').style.backgroundColor = 'rgb(59, 254, 72';
    } else {
        document.getElementById('result_75').innerHTML = 'Неверно!';
        document.getElementById('result_75').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 76
    const pr_otvet_76 = '2';
    const otvet_user_76 = document.getElementById('answer_76').value;
    if (otvet_user_76 == pr_otvet_76) {
        document.getElementById('result_76').innerHTML = 'Верно!';
        document.getElementById('result_76').style.backgroundColor = 'rgb(59, 254, 72';
    } else {
        document.getElementById('result_76').innerHTML = 'Неверно!';
        document.getElementById('result_76').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 77
    const pr_otvet_77 = '4';
    const otvet_user_77 = document.getElementById('answer_77').value;
    if (otvet_user_77 == pr_otvet_77) {
        document.getElementById('result_77').innerHTML = 'Верно!';
        document.getElementById('result_77').style.backgroundColor = 'rgb(59, 254, 72';
    } else {
        document.getElementById('result_77').innerHTML = 'Неверно!';
        document.getElementById('result_77').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 78
    const pr_otvet_78 = '9';
    const otvet_user_78 = document.getElementById('answer_78').value;
    if (otvet_user_78 == pr_otvet_78) {
        document.getElementById('result_78').innerHTML = 'Верно!';
        document.getElementById('result_78').style.backgroundColor = 'rgb(59, 254, 72';
    } else {
        document.getElementById('result_78').innerHTML = 'Неверно!';
        document.getElementById('result_78').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 79
    const pr_otvet_79 = '3';
    const otvet_user_79 = document.getElementById('answer_79').value;
    if (otvet_user_79 == pr_otvet_79) {
        document.getElementById('result_79').innerHTML = 'Верно!';
        document.getElementById('result_79').style.backgroundColor = 'rgb(59, 254, 72';
    } else {
        document.getElementById('result_79').innerHTML = 'Неверно!';
        document.getElementById('result_79').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 80
    const pr_otvet_80 = '8';
    const otvet_user_80 = document.getElementById('answer_80').value;
    if (otvet_user_80 == pr_otvet_80) {
        document.getElementById('result_80').innerHTML = 'Верно!';
        document.getElementById('result_80').style.backgroundColor = 'rgb(59, 254, 72';
    } else {
        document.getElementById('result_80').innerHTML = 'Неверно!';
        document.getElementById('result_80').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 81
    const pr_otvet_81 = '16';
    const otvet_user_81 = document.getElementById('answer_81').value;
    if (otvet_user_81 == pr_otvet_81) {
        document.getElementById('result_81').innerHTML = 'Верно!';
        document.getElementById('result_81').style.backgroundColor = 'rgb(59, 254, 72';
    } else {
        document.getElementById('result_81').innerHTML = 'Неверно!';
        document.getElementById('result_81').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 82
    const pr_otvet_82 = '4';
    const otvet_user_82 = document.getElementById('answer_82').value;
    if (otvet_user_82 == pr_otvet_82) {
        document.getElementById('result_82').innerHTML = 'Верно!';
        document.getElementById('result_82').style.backgroundColor = 'rgb(59, 254, 72';
    } else {
        document.getElementById('result_82').innerHTML = 'Неверно!';
        document.getElementById('result_82').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 83
    const pr_otvet_83 = '0,034';
    const otvet_user_83 = document.getElementById('answer_83').value;
    if (otvet_user_83 == pr_otvet_83) {
        document.getElementById('result_83').innerHTML = 'Верно!';
        document.getElementById('result_83').style.backgroundColor = 'rgb(59, 254, 72';
    } else {
        document.getElementById('result_83').innerHTML = 'Неверно!';
        document.getElementById('result_83').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 84
    const pr_otvet_84 = '4';
    const otvet_user_84 = document.getElementById('answer_84').value;
    if (otvet_user_84 == pr_otvet_84) {
        document.getElementById('result_84').innerHTML = 'Верно!';
        document.getElementById('result_84').style.backgroundColor = 'rgb(59, 254, 72';
    } else {
        document.getElementById('result_84').innerHTML = 'Неверно!';
        document.getElementById('result_84').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 85
    const pr_otvet_85 = '13';
    const otvet_user_85 = document.getElementById('answer_85').value;
    if (otvet_user_85 == pr_otvet_85) {
        document.getElementById('result_85').innerHTML = 'Верно!';
        document.getElementById('result_85').style.backgroundColor = 'rgb(59, 254, 72';
    } else {
        document.getElementById('result_85').innerHTML = 'Неверно!';
        document.getElementById('result_85').style.backgroundColor = 'rgb(255, 67, 67)';
    }
    // Задание 86
    const pr_otvet_86 = '3,14';
    const otvet_user_86 = document.getElementById('answer_86').value;
    if (otvet_user_86 == pr_otvet_86) {
        document.getElementById('result_86').innerHTML = 'Верно!';
        document.getElementById('result_86').style.backgroundColor = 'rgb(59, 254, 72';
    } else {
        document.getElementById('result_86').innerHTML = 'Неверно!';
        document.getElementById('result_86').style.backgroundColor = 'rgb(255, 67, 67)';
    }


    // Динамика


}

*/
