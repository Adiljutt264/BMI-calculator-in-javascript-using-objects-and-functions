var john =
{
    fullName: 'john smith',
    mass: 90,
    height: 2,
    callBmi: function(){
        this.Bmi = this.mass / this.height^2;
    }
}
john.callBmi();
console.log(john.Bmi);
var mark =
{
    fullName: 'mark allen',
    mass: 90,
    height: 2,
    callBmi: function(){
        this.Bmi = this.mass / this.height^2;
    }
}
mark.callBmi();
console.log(mark.Bmi);
if (john.Bmi > mark.Bmi) {
    console.log(john.fullName + " has higher bmi which is " + john.Bmi + ' as compared to mark which is ' + mark.Bmi);
} else if(mark.Bmi > john.Bmi){
  console.log(mark.fullName + "  has higher Bmi which is " + mark.Bmi + ' as compared to john Bmi which is ' + john.Bmi);  
}
else
{
    console.log('Both have equal Bmi ' + john.Bmi);
}
