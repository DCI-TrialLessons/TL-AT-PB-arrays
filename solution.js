//1. Declare a variable named "euroCitiesArr" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.

const euroCitiesArr = ["Paris", "London", "Rome", "Prague", "Valletta"];
const secondCity = euroCitiesArr[1];
console.log(secondCity);

//2. Change the first item in the array to "Berlin".

euroCitiesArr[0] = "Berlin";
console.log(euroCitiesArr);

//3. Print the length of the array "euroCitiesArr".

console.log(euroCitiesArr.length);

//4. Remove the last item of the array "euroCitiesArr".

euroCitiesArr.pop();
console.log(euroCitiesArr);

//5. Use an array method to add "Budapest" to the euroCities array.

euroCitiesArr.push("Budapest");
console.log(euroCitiesArr);

//6. Bonus: Remove the second and third items from the euroCities array.

euroCitiesArr.splice(1, 2);
console.log(euroCitiesArr);

//7. Create another variable named asianCities and assign an array of at least 5 cities to the variable.

const asianCitiesArr = ["Hong Kong", "Taiwan", "Seoul", "Osaka", "Manila"];

//8. Use an array method to select items 2-4 from the array of asianCities and store this in another variable.  

const citiesArr = asianCitiesArr.slice(1, 4);
console.log(citiesArr);



