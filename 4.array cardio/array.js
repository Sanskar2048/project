const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

// filter the inventor which were born in 1500's
const inventor_1500 = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
console.table(inventor_1500);


// combine the first and the last name
const full_name = inventors.map(inventor => inventor.first + inventor.last);
console.table(full_name);

//sort by birth order by youngest 
const timelap = inventors.sort((inventor1, inventor2) => inventor1.year > inventor2.year ? 1 : -1);
console.table(timelap);

//how many year all the inventer live
const time_range = inventors.reduce((total, inventor) => total + inventor.passed - inventor.year, 0);
console.table("total time of inventor living in earth = ", time_range);


// sort by how many year the live incressing order
const max_life = inventors.sort((inventor1, inventor2) => {
      ( (inventor1.passed - inventor1.year) > (inventor2.passed - inventor2.year) ? 1 : -1 ) ;
});
console.table(max_life);

// sort people array by last name
const people_sort = people.sort((a, b) => {
     return  a.split(", ")[1] > b.split(", ")[1] ? 1 : -1;
})

console.table(people_sort);


// sum up the instances present in the array
const frequency_object= data.reduce((list, item) =>{
    if(!list[item]){
        list[item]=0;
    }
    list[item]++;
    return list ;
},{});

console.table(frequency_object);



