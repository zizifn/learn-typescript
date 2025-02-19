// 有名字的地方就可以标注
let x: number =1;

//1.

let y: number = 2;
let y1 = 1 as const;

//2.
const z = 3; // 字面类型

//3.
var a: number = 4;

//4. function
function foo(a: string): {result: number}{
    return { result: 5 };
}

class MyClass{
    constructor(a: string){

    }

    a: number = 1;
}
// import ..

// 隐式声明的

for(let i: number = 0; i < 10; i++){
    console.log(i);
}

try {

}catch(e: unknown){
}


// 表达式 as 

let a1 = 1 as number;
let a2 = 'as' as unknown as number;

const result =  foo('a') as any;