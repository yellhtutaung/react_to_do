import React from 'react'
import '../../../assets/css/bootstrap.min.css';
import 'https://code.jquery.com/jquery-3.3.1.slim.min.js';


const GoalList = props =>
{
  return (

    <div className='container'>
        <div className='row mt-3'>
            <div className='col-md-6 offset-md-3'>
            {props.Goals.map(Goal => {
                return(
                    <React.Fragment key={Math.floor(Math.random() * 1000000)}>
                        <div className="alert alert-primary" role="alert">
                            {Goal.name}
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </React.Fragment>
                    )
                })}
            </div>
        </div>
    </div>
    
  )
}

export default GoalList