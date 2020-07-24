const test = () => {
  openChild();

}

function openChild() {
  window.open('#/childPage')
  console.log(Symbol.for('fff'))
}


export {
  test
}