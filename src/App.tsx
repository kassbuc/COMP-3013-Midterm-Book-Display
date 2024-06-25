import { useState } from 'react'
import { Viewer } from './components/Viewer.tsx'
import { List } from './components/List.tsx'
import './App.css'

function App() {
  const [selected, setSelected] = useState(0)
  
    return (
      <>
        < Viewer selected={selected}/>
        < List selected={selected} setSelected={setSelected}/>
      </>
    )
  }

export default App
