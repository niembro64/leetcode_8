function myAtoi(s: string): number {
    if (s.length === 0) {
        return 0;
    }
    let p: boolean = true;
    let index: number = -1;
    let n: string = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== " ") {
            index = i;
            break;
        }
    }

    if (index === -1) {
        return 0;
    }

    if (s[index] === "-") {
        p = false;
    } else if (s[index] === "+") {
    } else if (s[index].charCodeAt(0) >= 48 && s[index].charCodeAt(0) <= 57) {
        n += s[index];
    } else {
        return 0;
    }

    index++;

    if (
        s[index] &&
        s[index].charCodeAt(0) >= 48 &&
        s[index].charCodeAt(0) <= 57
    ) {
        n += s[index];
    } else if (
        s[index - 1] &&
        s[index - 1].charCodeAt(0) >= 48 &&
        s[index - 1].charCodeAt(0) <= 57
    ) {
        return p ? parseInt(n) : parseInt(n) * -1;
    } else {
        return 0;
    }
    index++;
    while (s[index]) {
        if (s[index].charCodeAt(0) >= 48 && s[index].charCodeAt(0) <= 57) {
            n += s[index];
        } else {
            break;
        }
        index++;
    }
    if (p) {
        if (parseInt(n) > Math.pow(2, 31) - 1) {
            return Math.pow(2, 31) - 1;
        }
    } else {
        if (parseInt(n) > Math.pow(2, 31)) {
            return Math.pow(2, 31) * -1;
        }
    }
    return p ? parseInt(n) : parseInt(n) * -1;
}

const x: string[] = [
    " ",
    "0",
    "  d",
    " d",
    "d",
    "-1",
    " +980 ",
    " -d8 ",
    "  -10XE",
    "913",
    "  -",
    "  -42",
    "42",
    (Math.pow(2, 31) + 10).toString(),
    ((Math.pow(2, 31) + 10) * -1).toString(),
    "1",
];

for (let i = 0; i < x.length; i++) {
    console.log("STRING:", x[i]);
    console.log(myAtoi(x[i]));
    console.log("_________");
}

console.log(0, "0".charCodeAt(0));
console.log(9, "9".charCodeAt(0));
