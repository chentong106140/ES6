
$(function () {
    console.log("----------------------filter()-------------------------");
    //用于演示替换回调函数内的this值
    var obj = [1,2,3,4,5];

    var a = [11,22,33,44,55,66,77];
    var b = a.filter(function(num,index,array){
        console.log(num,index,array,this);
        return num > 10;
    },obj);
    //输出：
    //11   0   Array [ 11, 22, 33, 44, 55, 66, 77 ]    Array [ 1, 2, 3, 4, 5 ]
    //22   1   Array [ 11, 22, 33, 44, 55, 66, 77 ]    Array [ 1, 2, 3, 4, 5 ]
    //33   2   Array [ 11, 22, 33, 44, 55, 66, 77 ]    Array [ 1, 2, 3, 4, 5 ]
    //44   3   Array [ 11, 22, 33, 44, 55, 66, 77 ]    Array [ 1, 2, 3, 4, 5 ]
    //55   4   Array [ 11, 22, 33, 44, 55, 66, 77 ]    Array [ 1, 2, 3, 4, 5 ]
    //66   5   Array [ 11, 22, 33, 44, 55, 66, 77 ]    Array [ 1, 2, 3, 4, 5 ]
    //77   6   Array [ 11, 22, 33, 44, 55, 66, 77 ]    Array [ 1, 2, 3, 4, 5 ]
    console.log(b); //Array [ 11, 22, 33, 44, 55, 66, 77 ]
    //总结：
    //



    var c = a.filter(function(num,index,array){
        console.log(num,index,array,this);
        return num > 30;
    },obj);
    //输出：

    console.log(c);//Array [ 33, 44, 55, 66, 77 ]
    //总结：
});
