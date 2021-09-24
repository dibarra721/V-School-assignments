let employees = []

function EmployeeInfo(name, jobTitle, salary, status){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = status
    this.printEmployeeForm = function (){
        console.log(this.name, this.jobTitle, this.salary, this.status)
        return {
            name: this.name,
            jobTitle: this.jobTitle,
            salary: this.salary,
            status: this.status,
        }
    }
}

let newPerson1 = new EmployeeInfo ('John', 'DJ', '5k', 'Full-Time')
let newPerson2 = new EmployeeInfo ('Sarah', 'teacher', '10k', 'Full-Time')
let newPerson3 = new EmployeeInfo ('Zach', 'Chef', '25k', 'Full-Time')

newPerson1.status = "Part Time"

employees.push(newPerson1.printEmployeeForm());
employees.push(newPerson2.printEmployeeForm());
employees.push(newPerson3.printEmployeeForm());

console.log(employees)









