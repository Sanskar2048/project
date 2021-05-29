const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];


//some function is used to check is there any element in an array that satisfy the condition;
const isAdult = people.some(person => {
    current_time = (new Date).getFullYear();
    return current_time - person.year >= 19;
});

console.log({ isAdult });


//every all the element in the array should satisfy the condition 

const isEveryAdult = people.every(person => {
    current_time = (new Date).getFullYear();
    return current_time - person.year >= 11;
});

console.log({ isEveryAdult });

// find will find the element in the array or you can give some attribute of the element to check;

const commentName= comments.find( comment => comment.id==823423);
console.table(commentName)

// to find the index of the given element in the array

const index= comments.findIndex( comment => comment.id==542328)
console.log(index);


// how to delete the comment from an array 
console.table(comments);
comments.splice(index,1);
console.table(comments);