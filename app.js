

/*--===--=-chapter1-=-=-=-=*/
function myFunction(){alert("thanks for visit our website");
alert('please enter valid pass');
alert('welcome to js land\nhappy coding!');
alert('happy coding');
}


/*=--==-chapter2-=--=-=*/
function biodata(){
var myName="kaleemullah "
var age=20;
var courseName=" certified web aplication development";
alert(myName)
alert(age)
alert(courseName)}

function pizza(){
var food="pizza";
alert(food+"\n"+"pizz"+"\n"+"piz"+"\n"+"pi"+"\n"+"p");

}



/*-=-=-=-=-=-chapter3-=-=-=-=-=-*/
function email(){
    var email=" kaleemku9991@gmail.com";
    alert("my email is"+email);

}

function kaleemcloths(){

var name = window. prompt("Enter your name: ");

var quantity= window. prompt("how many products want to order?: ");
var productName = window. prompt("Enter your productname: ");
alert(name+" ordered "+quantity+" "+productName+'\n from kaleem clothes')
}


/*-=-=-=-=-=-chapter5-=-=-=-=-=-*/
function table(){
    var number = window. prompt("Enter table number: ");
    var i;
    for( i=1; i<11; i++ ){
         
        var totalNumber=number*i;
        document.write(number+"*"+i+"="+totalNumber+"<br>") 
    }
}

function temperature(){
    var temp=window.prompt("enter temperature in celcius: ");
    var farheniet=(temp * 9/5) + 32;
    document.write(farheniet); 
}

function shopingcart(){
var priceofItem1=500;
var quantity1=window.prompt("how many item1 you want? ");
var priceofItem2=600;
var quantity2=window.prompt("how many item2 you want? ");
var shipingCharging=100;
var total=(priceofItem1*quantity1)+(priceofItem2*quantity2)+shipingCharging;
document.write("price of item1 is 500 <br> quantity of item1 is"+quantity1+
                "<br>price of item2 is 600 <br> quantity of item2 is"+quantity2+
                "<br> shiping charges 100 <br>");
 document.write("total charges "+total);               

}


/*-=-=-=-=-=-chapter6 to 9-=-=-=-=-=-*/
function greetings(){
    var name=prompt("enter your name: ");
    document.write("thanks for joining us " +name);
}

function table2(){
    var number = window. prompt("Enter table number: ");
    var i;
    if(number==null){
        for( i=1; i<11; i++ ){
         
            var totalNumber=5*i;
            document.write(5+"*"+i+"=009"+totalNumber+"<br>"); 
        }
    }
    else{

    
    for( i=1; i<11; i++ ){
         
        var totalNumber=number*i;
        document.write(number+"*"+i+"="+totalNumber+"<br>"); 
    }
}}

function marksheet(){
    var englishNumber=prompt("enter english number: ");
    var urduNumber=prompt("enter urdu number: ");
    var mathsNumber=prompt("enter maths number: ");
   var totalMarks1=100;
    var percentage1=(englishNumber/totalMarks1)*100;
    var percentage2=(urduNumber/totalMarks1)*100;
    var percentage3=(mathsNumber/totalMarks1)*100;
    var totalmarks=300;
    var totalObtained=parseInt(englishNumber)+parseInt(urduNumber)+parseInt(mathsNumber);
    var totalPercentage=(((percentage3+percentage2+percentage1)/300)*100);
    document.getElementById("myLink1").innerHTML=englishNumber;
    document.getElementById("myLink2").innerHTML=urduNumber;
    document.getElementById("myLink3").innerHTML=mathsNumber;
    document.getElementById("myLink4").innerHTML=percentage1;
    document.getElementById("myLink5").innerHTML=percentage2;
    document.getElementById("myLink6").innerHTML=percentage3;
    document.getElementById("myLink7").innerHTML=totalmarks;
    document.getElementById("myLink8").innerHTML=totalObtained;
    document.getElementById("myLink9").innerHTML=totalPercentage;

}

