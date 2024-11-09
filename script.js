//complete this code
class Person {
	const person = new Person("John", 25);
	console.log(person.name);
	person.age = 30;
    console.log(person.age);
}

class Student extends Person {
	const student = new Student("Alice", 22);
	student.study();
}

class Teacher extends Person {
	const teacher = new Teacher("Bob", 40);
teacher.teach();
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
