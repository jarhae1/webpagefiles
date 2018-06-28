const findPi = (x) => {
  let pi = Number(Math.PI);
  pi = pi.toFixed(x);
  return (x > 0 && x < 40) ? pi : "Type a number greater than 0 and less than 40";
};

const findingFactor = (x) => {
  let factorArray = []
  for(let i=1; i<=x; i++){
    let factor = x/i;
    if(Math.floor(factor) === factor){
    factorArray.push(factor);
  }
  }
  return factorArray;
}

function primeFactorList(n) {
	if (n < 1)
		throw "Argument error";
	var result = [];
	while (n != 1) {
		var factor = smallestFactor(n);
		result.push(factor);
		n = n / factor;
	}
	return result;
}

function smallestFactor(n) {
	if (n < 2)
		throw "Argument error";
	if (n % 2 == 0)
		return 2;
	var end = Math.floor(Math.sqrt(n));
	for (var i = 3; i <= end; i += 2) {
		if (n % i == 0)
			return i;
  }
//	}
	return n;
}



console.log(primeFactorList(625));


const findE = (x) => {
  let e = Number(Math.exp(1));
  e = e.toFixed(x);
  return (x > 0 && x < 40) ? e : "Type a number greater than 0 and less than 40";
};

const findFib = (x) => {
  let fib1 = 0;
  let fib2 = 1;
  let fibans;
  let fibarray = [];
  for (let i = 0;i<=x;i++){
    if(i < 1){
      fibarray.push(fib1);
    }else if(i === 1){
      fibarray.push(fib2);
    }else{
    fibans = fib1 + fib2;
    fib1 = fib2;
    fib2 = fibans;
    fibarray.push(fibans);
  }
  }
  fibarray = fibarray.join(', ');
  return fibarray;
}



const outPutAnswer = (answerClass,inputFieldClass,findFunc) => {
  return function(){
  let x = document.querySelector(`.${answerClass}`);
  let inputfield = document.querySelector(`.${inputFieldClass}`);
  let input = inputfield.value;
  let answer = findFunc(input);
  x.textContent = answer;
  inputfield.value = "";
  inputfield.focus();
}
}

const assignEventList = () => {
  let submit;
  submit = document.querySelector('.submitPI');
  submit.addEventListener('click',outPutAnswer('piAnswer','inputPI',findPi));
  submit = document.querySelector('.submitE');
  submit.addEventListener('click',outPutAnswer('eAnswer','inputE',findE));
  submit = document.querySelector('.submitFib');
  submit.addEventListener('click',outPutAnswer('fibAnswer','inputFib',findFib));
}

assignEventList();
// submitPI.addEventListener('click',outPutAnswer);


// var x = prompt("I will output Pi up to 40 places after the decimal. Please input the number of decimal places you are wanting too see");
// findPi(x);
