import React , {useState} from 'react'
import '../../../assets/css/bootstrap.min.css';

const GoalAdd = props =>    {

  const addGoalhandler = event => 
  {
    event.preventDefault();
    // const userValue = event.target.value;
    // console.log(userValue);
    props.newGoal({name:'new goals ..'});

  }  

  return (
    <div className='container'>
        <div className='row mt-3'>
            <div className='col-md-6 offset-md-3'>
                <h3 className='justify-center text-center'>Create you are goal ...</h3>
                <form onSubmit={addGoalhandler} >
                  <div className='row'>
                    <div className='col-10'>
                        <div className='form-group'>
                            <input type="text" className='form-control my-2' id='goal-input' autoFocus placeholder='Type ur goal' />
                        </div>
                    </div>
                    <div className='col-2'>
                        <div className='form-group'>
                            <input className='btn btn-primary mt-2 col-12' type="submit" value="+" />
                        </div>
                    </div>
                  </div>
                </form>                
            </div>
        </div>
    </div>
  )
}

export default GoalAdd