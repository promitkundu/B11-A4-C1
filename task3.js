function electionResult(votes) {
    if (!Array.isArray(votes)) {
        return "Invalid";
    }

    let mango = 0;
    let banana = 0;

    for (let n = 0; n < votes.length; n++) {
        if (votes[n] === "mango") {
            mango++;
        } 
        else if (votes[n] === "banana") {
            banana++;
        }
    }

    if (mango > banana) {
        return "Mango";
    } 
    else if (banana > mango) {
        return "Banana";
    } 

    return "Draw";
}

const total = electionResult(["mango", "jaker party" , "no"]);
console.log(total);