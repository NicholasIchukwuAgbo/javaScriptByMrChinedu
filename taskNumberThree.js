const counter = {
  count: 5,
  step: 10,

   function increment(){
    counter.count += counter.step;
  }
};



counter.increment();
console.log(counter.count);