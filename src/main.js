let html = document.querySelector("#html");
let string = `/*你好，我是Jeff
*接下来我演示一下我的前端功底
*首先我要准备一个div
*/
#div1{
    border:1px solid red;
    width: 200px;
    height: 200px;
}
/* 接下来我把 div 变成一个八卦图
 * 注意看好了
 * 首先，把 div 变成一个圆
 **/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/* 八卦是阴阳形成的
 * 一黑一白
 **/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个神秘的小球 */
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
`
let string2 = '';
// string = string.replace(/\n/g,'<br>')
console.log(string.length);
let n = 0;

// demo.innerHTML = string.substring(0,n);

// 老手不用 setTimeout
// setInterval(()=>{
//     n = n + 1;
//     demo.innerHTML = n;
// },1000);

// 老手用 setTimeout 递归
let step = () => {
    // console.log('1秒后把n加1并显示');
    setTimeout(() => {
        // console.log(n);
        // n = n + 1;
        // string2 += string[n] === '\n' ? '<br>' : string[n];
        if(string[n]==='\n'){
            // 如果是回车就是加上 <br>
            string2 += '<br>'
        } else if (string[n]===' ') {
            string2 += '&nbsp;'
        } else { // 如果不是回车就照搬
            string2 += string[n]
        } 
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0,99999)
        html.scrollTo(0,99999)
        if(n < string.length - 1){
            // 不是最后一个
            n += 1;
            step();
        }   
    }, 50);
};

step(); // 1=>2

/* let style = document.querySelector('#style')
setTimeout(()=>{
    style.innerHTML = `
    body{
        color: red;
    }
    `
},3000) */
