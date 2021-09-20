
function EmployeeInfo(name, jobtitle, salary, satus) {
    // use the "this" keyword to reference each object 
    // that is created from this constructor
    this.name = name;
    this.jobtitle = jobtitle;
    this.salary = salary;
    this.satus = satus;
    this.EmployeeInfo = function () {
        console.log(this.name, this.jobtitle, this.salary, this.satus);
    }

}
var employessInfo = [];

let employee1 = new EmployeeInfo('John', 'DJ', '5k', 'Full-Time');
this.satus = 'Part-Time';
employessInfo.push(employee1);

let employee2 = new EmployeeInfo('Sarah', 'teacher', '10k', 'Full-Time');
employessInfo.push(employee2);

let employee3 = new EmployeeInfo('Zach', 'Chef', '25k', 'Full-Time');
employessInfo.push(employee3);


console.log(employessInfo);



employee1.EmployeeInfo();
employee2.EmployeeInfo();
employee3.EmployeeInfo();



