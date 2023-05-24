//1. Create the function that takes an array with objects and returns the sum of people's budgets.
function getBudgets(arr) {
	let sum = arr.reduce((acc, curr) => acc + curr.budget, 0);
	return sum;
}

//2. Create a function that takes an array of items and checks if the last item matches the rest of the array concatenated together.
function matchLastItem(arr) {
	let a = arr.slice(0,arr.length-1);
	let j = a.join("");
	if(j === arr[arr.length-1]){
		return true;
	}
return false;
}

//3. Create a function that returns true if all parameters are truthy, and false otherwise.
function allTruthy(...args) {
	return args.every(Boolean);
}

//4. Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).
function removeDups(arr) {
	let uniq = [...new Set(arr)];
	return uniq;
}

//5. Write a function that takes a square matrix and computes its trace.
function trace(arr) {
	let sum = 0;
	for(let i = 0; i <arr.length; i++){
		sum +=arr[i][i];
	}
	return sum;
}

//6. Create a function that determines whether or not an array is a factor chain.
function factorChain(arr) {
	for(let i = 1; i < arr.length; i++){
		if(arr[i] % arr[i-1] !== 0){
			return false;	}
		}
	return true;
	}

//7. Create a function that takes in an array of miles run every Saturday and returns Johnny's total number of progress days.
function progressDays(runs) {
	let sum = 0;
	for(let i = 0; i < runs.length; i++){
		if(runs[i+1] > runs[i]){
			sum++;
		}
	}
	return sum;
}

//8. Create a function to find NaN in an array of numbers. The return value should be the index where NaN is found. If NaN is not found in the array, then return -1.
function findNaN(number) {
    for (let i = 0; i < number.length; i++) {
      if (isNaN(number[i])) {
        return i;
      }
    }
    return -1;
  }

//10. Given an array of numbers, write a function that returns an array that...
// Has all duplicate elements removed.
// Is sorted from least to greatest value.
function uniqueSort(arr) {
	let uniqueArr = arr.filter((value, index, self) => self.indexOf(value) === index);
	return uniqueArr.sort((a,b)=>a-b);
}

//11. Create a function that takes a number and returns an array with the digits of the number in reverse order.
function reverseArr(num) {
    let numString = num.toString(); // Convert number to string
    let reversedString = numString.split("").reverse().join(""); // Reverse the string
    let digits = Array.from(reversedString, Number); // Convert characters to numbers and store in an array
    return digits;
  }

//12. Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.
function hackerSpeak(str) {
	str = str.replace(/a/g, 4);
	str = str.replace(/e/g, 3);
	str = str.replace(/i/g, 1);
	str = str.replace(/o/g, 0);
	str = str.replace(/s/g, 5);
	return str;
}

//13. Create a function that takes an array of names and returns an array where only the first letter of each name is capitalized.
function capMe(names) {
    return names.map((name) => {
      let cap = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
      return cap;
    });
  }

//14. Create a function that takes an array of numbers and returns the sum of the two lowest positive numbers.
function sumTwoSmallestNums(arr) {
    let positiveNum = arr.filter(num => num > 0);
    let srt = positiveNum.sort((a, b) => a - b);
    return srt[0] + srt[1];
  }

//15. Given an array of women and an array of men, either:
// Return "sizes don't match" if the two arrays have different sizes.
// If the sizes match, return an array of pairs, with the first woman paired with the first man, second woman paired with the second man, etc.
function zipIt(women, men) {
    if (women.length !== men.length) {
      return "sizes don't match";
    }
    let pairs = [];
    for (let i = 0; i < women.length; i++) {
      pairs.push([women[i], men[i]]);
    }
    return pairs;
  }

//16. Return the total number of arrays inside a given array.
function numOfSubbarrays(arr) {
	let sum = 0;
	for(let i = 0; i < arr.length; i++){
	if(Array.isArray(arr[i])){
		sum++;
	}}
	return sum;
}

//17. Create a function that performs an even-odd transform to an array, n times. Each even-odd transformation:
// Adds two (+2) to each odd integer.
// Subtracts two (-2) from each even integer.
function warOfNumbers(arr) {
	let even = 0;
	let odd = 0;
	let result = 0;
	for(let i = 0; i < arr.length; i++){
		if(arr[i] % 2 === 0){
			even+=arr[i];
		}
		else if(arr[i] % 2 !== 0){
			odd+=arr[i];
		}
	}
	if(even > odd){
		result = even - odd;
	}
	else if(odd>even){
		result=odd - even;
	}
	return result;
}

//18. Write a function that takes an array and returns a new array with unique positive (more than 0) numbers.
function uniqueArr(arr) {
	let ar = [];
	for(let i = 0; i < arr.length; i++){
		if(arr[i]>0){
			ar.push(arr[i]);
		}
	}
	return Array.from(new Set(ar));
}

//19. Create a function that takes a number as its parameter and returns another function. The returned function must take an array of numbers as its parameter, and return an array of the numbers divided by the number that was passed into the first function.
function factory(divisor) {
    return function(arr) {
      return arr.map(num => num / divisor);
    };
  }

//20. Write a function that creates an object with each (key, value) pair being the (lower case, upper case) versions of a letter, respectively.
function mapping(letters) {
    let result = {};
    for (let i = 0; i < letters.length; i++) {
      let lcase = letters[i];
      let upcase = lcase.toUpperCase();
      result[lcase] = upcase;
    }
    return result;
  }

  