/*-=-=-=-=-=-chapter9 to 11-=-=-=-=-=-*/

function city(){
   
    var cityName=prompt("enter city name: ");
    if(cityName=="karachi"){
        alert("welcome to city of lights");
    }
    if(cityName=="islamabad"){
        alert("welcome to city of beauty")
    }
    if(cityName=="lahore"){
        alert("welcome to city of pedus")
    }
    if(cityName=="faisalabad"){
        alert("welcome to city of jugat")
    }
    if(cityName=="sialkot"){
        alert("welcome to city of sports")
    }
    if(cityName=="larkana"){
        alert("welcome to mini paris")
    }
    else{
        alert("please enter valid city or chek your apselling")
    }
}

function gender(){
    var gender1=prompt("enter your gender: ");
    if(gender1=='male'){
        alert("good morning sir!")
    }
    if(gender1=='female'){
        alert("good morning maam!")
    }
    else{
        alert("please enter valid gender or check your speeling")
    }
}
function signal(){
    var signal1=prompt("enter signal color ")
    if(signal1=='red'){
        alert("must stop!");

    }
    if(signal1=='yellow'){
        alert("ready to move!");

    }
    if(signal1=='green'){
        alert("signal open!");

    }
    else {
        alert("check your speelig");
    }
}

function fuel(){
    var fuelNumber=prompt("enter remaining fuel: ");
    if(fuelNumber<0.25){
        alert("please! refill your fuel tank")
    }
    else if(fuelNumber>0.25){
        alert("fuel is greter than 0.25")
    }
}

function check(){
 var a = 4; if (++a === 5){ alert("given condition for variable a is true"); } 
 
 
 
 
 var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); } 
 
 var c = 12; if (c++ === 13){ alert("condition 1 is true"); } if (c === 13){ alert("condition 2 is true"); } if (++c < 14){ alert("condition 3 is true"); } if(c === 14){ alert("condition 4 is true"); } 
 
 var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost){ alert("The cost equals"); } 
 
 if (true){ alert("True"); } if (false){ alert("False"); }
}

function marksheet2(){
    var obtainedNumber1=prompt("enter your 1st subject number: ")
    var obtainedNumber2=prompt("enter your 2nd subject number: ")
    var obtainedNumber3=prompt("enter your 3rd subject number: ")
    var totalnumber2=300;
    var totalObtained2=parseInt(obtainedNumber1)+parseInt(obtainedNumber2)+parseInt(obtainedNumber3);
    var percentageNew=(totalObtained2/totalnumber2)*100;
    document.write("MARKSHEET <br>total marks"+totalnumber2+"<br>total obtained"+totalObtained2+"<br>percentage"+percentageNew+"<br>");
    if(percentageNew<60){
        document.write("GRADE: c <br> REMARKS:very bad")
    }
    if(percentageNew>=60 && percentageNew<=69){
        document.write("GRADE: B <br> REMARKS:you need to improve")
    }
    if(percentageNew>=70 && percentageNew<=79){
        document.write("GRADE: A <br> REMARKS:good")
    }
    if(percentageNew>=79 && percentageNew<=100){
        document.write("GRADE: A+ <br> REMARKS:very good")
    }
}

function guess(){
    var guessNumber=6;
    var userNumber=prompt("enter your guess number: ");
    if (userNumber==guessNumber){
        alert("bingo! you won the game")
    }

   else if (userNumber==guessNumber+1){
        alert("close enough!")
    }
     else if (userNumber==guessNumber-1){
        alert("close enough!")
    }
    else{
        alert("better luck next time!")
    }
}

function divisible(){
    var number=prompt("enter number: ");
    if (number%3==0){
        alert("number is divisible by 3")
    }
    else if (number%3!=0){
        alert("number is not divisible by 3")
    }
}

function evenodd(){
    var number=prompt("enter number: ");
    if (number%2==0){
        alert("number is even")
    }
    else if (number%2!=0){
        alert("number is odd")
    }
}

