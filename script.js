let myName = "Melvyn";
console.log(myName.length > 10)
console.log(myName.length > 5)
console.log(myName.charAt(0) === "M")

if (myName.length > 10 || (myName.length >5 && myName.charAt(0) === "M")){
    console.log("0 > myAge <= 18");
}else {
    console.log("CONDITION EST FACILE");
}