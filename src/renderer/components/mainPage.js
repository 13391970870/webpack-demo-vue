import $ from 'jquery'

function test() {
  /*let basket = {
    count: 1,
    onSale: 0.5
  }
  $('#result').append(`
  There are <b>${basket.count}</b> items
   in your basket, <em>${basket.onSale}</em>
  are on sale!
`);
  let name = 'Bob',
    time = 'today';
  $('#result').append(`Hello ${name}, how are you ${time}?`);
  $('#result').append(`\`Yo\` World`);
  $('#result').append(`
  <ul>
    <li> first </li>
    <li> seconed </li>
  </ul>
    `)
  $('#result').html(`
<ul>
  <li>first</li>
  <li>second</li>
</ul>
`.trim());*/


}


/*function authorize(user, action) {
  if (!user.hasPrivilege(action)) {
    throw new Error(
      `User ${user.name} is not authorized to do ${action}.`)
  }
}

authorize({
  name: 'zsm',
  hasPrivilege: (function() {

  })
}, 'gogo')
*/

/*function showNames(name) {
  console.log(name); //张三
  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]); //张三、李四、王五
  }
}
showNames('张三', '李四', '王五');*/

/*function funA() {
  var i = 1;

  function funB() { //闭包函数funB
    i++;
    console.log(i)
  }
  return funB;
}
var allShowA = funA(); //全局变量引用：累加输出1,2,3,4等

function partShowA() {
  var showa = funA(); //局部变量引用：只输出1
  showa();
}

partShowA();
*/
/*function funA(arg1, arg2) {
  var i = 0;

  function funB(step) {
    i = i + step;
    alert(i)
  }
  return funB;
}
var allShowA = funA(2, 3); //调用的是funA arg1=2，arg2=3
allShowA(1); //调用的是funB step=1,输出 1
allShowA(3); //调用的是funB setp=3,输出 4*/


/*function funA() {
  var i = 0;
  function funB() {
    i++;
    console.log(i)
  }
  allShowC = function (i) {// allShowC引用匿名函数,与funB共享变量i
    i++;
    console.log(i)
  }
  return funB;
}
var allShowA = funA();
var allShowB = funA();//allShowB引用了funA，allShowC在内部重新进行了绑定，与allShowB共享变量
allShowA(1);
allShowB(2);*/

/*
let x = 1;
let y = 2;

console.log(`${x} + ${y} = ${x + y}`)

function fn(){
  return 'Hello world';
}

console.log(`foo ${fn()} bar`)*/
/*const data = [
  {first: '<Jane>',last: 'Bond'},
  {first: '<Lars>', last: '<Croft>'}
];


const tmpl = addrs => `
  <table>
    ${addrs.map(addr => `
      <tr><td>${addr.first}</td></tr>
      <tr><td>${addr.first}</td></tr>
      `.trim()).join('')}
  </table>

`.trim();
let html = tmpl(data);
console.log(html);*/

/*function compile(template){
  const evalExpr = /<%=(.+?)%>/g;
  const expr = /<%([\s\S]+?)%>/g;

  template = template
    .replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`')
    .replace(expr, '`); \n $1 \n  echo(`');

  template = 'echo(`' + template + '`);';

  let script =
  `(function parse(data){
    let output = "";

    function echo(html){
      output += html;
    }

    ${ template }

    return output;
  })`;

  return script;
}

let template = `
<ul>
  <% for(let i=0; i < data.supplies.length; i++) { %>
    <li><%= data.supplies[i] %></li>
  <% } %>
</ul>
`;



$(function() {
  let parse = eval(compile(template));
document.getElementById('result').innerHTML = parse({ supplies: [ "broom", "mop", "cleaner" ] });
})*/
export default test;