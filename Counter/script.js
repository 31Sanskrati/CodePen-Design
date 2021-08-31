//setting initial value to zero
let count = 0;

//selected values and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");


btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    //saving which button user clicks
    const styles = e.currentTarget.classList;
    //changing value of const acc. to click
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    //changing color of the value
    if (count > 0) {
      value.style.color = "#F8E981";
    }
    if (count < 0) {
      value.style.color = "tomato";
    }
    if (count === 0) {
      value.style.color = "white";
    }
    value.textContent = count;
  });
});
