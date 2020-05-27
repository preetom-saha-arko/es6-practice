class student
{
    constructor(id, name, univ = "BUET")
    {
        this.id = id;
        this.name = name;
        this.university = univ;
        this.country = "Bangladesh"
    }
}

let s1 = new student("1305001", "arko")
console.log(s1);

s1 = new student("002", "omuk", "ULAB")
console.log(s1);

s1.district = "Dhaka"; // no problem, it adds a new property
console.log(s1);