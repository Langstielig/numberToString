//добавить валидацию

document.querySelector('button').onclick = buttonClick;

function toBeautiful(str) {
    let up = str[0].toUpperCase();
    let result = up;
    let n;
    if (str[str.length - 2] == ',')
        n = str.length - 2;
    else
        n = str.length;
    let i = 1;
    while (i < n) {
        result += str[i];
        i++;
    }
    return result;
}

class Number {
    constructor(num) {
        this.thousand = (num - num%1000)/1000;
        console.log(this.thousand);
        this.hundred = (num - 1000*this.thousand - num%100)/100;
        console.log(this.hundred);
        this.dozen = (num - 1000*this.thousand - 100*this.hundred - num%10)/10;
        console.log(this.dozen);
        this.units = num - 1000*this.thousand - 100*this.hundred - 10*this.dozen;
        console.log(this.units);
    }

    toString() {
        let strThousand = " тысяч, ";
        let strHundred = " сотен, ";
        let strDozen = " десятков, ";
        let strUnits = " единиц";

        if(this.thousand == 1) {
            strThousand = " тысяча, ";
        }
        else if(this.thousand > 1 && this.thousand < 5) {
            strThousand = " тысячи, ";
        }
        else if (this.thousand == 0) {
            strThousand = "";
        }

        if(this.hundred == 1) {
            strHundred = " сотня, ";
        }
        else if(this.hundred > 1 && this.hundred < 5) {
            strHundred = " сотни, ";
        }
        else if (this.hundred == 0) {
            strHundred = "";
        }

        if(this.dozen == 1) {
            strDozen = " десяток, ";
        }
        else if(this.dozen > 1 && this.dozen < 5) {
            strDozen = " десятка, ";
        }
        else if (this.dozen == 0) {
            strDozen = "";
        }

        if(this.units == 1) {
            strUnits = " единица";
        }
        else if (this.units > 1 && this.units < 5) {
            strUnits = " единицы";
        }
        else if (this.units == 0) {
            strUnits = "";
        }

        let str = (this.thousand > 0 ? this.thousand.toString() : "") + strThousand + 
        (this.hundred > 0 ? this.hundred.toString() : "") + strHundred +
        (this.dozen > 0 ? this.dozen.toString() : "") + strDozen + 
        (this.units > 0 ? this.units.toString() : "") + strUnits;
        
        let result = toBeautiful(str);

        return result;
    }
}

function buttonClick() {
    document.querySelector('.string').innerHTML = "";
    let number = document.querySelector('.number').value;
    let error = document.getElementById('error')

    if(number/1000 >= 10) 
        error.innerHTML="Максимальное число 9999"
    else
    {
        error.innerHTML=""

        const num = new Number(number);

        let result = num.toString();

        document.querySelector('.string').innerHTML += result;
    }
}