function student()
{ 
    let count = 0;
    function num()
    {
        count = 5;
        
        function num1(){
            count = 4;
            console.log("iner in", count);
        }
        console.log("in out", count);
        num1();
    }
    console.log("out",count);
    num();
}
student();

