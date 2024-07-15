const defaultText = document.querySelector("#normal");
const throttleText = document.querySelector("#throttle");

const defaultFunction = (() => {
    incrementCount(defaultText);
});

function throttle(callback: Function, delay: number): Function {
    let wait: boolean = false;
  
    return (...args: []) => {
      if (wait) {
        return;
      }
  
      callback(...args);
      wait = true;
      setTimeout(() => {
        wait = false;
      }, delay);
    };
};

const throttleFunction = throttle(() => incrementCount(throttleText), 1000);

function incrementCount(element: any) {
    element.textContent = (parseInt(element.innerText) || 0) + 1;
};

document.addEventListener("mousemove", () => {
    defaultFunction();
    throttleFunction();
});
