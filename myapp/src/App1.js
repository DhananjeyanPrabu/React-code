function App1() {

    function handleChange(){
        const items=["BRIYANI","PIZZA","BURGER","TANDOORI"];
        const int =Math.floor(Math.random()*4);
        return items[int]

    }
    return(
     <div>
            welcome to dj site
            <p>Let's order {handleChange()} tonight</p>``
           
     </div> 
        

    );

}

export default App1;