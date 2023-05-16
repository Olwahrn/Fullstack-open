const App = () => {
  const Course = ({ name, parts }) => {
    const totalExc = parts.map(part => part.exercises)
    return (
      <div>
        <h1>{name}</h1>
        <p>
          {parts.map(parts => <li>{parts.name} {parts.exercises}</li>)}
        </p>
        <p><strong>total exercises {totalExc.reduce((a,b) => a + b, 0)} </strong></p>
      </div>
    );
  };

  const courses = [
    { 
      name: "Half Stack app development",
      id: 1,
      parts: [
        { 
          name: "Fundamentals of React", 
          id: 1, 
          exercises: 10 
        },
        { 
          name: "Using props to pass data", 
          id: 2, 
          exercises: 7 
        },
        { 
          name: "State of a component", 
          id: 3, 
          exercises: 14 
        },
        { 
          name: "redux", 
          id: 4, 
          exercises: 11
        }
      ]
      },
      {
        name: 'Node.js',
        id: 2,
        parts: [
          {
            name: 'Routing',
            exercises: 3,
            id: 1
          },
          {
            name: 'Middlewares',
            exercises: 7,
            id: 2
          }
        ]
      }
    ]

  const parts = courses.map(course => course.parts);
  const allParts = [].concat(...parts)
  const totalExercises = allParts.map(part => part.exercises)
  console.log(totalExercises)

  return (
    <div>
      {courses.map((course) => (
        <Course key={course.id} name={course.name} parts = {course.parts} />
      ))}
      <p><strong>total of {totalExercises.reduce((a, b) => a + b, 0)} exercises</strong></p>
    </div>
  );
};

export default App;
