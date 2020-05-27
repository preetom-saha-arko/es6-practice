class Parent
{
    constructor()
    {
        this.fatherName = "saha"
    }

    getName()
    {
        return this.fatherName;
    }
}

class Child extends Parent
{
    constructor(name)
    {
        super(); // u have to call it regardless of whether there is a constructor in parent class or not 
        this.name = name;
    }

    getFullName()
    {
        return `${this.name} ${this.getName()}`
    }
}

let parent = new Parent();
parent.name = "saha";  // no effect on child class
let child = new Child("preetom");
console.log(child);
console.log(child.getFullName());