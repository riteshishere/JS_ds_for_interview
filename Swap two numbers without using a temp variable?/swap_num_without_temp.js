function swapNumb(a, b){
    console.log('before swap: ','a: ', a, 'b: ', b);
    b = b -a;
    a = a+ b;
    b = a-b;
    console.log('after swap: ','a: ', a, 'b: ', b);  
  }
/*
swapNumb(2,3);
after swap:  a:  3 b:  2
swapNumb(5,12);
after swap:  a:  12 b:  5
swapNumb(12,59);
after swap:  a:  59 b:  12
swapNumb(0,5);
after swap:  a:  5 b:  0
swapNumb(4,8);
after swap:  a:  8 b:  4
*/