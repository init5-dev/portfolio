import path from 'path'
import { promises as fs } from 'fs'
import Image from 'next/image'
import CVList from '../components/cvlist'

export async function loadData() {
    const content = await fs.readFile('app/data/curriculum.json')
    const data = JSON.parse(content)
    return data
}


export default async function SobreMi() {

    const data = await loadData()

    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-16 justify-items-center px-2'>
            <div>
                <h2 className='fade-in-left-55 text-center'>Estudios</h2>
                <CVList listType={'studies'} data={data.studies} />
            </div>
            <div>
                <h2 className='fade-in-left-60 text-center'>Experiencia laboral</h2>
                <CVList listType={'positions'} data={data.positions} />
            </div>
            
        </div>
    )
}