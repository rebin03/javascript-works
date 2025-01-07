var frameWorks=[

    {id:1,name:"django",langauge:"python",rating:5},
    {id:2,name:"fastapi",langauge:"python",rating:4},
    {id:3,name:".net",langauge:"c#",rating:5},
    {id:4,name:"spring",langauge:"java",rating:5},
    {id:5,name:"express",langauge:"javascript",rating:5},
    {id:6,name:"angular",langauge:"typescript",rating:5},

]


// 1. Total number of objects

// console.log(frameWorks.length)

// 2. Display all framework names

var frameWorksNames = frameWorks.map((f) => f.name);
// console.log(frameWorksNames);

// 3. Print all framework languages

var allLanguages = frameWorks.map(f => f.langauge);
// console.log(allLanguages);

// 4. Display python frameworks

// frameWorks.filter(f => f.langauge == "python").forEach(f => console.log(f.name))

// 5. Rating > 4

// frameWorks.filter(f => f.rating > 4).forEach(f => console.log(f.name));

// 6. Top rated frameworks

var topRatedFrameWork = frameWorks.reduce((f1, f2) => f1.rating > f2.rating ? f1 : f2)
var topRatedFrameWorks = frameWorks.filter(f => f.rating == topRatedFrameWork.rating)

// console.log(topRatedFrameWorks)

// 7. Sort with respect to rating

frameWorks.sort((f1, f2) => f2.rating - f1.rating)
// console.log(frameWorks)

// 8. Detail of django object

// find() - use to take a specific element from array

var djangoDetails = frameWorks.find(f => f.name == "django")
console.log(djangoDetails)