function message(){
    var temperature1=prompt("enter number: ");
    if (temperature1>=40){
        alert("it is hot outside!")

    }
   else if (temperature1>=30){
        alert("weather is normal!")

    }
    else if (temperature1>=20){
        alert("weather is cold!")

    }
    else if (temperature1>=10){
        alert("OMG! weather is cold")

    }
    else if (temperature1<10){
        alert("OMG! weather is extra cold")

    }
}

function calculator(){
    var firstNumber=prompt("enter 1st number: ");
    var secondNumber=prompt("enter 2nd number: ");
    var operator=prompt("select operation +,-,*,/ ");
    if (operator=="+"){
        var total=parseInt(firstNumber)+parseInt(secondNumber);
        alert(total);
    }

   else if (operator=="-"){
        var total=parseInt(firstNumber)-parseInt(secondNumber);
        alert(total);
    }
    else if (operator=="*"){
        var total=parseInt(firstNumber)*parseInt(secondNumber);
        alert(total);
    }
    else if (operator=="/"){
        var total=parseInt(firstNumber)/parseInt(secondNumber);
        alert(total);
    }
}


/*-=-=-=-=-=-chapter12 to 12-=-=-=-=-=-*/
function upercase(){
    var character=prompt("enter a character: ");
     if (character>=65 && character<=90){
        alert("this is uperrcase number:"+character)
    }
    else if (character>=97 && character<=122){
        alert("this is lowercase number:"+character)
    }
    else if (character<=9 && character>=0){
        alert("this is wholenumber number:"+character)
    }
    else{
        alert("please enter valid character")
    }
}

function integer(){
    var firstInteger=prompt("enter first number:");
    var secondInteger=prompt("enter second number:");
    if (firstInteger>secondInteger){
        alert("first number is greater than second");
        
    }
    else if (firstInteger<secondInteger){
        alert("first number is less than second");
        
    }
    else{
        alert("numbers are equal")
    }

}

function length1(){
    var character=prompt("enter a character: ");
    var index=0;
    var check=false;
    if (character.charAt(index)=="a" || character.charAt(index)=="e" || character.charAt(index)=="i" || character.charAt(index)=="o" || character.charAt(index)=="u"){
        check=true;
        alert("this " +character+" is vowel "+check )
    }
    else{
        alert(check);
    }
}

function pass(){
    var corectPass="kaleem123";
    var password=prompt("enter your password: ");
    if (corectPass==password){
        alert("your password is corect!")
    }
    else if (corectPass!=password){
        alert("your password is not corect!")
    }
   
}

function cloackFormat(){
    var clockTime=prompt("enter the time: ");
    if (clockTime>="0000" && clockTime<"1200"){
        alert("good morning!")

    }
    else if (clockTime>="1200" && clockTime<"1700"){
        alert("good afternoon!")

    }
    else if (clockTime>="1700" && clockTime<"2100"){
        alert("good evening!")

    }
    else if (clockTime>="2100" && clockTime<"2400"){
        alert("good night!")

    }
}

/*-=-=-=-=-=-chapter no 14 yo 16 -=-=-=-=-=-*/
function array1(){

var qualification=["ssc","Hssc","bsc","Bs","Bcom","Ms","Mphil","phd"];
var i;
document.write("QUALIFICATION <br>");
for ( i=0; i<=7;i++){
    document.write(qualification[i]+"<br>");
}

}

function student(){
    var studentName=[];
    var studentNumber=[];
    var i;
    for ( i=0; i<3;i++){
        studentName[i]=prompt("enter student name: ")
    }
    i=0;
    for ( i=0; i<3;i++){
        studentNumber[i]=prompt("enter student number: ")
    }
    var totalmarks=500;
    var percentage=[];
    i=0;
    for ( i=0; i<3;i++){
        percentage[i]=(studentNumber[i]/totalmarks)*100;
    }
    document.write("score of "+studentName[0]+" is "+studentNumber[0]+" percentage is "+percentage[0]+"<br>"
                    +" score of "+studentName[1]+" is "+studentNumber[1]+" percentage "+percentage[1]+"<br>"
                    +" score of "+studentName[2]+" is "+studentNumber[2]+" percentage "+percentage[2]+"<br>")


    
}

