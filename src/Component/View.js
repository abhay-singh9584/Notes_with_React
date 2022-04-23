import React, { useContext } from 'react'
import { ncreate } from '../App'

function View({del,Call}) {
    const note=useContext(ncreate)
    const DelNote=(e)=>{
        del(e)
    }
    const viewall=note.map((i,index)=>{
        return <div className="card p-2 mt-3" key={index} style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
        <div className="card-body display-5">
            {i}.
        </div>
        <i style={{cursor:'pointer'}} onClick={()=>Call(index)} className="ri-edit-line display-6 text-secondary mx-5"></i>
        <i style={{cursor:'pointer'}} onClick={()=>DelNote(index)} className="ri-close-line display-6 text-danger mx-1"></i>
    </div>
    })

  return (
    <div className='container mt-5'>
        {note.length>0 ? viewall : <h1 className='text-center fst-italic font-monospace'>No Note Found</h1>}
    </div>
  )
}

export default View