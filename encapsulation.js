// this is Encapsulation

class DevSquad {
    #name
    constructor(name, bairthDay, monthlySalary, noOfMonth){
        this.#name = name;
        this.bairthDay = bairthDay;
        this.monthlySalary = monthlySalary;
        this.noOfMonth = noOfMonth;
    }


    calculate_age(){
        const diff_ms = Date.now() - new Date(this.bairthDay).getTime();
        const age_dt = new Date(diff_ms);


        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }


    getSalary(){
        return (this.monthlySalary * this.noOfMonth).toLocaleString();
    }


    allDetails(){
        return `Name is ${this.#name}, ${this.calculate_age()} years old. Early Salary ${this.getSalary()}`
    }
}


const omorBhai = new DevSquad("Mr. Omor", "1990-09-01", 30000, 12 )
const ronyBhai = new DevSquad("Mr. Rony", "1999-09-01", 20000, 12 )


console.log(omorBhai.allDetails())
console.log(ronyBhai.allDetails())
