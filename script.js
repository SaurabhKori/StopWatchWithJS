var hr=0;
var min=0;
var sec=0;
var count=0;
var timer=false;
var st=0;

    function start(){
        timer=true;
        if(st==0){
        stopwatch();
        }
        st=1;
   }


function stop(){
    timer=false;
    st=0;

}
function reset(){
    hr=0;
    min=0;
    sec=0;
    count=0;
    timer=false;
    st=0;
    document.getElementById("hr").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("count").innerHTML="00";
}
function stopwatch(){
    if(timer==true){
        count=count+1;
        if(count==100){
            sec=sec+1;
            count=0;
        }
        if(sec==60){
            min=min+1;
            sec=0;
        }
        if(min==60){
            hr=hr+1;
            min=0;
        }
       
        var hrs=hr;
        var secs=sec;
        var mins=min;
        var counts=count;
        if(hr<=9){
            hrs="0"+hr;
        }
        if(min<=9){
            mins="0"+min;
        }
        if(sec<=9){
            secs="0"+sec;
        }
        if(count<=9){
            counts="0"+count;
        }
        document.getElementById("hr").innerHTML=hrs;
        document.getElementById("min").innerHTML=mins;
        document.getElementById("sec").innerHTML=secs;
        document.getElementById("count").innerHTML=counts
        setTimeout("stopwatch()",10);
    }
}
