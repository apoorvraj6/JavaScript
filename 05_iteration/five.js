 const coding =["js","ruby","java","python","c++"];

//  coding.forEach( function (item) {
//     console.log(item);
//  })

//  coding.forEach( (val) => {
// console.log(val);
//  })

// function printme(item){
// console.log(item);
// }

// coding.forEach(printme);

// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr)
// })

const mycoding = [
    {
        languageName:"javaScript",
        languageFileName:"js",
    },
    {
        languageName:"java",
        languageFileName:"java",
    },
    {
        languageName:"c++",
        languageFileName:"c++",
    },
    {
        languageName:"python",
        languageFileName:"py",
    }
]

mycoding.forEach( (item) => {
    console.log(item.languageName);
})

