function myAtoi(s: string): number {
    if (s.length === 0) {
        return 0;
    }
    let pos: boolean = true;
    let numberStarted: boolean = false;
    let newString: string = "";

    for (let i = 0; i < s.length; i++) {
        if (
            s[i] === "+" ||
            s[i] === "-" ||
            (s[i].charCodeAt(0) >= 48 && s[i].charCodeAt(0) <= 57)
        ) {
            newString += s.slice(i, 1);
        } else {
        }
    }

    return parseInt(newString);
}

const x: string[] = ["0", "-1", " 980 ", " -d8 ", "  -10XE", "913"];

for (let i = 0; i < x.length; i++) {
    console.log(x[i], "|", myAtoi(x[i]));
    console.log("_________");
}
