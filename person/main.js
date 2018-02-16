var moment = window.moment;
class Person {
    constructor(name, surname, dateOfBirth, gender = "man") {;
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
    }
    sayHello() {
        console.log(this.name + " " + this.surname);
    }
    getAge() {
        let currentAge = this.dateOfBirth;
        let dateOfBirth = window.moment(this.dateOfBirth);
        let currentDate = window.moment(new Date());
        let differenceInYears = currentDate.diff(dateOfBirth, "years");
        return differenceInYears;
    }

}
let person = new Person("David", "Karpowicz", new Date('03-07-1990'))

person.sayHello()
console.log(person.getAge());