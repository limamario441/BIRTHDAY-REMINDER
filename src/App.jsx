import { useState } from 'react'
import './App.css'
import List from './components/List'
import data from './data'


export default function App() {

  const [birthdayList, setBirthdayList] = useState(data)
  return (
  <main>
    <section className='container'>
        <h3>Wm Innovation</h3>
        <h3>{birthdayList.length} aniversariantes de Hoje</h3>
        <List  birthdayList={birthdayList}/>
        <button onClick={() => setBirthdayList([])}>Limpar Lista</button>
    </section>
 </main>
  )
}
