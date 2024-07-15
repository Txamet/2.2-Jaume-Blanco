export function throttle(callback: Function, delay: number): Function {
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