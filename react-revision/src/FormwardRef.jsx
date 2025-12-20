// import React from 'react'
// import { forwardRef } from 'react'

// const FormwardRef = forwardRef((props, ref) => {
//   return (
//     <div>
//         <input type='text' id='name' ref={ref} placeholder='Enter Your Name'/>
//     </div>
//   )
// }
// )

// export default FormwardRef

const FormwardRef = (props) => {
    return (
        <div>
            <h1>Form with forward Ref</h1>
            <input type='text' id='name' ref={props.ref} placeholder='Enter Your Name'/>
        </div>
    )
}
export default FormwardRef