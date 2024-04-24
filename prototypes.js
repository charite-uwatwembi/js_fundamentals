function person(name, age) {
    this.name = name;
    this.age = age;
    person.prototype.greet = function () {
        console.log("Hi, my name is " + this.name + " and I am " + this.age + " years old.");
    };
    }
    
    var p2 = new person("John", 24);
console.log(p2)
    p2.greet();