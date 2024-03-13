const myObject = {                                 // objects get iterated wuth for in loops
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
   // console.log(`${key} shortcut is for ${myObject[key]}`);
}




const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(key);                            //in case of for in loops console.log(key) prints only the key(which in case of arrays will be index values) and
}                                                // not the value but in for of loops both key and its value gets printed together

for (const key in programming) {
 
        // console.log(programming[key]);            //this prints the value
        
    }


















// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);                                       //maps are not iterable here
// }