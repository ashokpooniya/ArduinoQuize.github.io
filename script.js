function check() {
    var c=0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var result=document.getElementById('result');
    var quiz=document.getElementById("quiz");
    if (q1=="Integrated Development Environment") {c++}
    if (q2=="Leonardo") {c++}
    if (q3=="1.2") {c++}
   quiz.style.display="none";

    if(c<=1) {
        result.textContent=`Your result is ${c}.It is average.`
    } else {
        result.textContent=`Your result is ${c}.It is good.`
    }
}