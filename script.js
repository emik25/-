// // ТЗ
let std = 
    {
    name: 'Emil',
    surname: "Umerov",
    age: 22,
    status: false,
    Series: "AB", 
    pasportNumber: 23213214,
    pasportData: 2016,
    car: "Malibu",
    cayYear: 2021
}

let hobby =
    {
        hobby: "Football",
        favoriteClub: "Chelsea",
        favoriteGame: "CSGO and FIFA 23"
    }

// Соеденить два объекта в один 
let obj = Object.assign(std, hobby)
console.log(obj);

// // получить все ключи в один массив и все значения тоже в один отдельный массив
let keys = Object.keys(obj)
let values = Object.values(obj)
console.log(keys, values);

// // соеденить два массива в один
let massive = keys.concat(values)
console.log(massive);

// отфильтровать массив по типам данных элементов
let types = {
    str: [],
    num: [],
    bool: [],
    obj: [],
}

massive.filter(item => {
    if(typeof (item) === "string"){
        types.str.push(item)
    }else if(typeof (item) === "number"){
        types.num.push(item)
    }else if(typeof (item) === "boolean"){
        types.bool.push(item)
    }else if(typeof (item) === "object"){
        types.obj.push(item)
    }
})

console.log(types);