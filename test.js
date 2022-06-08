

class Students {
    constructor(name, grade, gpa, courses=[], age) {
        this.__name = name;
        this.__grade = grade;
        this.__gpa = gpa;
        this.__courses = courses;
        this.__age = age;
    }
    setNames(studentName) {
        if (studentName === "") {
            this.__name = studentName;
        } else {
            console.log("Name is required")
        }
    }
    getNames() {
        return this.__name
    }
    setGrades(studentGrade) {
        if (studentGrade > 100) {
            this.__grade = studentGrade
        } else {
            console.log("You failed miserably");
        }
    }
        getGrades(){
            return this.__grade
    }
    setGPA(studentGPA) {
        if (studentGPA >2.0) {
            this.__gpa=studentGPA
        } else {
            console.log("Try harder")
        }
    }
    getGPA() {
        return this.__gpa
    }
    setCourses(studentCourses) {
        if (studentCourses.length>0) {
            this.__courses=studentCourses
        } else {
            console.log("Are you serious?")
        }
    }
    getCourses() {
        return this.__courses
    }
    setAge(studentAge) {
        if (studentAge>18) {
            this.__age=studentAge
        } else {
            alert("You should've graduated last year")
        }
    }
    getAge() {
        return this.__age
    }
     sayHello() {
        console.log(`I'm a student called ${this.__name}, I'm ${this.__age}, in ${this.__grade}, currently studying ${this.__courses}, with a gpa of ${this.__gpa}`);
    }
    }





const studentA = new Students("Calvin", 12, 4.0, ["maths", "biology", "english", "physics"], 25)
console.log(studentA)

const studentB = new Students("Kwesi", 9, 3.0, ["Agriculture", "Biology", "english", "physics"], 20)
console.log(studentB)

const studentC = new Students("Sabina", 10, 2.0, ["Agriculture", "Biology", "Geography", "physics"], 22)
console.log(studentC)

const studentD = new Students("Edem", 11, 1.8, ["Agriculture", "Biology", "Chemistry", "Spanish"], 23)
console.log(studentD)