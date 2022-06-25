import React, { useState } from 'react';
import Crossword from '@jaredreisinger/react-crossword';
import simple from './configs/simple'
import demo from './configs/demo';

const map = {
  'simple': simple,
  'demo': demo
}

export default function App() {
  const [puzzle, setPuzzle] = useState('demo');

  return (
    <div style={{margin:'50px',display:'flex',flexDirection:'column',alignItems:'center',gap:'50px'}}>
      <select value={puzzle} onChange={(e) => setPuzzle(e.target.value)}>
        <option value="simple">Simple</option>
        <option value="demo">Demo</option>
      </select>
      <div style={{width: map[puzzle].size}}>
        <Crossword data={map[puzzle].game} />
      </div>
    </div>
  )
}