let num = 5;

function print() {
    console.log(fact(num));
}

function fact(n) {
    if (n === 1) {
        return 1;
    }
    else {
        return n * fact(n - 1);
    }
}

print();