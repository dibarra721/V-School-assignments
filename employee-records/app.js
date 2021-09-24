function ThisInfo( name, jobtitle, salary, satus){

this.name = name;
this.jobtitle = jobtitle;
this.salary = salary;
this. satus= satus;
this.ThisInfo = function()
{
    console.log(this.name, this.jobtitle, this.salary,this.satus)
}
}

function fizz() {


    for (let i= 0; i <= 100; i++){
        if (i %15 ===0){
            console.log('Fizzbuzz')
        }
        else if ( i %3 ===0 ){
            console.log('buzz')
        }
        else
    }
}