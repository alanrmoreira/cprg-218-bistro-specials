const specialTitle = document.getElementById('today-special-title');
const specialImage = document.getElementById('today-spacial-img');

const handleDayOfWeek = () => {


    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const currentDay = new Date();
    let dayName = weekday[currentDay.getDay()];

    switch (dayName) {

        case 'Sunday':
            specialTitle.innerHTML = '$9 Deluxe Burger & Fries';
            specialImage.setAttribute('src', 'images/sunday.jpg');
            break;
        case 'Monday':
            specialTitle.innerHTML = '$12 Chicken Penne Alfredo';
            specialImage.setAttribute('src', 'images/monday.jpg');
            break;
        case 'Tuesday':
            specialTitle.innerHTML = '$10 Any Small Pizza';
            specialImage.setAttribute('src', 'images/tuesday.jpg');
            break;
        case 'Wednesday':
            specialTitle.innerHTML = '35¢ Chicken Wings';
            specialImage.setAttribute('src', 'images/wednesday.jpg');
            break;
        case 'Thursday':
            specialTitle.innerHTML = '$9 Fish and Chips';
            specialImage.setAttribute('src', 'images/thursday.jpg');
            break;
        case 'Friday':
            specialTitle.innerHTML = 'Half Price Cocktails All Day';
            specialImage.setAttribute('src', 'images/friday.jpg');
            break;
        case 'Saturday':
            specialTitle.innerHTML = '$10 Jumbo Greek Salad';
            specialImage.setAttribute('src', 'images/saturday.jpg');
            break;
    }


}