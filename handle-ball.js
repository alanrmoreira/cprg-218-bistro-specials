const answer = document.getElementById('answer');

const answerQuestion = () => {

    let answerNumber = Math.floor(Math.random() * 10);


    switch (answerNumber) {

        case 0:
            answer.innerHTML = 'Yes';
            break;

        case 1:
            answer.innerHTML = 'No';
            break;

        case 2:
            answer.innerHTML = 'Maybe';
            break;

        case 3:
            answer.innerHTML = 'You should think more about it';
            break;

        case 4:
            answer.innerHTML = 'I dont know';
            break;

        case 5:
            answer.innerHTML = 'Later';
            break;

        case 6:
            answer.innerHTML = 'Better not say';
            break;

        case 7:
            answer.innerHTML = 'Someday';
            break;

        case 8:
            answer.innerHTML = 'somewhere';
            break;

        case 9:
            answer.innerHTML = 'sure';
            break;

        case 10:
            answer.innerHTML = 'absolutely';
            break;

    }

}