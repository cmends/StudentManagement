// calculateGpa(newGpa) {
//     this.#gpa = newGpa;
//   }



class Students {
    __name;
    __grade;
    __gpa;
    __courses;
    __age;

    constructor(name, grade, gpa, courses=[], age) {
        this.__name = name;
        this.__grade = grade;
        this.__gpa = gpa;
        this.__courses = courses;
        this.__age = age;
    }
    setNames(studentName) {
        if (studentName === "") {
           console.log("Name is required")
        } else {
             this.__name = studentName;
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
        if (studentCourses==="" || studentCourses<2) {
           console.log("Are you serious?")
        } else {
             this.__courses=studentCourses
        }
    }
    getCourses() {
        return this.__courses
    }
    printCourses() {
        console.log(`These are the ${this.__courses} I am taking.`)
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






class HighSchoolers extends Students{
    constructor(name, grade, gpa,__courses=[], age) {
        super(name,grade,gpa,__courses=[],age)
    }
}


let studentList = [];

const student1 = new HighSchoolers("Bob", 12, 4.0, ["maths", "biology", "english", "physics"], 25);
console.log(student1)
const student2 = new HighSchoolers("Sam", 15, 3.2, ["maths", "biology", "english", "Agriculture"], 23);


function createStudent(name, grade, gpa, courses, age) {
    let newStudent = new Student(name, grade, gpa, courses, age)
    console.log = (newStudent)
    return newStudent
}

function enrollStudent(Student) {
    studentList.push(Student)
}
function filterStudentsByName(studentName) {

    return studentName == "Sam";
}
function filterStudentsByGrade(studentGrade) {
    return studentGrade == 11;
}
function filterStudentsByAge(minAge,) {
    return minAge == 18;
}
function filterStudentsByAge(maxAge,) {
    return maxAge == 25;
}   




const student3 = new HighSchoolers();
const student4 = new HighSchoolers();
const student5  =["Bob","Sam","Calvin","Kwesi"]

