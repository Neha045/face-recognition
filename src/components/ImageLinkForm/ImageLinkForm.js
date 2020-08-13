import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm  = ({ onInputChange, onSubmit }) => {
    return(
        <div className='ma4 mt0'>
           <p className='f3 b'>
               {'Detect faces in your pictures.'}
           </p>
           <div className='center'>
               <div className='form center pa4 br3 shadow-2'>
                    <input type='text' className='f4 pa2 w-70 center' onChange={onInputChange}/>
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-navy' onClick={onSubmit}>Detect</button>
               </div>
           </div>
        </div>
    )
}

export default  ImageLinkForm;