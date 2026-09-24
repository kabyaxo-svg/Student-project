function getResult(marks, passMarks = 40){
    if(marks>=80){
        return "A";
    } else if(marks>=60){
        return "B";
    } else if(marks>=passMarks){
        return "C";
    } else{
        return "F";
    }
}
console.log(getResult(72));