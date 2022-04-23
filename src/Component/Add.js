import React from 'react'
// import {ncreate} from '../App'
function Add({note}) {
    // const notes=useContext(ncreate)
    const SubmitNote=(e)=>{
        e.preventDefault()
        note(e.target[0].value)
        e.target[0].value=''
    }
  return (
    <div>
        <div className="container mt-5">
            <form style={{textAlign:'center'}} onSubmit={SubmitNote}>
                <div className="form-floating">
                    <textarea name='note' className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{"height": "200px"}}></textarea>
                    <label htmlFor="floatingTextarea2">Add Your Note</label>
                </div>
                <input className='mt-3'  type="submit" />
            </form>
        </div>
    </div>
  )
}

export default Add