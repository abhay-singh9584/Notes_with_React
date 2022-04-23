import React, { useContext,useState } from 'react'
import { ncreate } from '../App'


function Update({toUp,uP}) {
    const note=useContext(ncreate)
    const [val, setval] = useState(note[toUp])
    const SubmitNote=(e)=>{
        e.preventDefault()
        uP(e.target[0].value,toUp)
    }
    const ChangeHandler=(e)=>{
        setval(e.target.value)
        console.log(e.target.value);
    }
  return (
    <div>
        <div className="container mt-5">
            <form style={{textAlign:'center'}} onSubmit={SubmitNote}>
                <div className="form-floating">
                    <textarea name='note' value={val} onChange={ChangeHandler} className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{"height": "200px"}}></textarea>
                </div>
                <input className='mt-3'  type="submit" />
            </form>
        </div>
    </div>
  )
}

export default Update