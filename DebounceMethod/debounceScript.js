// Debouncing in JS

const getData=()=>{
    //calls an API and gets data
    console.log("Debounce")
}

const debounce = function (fn, delay){
  let timer;
  return function(){
    let context = this;
    args = arguments;
    clearTimeout(timer);
    timer = setTimeout(()=>{
       getData.apply(context, args)
    }, delay);
  }
}

const search = debounce(getData, 300);