interface StudentProps {
    name: string;
    age: number;
    course: string
}

function Student({ name, age, course} StudentProps) {
    return (
        <div>
        <h2>Name: {name}</h2>
        <p>Course: {course}</p>
        </div>
    )
}