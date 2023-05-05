import { useState } from 'react'

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const average = (good - bad) / (all || 1)
  const positive = (good / (all || 1)) * 100

  if (all === 0) {
    return <p>No feedback given</p>
  }

  return (
    <table>
      <tbody>
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <StatisticLine text="All" value={all} />
        <StatisticLine text="Average" value={average.toFixed(2)} />
        <StatisticLine text="Positive" value={positive.toFixed(2) + ' %'} />
      </tbody>
    </table>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allInfo, setInfo] = useState([])

  const handleGood = () => {
    setGood(good + 1)
    setInfo(allInfo.concat(`good ${good}`));
    updateStats()
  }
  const handleBad = () => {
    setBad(bad + 1)
    setInfo(allInfo.concat(`bad ${bad}`))
    updateStats()
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setInfo(allInfo.concat(`neutral ${neutral}`))
    updateStats()
  }
  const updateStats = () => {
      const handleAll = () => {
        setInfo(allInfo.concat(`all ${good + neutral + bad}`))
      }
      const handleAverage = () => {
        setInfo(allInfo.concat(`average${(good - bad) / (good + neutral + bad) || 0}`))
      }
      const handlePositive = () => {
        setInfo(allInfo.concat(`Positive ${(good / (good + neutral + bad)) * 100 || 0}`))
      }
      handleAll()
      handlePositive()
      handleAverage()
    
  }

  return (
    <div>
      <Header/>
      <Button handleClick={handleGood} text='good'/>
      <Button handleClick={handleBad} text='bad'/>
      <Button handleClick={handleNeutral} text='neutral'/>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const Header = () => {
  return <h1>give feedback</h1>
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

export default App
