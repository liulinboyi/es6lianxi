const scanf=require('scanf');
// 1、函数使用
// 一个具体功能封装
// console.log('123');

// 2、计算根号2
// let a=MAth.sqrt(2);
// console.log(a);

// 3、自定义函数例如求和
// 定义add函数
// function add(x,y) {
//     // 在此可直接使用x,y
//     return x+y;
// }
// // 调用add函数
// let b=add(1,2);
// console.log(b);

// 举例：理解函数执行顺序
// function xxx() {
//     console.log(1);
//     console.log(2);
// }

// 案例1
// console.log(3);
// xxx();
// console.log(4);

// 案例2：运行次序已知,如下，会执行两次xxx()函数
// xxx();
// xxx();

// 案例3：烧水函数，异步函数
// shaoshui1(1);
// shaoshui1(2);
// shaoshui1(3);
// 调用异步函数
// console.log('异步函数案例：烧水函数');
// const {plog}=require('tuomaxu-sdk');
// plog(1);
// plog(2);
// plog(3);

// 为了解决异步函数执行结果不定问题，引入async-await 修饰符，把异步变为同步函数,顺序打印 plog
async function pp() {
    await plog(1);
    await plog(2);
    await plog(3);
}
// pp();

// 使用plog 打印1，输出之后，在使用console.log()输出’完成‘
async function pp2(){
    await plog(1);
    console.log('完成');
}
// pp2();

// 案例，以此打印1231完成
async function pp3(){
    await pp();
    await pp2();
}
pp3();