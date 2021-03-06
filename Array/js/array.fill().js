
$(function () {

    console.log("----------------------fill()-------------------------");
    var a = [0,1,2,3,4,5,6,7,8,9];
    var b = a.fill(100);
    console.log(a);//Array [ 100, 100, 100, 100, 100, 100, 100, 100, 100, 100 ]
    console.log(b);//Array [ 100, 100, 100, 100, 100, 100, 100, 100, 100, 100 ]
    //总结：
    //1：fill()方法会替换原数组
    //2：如果只传递一个参数，没有指定替换范围，默认会替换数组内所有的元素



    var a = [0,1,2,3,4,5,6,7,8,9];
    var b = a.fill(100,5);
    console.log(a);//Array [ 0, 1, 2, 3, 4, 100, 100, 100, 100, 100 ]
    console.log(b);//Array [ 0, 1, 2, 3, 4, 100, 100, 100, 100, 100 ]
    //总结：
    //1：传递了二个参数，指定了开始替换的索引位置，那么就从该位置开始替换，并且将该位置后面所有的元素都替换


    var a = [0,1,2,3,4,5,6,7,8,9];
    var b = a.fill(100,5,7);
    console.log(a);//Array [ 0, 1, 2, 3, 4, 100, 100, 7, 8, 9 ]
    console.log(b);//Array [ 0, 1, 2, 3, 4, 100, 100, 7, 8, 9 ]
    //总结：
    //1：传递了三个参数，指定了覆盖的元素，同时也指定了被覆盖元素的所以起点位置从0开始，到被覆盖元素的终点位置（从1开始）
    //2：切记，如果终点的索引位置的值，小于，开始位置索引位置的值，就不起作用，也就是什么都不替换

    var a = [0,1,2,3,4,5,6,7,8,9];
    var b = a.fill(100,5,4);
    console.log(a);//Array [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
    console.log(b);//Array [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
    //总结：
    //1：如上效果，终点的索引位置从1开始的值，小于起点位置从0开始的值，就会不起作用



});
