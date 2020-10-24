// Write your function here:
const howOld = (age, year) =>{

//the current year
  let theCurrentYear = 2020;

// if the year is in the future and 
  let yourFutureAge = age + (year - theCurrentYear);


  // const Difference = year - theCurrentYear;

  // const newAge = age + Difference;

  //if the year entered is in the past and before you were born
  const beforeYouWereBorn = (theCurrentYear - year) - age;

  const andBeforeBorn = theCurrentYear - age;


    //if the year entered is in the past but not before you were born
  const yearAndBeforeBorn = year - (andBeforeBorn);

  
//year entered is greater or equal to the current year
  if(year >= theCurrentYear)
  {
    return 'You will be '+ yourFutureAge +' in the year '+year;

    //if the year entered is in the past and before you were born
  }else if(year <= theCurrentYear && year <= andBeforeBorn){
    return 'The year '+ year +' was '+ beforeYouWereBorn + ' years before you were born';
    
    //if the year entered is in the past but not before you were born
  }else if(year <= theCurrentYear && year >= andBeforeBorn){
    return 'You were '+ yearAndBeforeBorn +' in the year ' + year; 
  }

}

console.log(howOld(20,2005));
console.log(howOld(20,20000));
console.log(howOld(20,2));



// Once your function is written, write function calls to test your code!
