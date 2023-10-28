import React from 'react'

const Content = () => {
    function handleChange(){
        const items=["BRIYANI","PIZZA","BURGER","TANDOORI"];
        const int =Math.floor(Math.random()*4);
        return items[int]

    }
  return (
    <div>
            <p>Let's order {handleChange()} tonight</p>``
    </div>
  )
}

export default Content