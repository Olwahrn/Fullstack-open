const App = () => {
  const course = 'Half Stack application development'
  const given = [
    {name: 'Fundamentals of React', exc: 10},
    {name: 'Using props to pass data', exc: 7},
    {name: 'State of a component', exc: 14}
  ]
  return (
    <div>
      <Header course={course} />
      <Content/>
      <Total/>
    </div>
  );
};


const Part = (num) => {
  return (
        <p>
        {App.given[num].name}{App.given[num]} 
        </p>
        )
    }
const Header = ({course}) => {
  return <h1>{course}</h1>;
};
const Content = () => {
  return (
    <div>
        <Part num ={0}/>
        <Part num ={1}/>
        <Part num ={2}/>
    </div>
  
  );

};
const Total = () => {
  return (
    <p>Number of exercises{App.given[0].exc + App.given[1].exc + App.given[2].exc}</p>
  );
};
export default App;
