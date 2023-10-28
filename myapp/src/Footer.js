import React from 'react'

const Footer = () => {
    /* const year = new Date(); //year is a variable object created 
                             //year.getfullyear() is javascript expression (method) */
    

  return (
    <footer>
        {/* copyright &copy; {year.getFullYear()};  */}
        copyright &copy; {new Date().getFullYear()};   
                       
    </footer>
  )
}

export default Footer