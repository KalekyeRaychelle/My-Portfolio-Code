import React from 'react'

const Contact = () => {
  return (
    <div className='Contact'>
        <div className='emailForm'>
            <p>Send an email?</p>
            <form>
              <label for='email'>Email: </label>
              <inputt type='email'/>
              <label for='Subject'>Subject: </label>
              <input type='text'/>
              <label>Message: </label>
              <input type='/>
            
            </form>
        </div>
        <div className='socialMedia'>
          <a href='https://github.com/KalekyeRaychelle/'><i class="fa fa-github" aria-hidden="true"></i></a>
          <a href='https://www.linkedin.com/in/raychelle-kalekye-0825602ba/'><i class="fa fa-linkedin" aria-hidden="true"></i></a>
        </div>
    </div>
  )
}

export default Contact
