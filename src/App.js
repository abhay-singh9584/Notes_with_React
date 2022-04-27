import React, { createContext, useEffect, useState } from 'react'
import Add from './Component/Add'
import Update from './Component/Update'
import View from './Component/View'
const ncreate = createContext()

function App() {
  const anon_func=()=>{
    const l=localStorage.getItem('Notes')
    if(l){
      return JSON.parse(localStorage.getItem('Notes'))
    }
    else{
      return []
    }
  }
  const [notes, setnotes] = useState(anon_func())
  const [view, setview] = useState(0)
  const [update, setupdate] = useState('')

  useEffect(() => {
    localStorage.setItem('Notes',JSON.stringify(notes))
  }, [notes])
  

  const ViewPage=()=>{
      setview(1)
  }

  const getnotes=(e)=>{
    setview(1)
    var copyl=[...notes]
    copyl.push(e)
    setnotes(copyl)
  }

  const delNote=(e)=>{
    var copyl=[...notes]
    copyl.splice(e,1)
    setnotes(copyl)
  }

  const UpCall=(e)=>{
    setview(2)
    setupdate(e)
  }

  const UpSub=(e,i)=>{
    var copyl=[...notes]
    copyl[i]=e
    setnotes(copyl)
    setview(1)
  }

  return (
    <ncreate.Provider value={notes}>
      <div>
        <nav className="navbar navbar-light bg-danger">
          <div className="container-fluid">
            <h1 style={{cursor:'pointer'}} onClick={()=>setview(0)}><i className='badge'>Notes</i></h1>
            <button type="button" onClick={ViewPage} className="btn btn-dark">Click to view all Notes</button>
          </div>
        </nav>
        {view===0 ? <Add note={getnotes}/> : ''}
        {view===1 ? <View del={delNote} Call={UpCall}/> : ''}
        {view===2 ? <Update toUp={update} uP={UpSub}/> : ''}
      </div>
    </ncreate.Provider>
  )
}

export default App
export {ncreate}