let convertedNum = document.getElementById('convertedNum');
let unConvNum = document.getElementById('convNum');

let converterr = function (num) {
    return (num * 9/5) + 32;
  }

  function conver() {
    let newNum = unConvNum.value;
    let final = converterr(newNum);
    convertedNum.innerText = final;
  }
    

