
const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

  buttons.forEach((item,i) => {
  item.addEventListener("click", () => {

    if (item.id === "="){
      display.value = eval(display.value);
    } else if (item.id === "ac"){
      display.value = "";
    } else if (item.id === "de") {
      display.value = display.value.slice(0,-1);
    }else{
      display.value += item.id;
    }
});
});
