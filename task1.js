function cashOut(money) {
    if (money <= 0 || typeof money !== "number") {
        return "Invalid";
    }

    let charge = (money * 1.75) / 100;
    return charge;
}