function color(){
    var colors=["red","green","blue"];
    alert(colors);
    colors.unshift(prompt("enter a color which you want to add in beginig: "));
    alert(colors);
    colors.push(prompt("enter a color which you want to add in end: "));
    alert(colors);
    colors.shift()
    alert("remove first colour <br>"+colors);
    colors.pop("remove end colour")
    alert("remove end colour <br>"+colors);
    colors.splice(prompt("at which index? "), prompt("at which index? "), prompt(" which color? "), prompt("at which color? "));
}
function sort(){
    var students=[];
    var i;
    for ( i=0; i<3;i++){
        students[i]=prompt("enter number of student: " );
    }
    students.sort();
    alert(students);
}

function cities(){
    var cityName=["karachi","lahore","islamabad","quetta"];
    alert(cityName);
    var selected=cityName.slice(prompt("enter city number: "),prompt("enter another city number: "));
    alert(selected);
}

function dropdown(){
    var mobile=["samsung","nokia","motrola","apple","sony&haier"];
    document.write(mobile);
}

/*-=-=-=-=-=-chapter no 17 yo 20 -=-=-=-=-=-*/
function matrix(){
 var numbers=[];
 var i;
 
 for(i=0;i<9;i++){
    numbers[i]=prompt("enter number: ");
    if(i==2){
        document.write("<br>");

    }
    else if(i==5){
        document.write("<br>");
        
    }
    else if(i==8){
        document.write("<br>");
        
    }
 
} 
 document.write(numbers[0]+numbers[1]+numbers[2]+"<br>"+numbers[3]+numbers[4]+numbers[5]+"<br>"+numbers[6]+numbers[7]+numbers[8]);

}

function counting(){
    
    var i;
    for (i=0;i<=10;i++){
        document.write(i+"<br>");
    }
}

function table3(){
    var number = window. prompt("Enter table number: ");
    var i;
    if(number==null){
        for( i=1; i<11; i++ ){
         
            var totalNumber=5*i;
            document.write(5+"*"+i+"=009"+totalNumber+"<br>"); 
        }
    }
    else{

    
    for( i=1; i<11; i++ ){
         
        var totalNumber=number*i;
        document.write(number+"*"+i+"="+totalNumber+"<br>"); 
    }
}}

function bakery(){
    var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
    document.write(bakery);
    var item=prompt("enter what you want? ");
    if (item=="cake"){
        alert("cake is at index 0");

    }
    else if (item=="apple pie"){
        alert("apple pie is at index 1");

    }
    else if (item=="cookie"){
        alert("cookie is at index 2");

    }
    else if (item=="chips"){
        alert("chips is at index 3");

    }
    else if (item=="patties"){
        alert("patties is at index 4");

    }
    else{
        alert("sorry! we dont have these item")
    }
}

function large(){
    var numbers=[];
    var i;
    var test=prompt("how many number you want to enter?");
    
    for( i=0; i<parseInt(test); i++ ){
         
        numbers[i]=prompt("enter number:")
         
    }
    alert(numbers);
    numbers.sort(function(a, b){return a - b});
    var check=numbers[test-1]
    alert("largest number is "+check);
}

function small(){
    var numbers=[];
    var i;
    var test=prompt("how many number you want to enter?");
    
    for( i=0; i<parseInt(test); i++ ){
         
        numbers[i]=prompt("enter number:")
         
    }
    alert(numbers);
    numbers.sort(function(a, b){return a - b});
    var check=numbers[0]
    alert("smallest number is "+check);
}

function ranging(){
    var number=prompt("which number want to ranging from 1 to 100?")
    var i;
    for(i=1;i<101;i++){
        if(i%number==0){
        document.write(i+" ");}
    }
}

