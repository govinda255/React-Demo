import React from 'react'
import Comment from './Comments/Comment'
import './Style.css'
import { data } from './Comments/Data'

function App() {

    
    return(
        <div className='container'>

            <ul className="comments-container">
            {
                data.map( (eachComment) =>{
                    const {email,name,body,id} = eachComment;
                    return(
                        <Comment name={name} email={email} body={body} id={id} key={id} />
                        
                    )

                })
            }
            
            </ul>
        </div>

    )
    
}

export default App
