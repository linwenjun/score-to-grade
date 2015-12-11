function gradeCalculate(score) {
    if(score > 100 || score < 0) {
        return "Invalid input"
    }

    if (score >= 90) {
        return Grade.S;
    }
    else if (score >= 80)
        return Grade.A;
    else if (score >= 70)
        return Grade.B;
    else if (score >= 60)
        return Grade.C;
    else
        return Grade.D;
}

Grade = {
    S: "S",
    A: "A",
    B: "B",
    C: "C",
    D: "D"
};
