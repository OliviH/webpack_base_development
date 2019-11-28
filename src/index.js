import css from "./scss/style.scss";
console.log(`Hello world at ${new Date()}`)
setTimeout(() => {
  console.log(
    "Testing!!!"
  );
}, 500);
setTimeout(()=>{
  document.body.insertAdjacentHTML(`beforeend`,`<h3>Date now: ${new Date()}</h3>`)
},2000)