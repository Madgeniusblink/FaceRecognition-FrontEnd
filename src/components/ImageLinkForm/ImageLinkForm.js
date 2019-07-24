import React from 'react'
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onPictureSubmit }) => {
    return (
        <div>
            <p className='f3'>
                {`This Magic Monkey will detect faces in your pictures. Give it a try!`}
            </p>
            <div className='center'>
                <div className='pa4 br3 shadow-5 center form'>
                    <input 
                        onChange={onInputChange}
                        className='f4 pa2 w-70 center bg-white' 
                        type='text' 
                        placeholder='Enter the URL link'/>
                    <button 
                        onClick={onPictureSubmit}
                        className='w-30 grow f4 link ph3 pv2 dib white bg-orange'>
                        Detect
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;