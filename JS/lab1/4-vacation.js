function vacation(groupSize, groupType, dayOfWeek) {
    let pricePerPerson = 0;
    let totalPrice = 0;
    switch (groupType) {
        case "Students":
            switch (dayOfWeek) {
                case "Friday":
                    pricePerPerson = 8.45;
                    break;
                case "Saturday":
                    pricePerPerson = 9.80;
                    break;
                case "Sunday":
                    pricePerPerson = 10.46;
                    break;
            }
            break;
        case "Corporate":
            switch (dayOfWeek) {
                case "Friday":
                    pricePerPerson = 10.90;
                    break;
                case "Saturday":
                    pricePerPerson = 15.60;
                    break;
                case "Sunday":
                    pricePerPerson = 16;
                    break;
            }
            break;
        case "Regular":
            switch (dayOfWeek) {
                case "Friday":
                    pricePerPerson = 15;
                    break;
                case "Saturday":
                    pricePerPerson = 20;
                    break;
                case "Sunday":
                    pricePerPerson = 22.50;
                    break;
            }
            break;
    }
    totalPrice = groupSize * pricePerPerson;
    if (groupType === "Students" && groupSize >= 30) {
        totalPrice *= 0.85;
    } else if (groupType === "Corporate" && groupSize >= 100) {
        totalPrice -= 10 * pricePerPerson;
    } else if (groupType === "Regular" && (groupSize >= 10 && groupSize <= 20)) {
        totalPrice *= 0.95;
    }
    console.log("Total price: " + totalPrice.toFixed(2));
}
vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");
