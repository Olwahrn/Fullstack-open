const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course} />
      <Total data = {course}/>
      <Content props = {course}/>
      </div>
  )
}
export default App;


const Part = (props) => {
  return (
        <p>
        {props.name} {props.exc}
        </p>
        )
  }
const Header = ({course}) => {
  return <h1>{course.name}</h1>;
}
const Content = ({props}) => {
  return (
    <div>
        <Part name={props.parts[0].name} exc={props.parts[0].exercises}/>
        <Part name={props.parts[1].name} exc={props.parts[1].exercises}/>
        <Part name={props.parts[2].name} exc={props.parts[2].exercises}/>
    </div>
  
  );

}
const Total = ({data}) => {
  return (
    <p>
      Number of exercises {data.parts[0].exercises + data.parts[1].exercises + data.parts[2].exercises}
    </p>
  )
}
