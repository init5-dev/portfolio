'use client'

import { ChevronLeft, ChevronRight } from "styled-icons/fa-solid";

const ArrowButton = ({ orientation = 'left', caption = '', onClick = null }) => {

    const OrientationValueException = () => {
        throw new Error('Orientation value must be "left" or "right".')
    }  

    return (
        <button onClick={onClick} className="flex items-center justify-center">
            {
                orientation === 'left' ?
                    <ChevronLeft className="w-6 bg-transparent hover:bg-transparent hover:text-green-700 active:text-green-500 rounded-full" />
                    :
                        orientation === 'right' ?
                            <ChevronRight className="w-6 bg-transparent hover:bg-transparent hover:text-green-700 active:text-green-500 rounded-full" />
                        :
                            OrientationValueException()
            }
            {caption} 
        </button>
    );
}

export default ArrowButton