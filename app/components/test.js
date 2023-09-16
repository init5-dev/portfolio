'use client'

import { useState } from "react"

export default function Test() {
    const [x, setX] = useState(0)

    const handleClick = async (e) => {
        e.preventDefault()
        console.log('CLICKED!!!!')
        setX(x + 1)
    }

    return (
        <>
            <div className="bg-white text-black">
                <input type="submit" className="bg-red-500" onClick={handleClick} value='Click'/>
                <div>
                    Valor: {x}
                </div>
            </div>
        </>
    )
}

