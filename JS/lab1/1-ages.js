function ages(num) {
    switch (true){
        case num >= 66:
            console.log("пожилой")
            break
        case num >= 20:
            console.log("взрослый")
            break
        case num >= 14:
            console.log("подросток")
            break
        case num >= 3:
            console.log("ребенок")
            break
        case num >= 0:
            console.log("младенец")
            break
        default:
            console.log("невозможно")
    }
}
ages(20)
ages(1)
ages(100)