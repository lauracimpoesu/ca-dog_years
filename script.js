//^ Dog Years Conversion

//& my human age
let myAge = 29
console.log(myAge)

//& setting the early years to 2
let earlyYears = 2
console.log(earlyYears)
earlyYears *= 10.5
console.log(earlyYears)

//& substracting 2 from my age and placing it into a new variable that will show the later years
let laterYears = (myAge -= 2)
console.log(laterYears)
laterYears *= 4
console.log(earlyYears, laterYears)

let myAgeInDogYears = earlyYears + laterYears
console.log(myAgeInDogYears)

//& writing my name in lower case
let myName = "Laura".toLowerCase()
console.log(myName)

console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
)
