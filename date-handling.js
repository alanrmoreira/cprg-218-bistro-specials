const specialTitle = document.getElementById('today-special-title');
const specialDescription = document.getElementById('today-special-description')
const specialImage = document.getElementById('today-spacial-img');


const handleDayOfWeek = () => {


    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const currentDay = new Date();
    let dayName = weekday[currentDay.getDay()];

    switch (dayName) {

        case 'Sunday':
            specialTitle.innerHTML = `${dayName}'s $9 Deluxe Burger & Fries`;
            specialDescription.innerHTML = '50% off our Deluxe Burger and fries. A 16oz Angus patty on a pretzel bun topped with lettuce, tomato, bacon, grilled onions, and an onion ring. A huge side of our famous fries is served on the side.';
            specialImage.setAttribute('src', 'images/sunday.jpg');
            break;
        case 'Monday':
            specialTitle.innerHTML = `${dayName}'s $12 Chicken Penne Alfredo`;
            specialDescription.innerHTML = 'Grilled chicken breast over penne noodles with a creamy Alfredo sauce and parmesan cheese on top.  Side Caesar Salad included.';
            specialImage.setAttribute('src', 'images/monday.jpg');
            break;
        case 'Tuesday':
            specialTitle.innerHTML = `${dayName}'s $10 Any Small Pizza`;
            specialDescription.innerHTML = 'Pick up to 3 of your favourite toppings. Our pizzas have a crispy golden whole wheat crust.';
            specialImage.setAttribute('src', 'images/tuesday.jpg');
            break;
        case 'Wednesday':
            specialTitle.innerHTML = `${dayName}'s 35¢ Chicken Wings`;
            specialDescription.innerHTML = 'Our classic chicken wings come in three flavours – salt & pepper, honey garlic and extra hot. Minimum order is 20 wings – available in quantities of 10 after that.';
            specialImage.setAttribute('src', 'images/wednesday.jpg');
            break;
        case 'Thursday':
            specialTitle.innerHTML = `${dayName}'s $9 Fish and Chips`;
            specialDescription.innerHTML = 'Authentic English style battered cod with a heaping helping of piping hot chips. Served with salt, vinegar and a curry sauce to flavor it to your taste. This dish is jolly good!';
            specialImage.setAttribute('src', 'images/thursday.jpg');
            break;
        case 'Friday':
            specialTitle.innerHTML = `${dayName}'s Half Price Cocktails All Day`;
            specialDescription.innerHTML = '50% off our regular price. Our customers rave about our Greek Salad, so we want to give everyone a chance to try it.  Get a full sized Greek Salad at a great price.';
            specialImage.setAttribute('src', 'images/friday.jpg');
            break;
        case 'Saturday':
            specialTitle.innerHTML = `${dayName}'s $10 Jumbo Greek Salad`;
            specialDescription.innerHTML = '50% off our regular price. Our customers rave about our Greek Salad, so we want to give everyone a chance to try it.  Get a full sized Greek Salad at a great price.';
            specialImage.setAttribute('src', 'images/saturday.jpg');
            break;
    }


}