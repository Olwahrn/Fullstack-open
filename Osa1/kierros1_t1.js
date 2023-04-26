const App = () => {
  const course = 'Half Stack application development'
  const data = [
    {name: 'Fundamentals of React', exc: 10},
    {name: 'Using props to pass data', exc: 7},
    {name: 'State of a component', exc: 14}
  ]
  return (
    <div>
      <Header course={course} />
      <Total data = {data}/>
      <Content props = {data}/>
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
  return <h1>{course}</h1>;
}
const Content = ({props}) => {
  return (
    <div>
        <Part name={props[0].name} exc={props[0].exc}/>
        <Part name={props[1].name} exc={props[1].exc}/>
        <Part name={props[2].name} exc={props[2].exc}/>
    </div>
  
  );

}
const Total = ({data}) => {
  return (
    <p>
      Number of exercises {data[0].exc + data[1].exc + data[2].exc}
    </p>
  )
}
