'use client'
import { Whatsapp, Linkedin } from 'styled-icons/fa-brands'

const socialNets = [
    {
        id: 0,
        icon: <Whatsapp size={48} color='#075E54' />
    },
    {
        id: 1,
        icon: <Linkedin size={48} color='#0e76a8 ' />
    },
]

export default function Social() {
    return (
        <div className={`grid grid-cols-${socialNets.length} gap-5 items-center justify-center`}>
            {
                socialNets.map(
                    (net) => (
                        <div key={net.id}>{net.icon}</div>
                    )
                )
            }
        </div>
    )
}