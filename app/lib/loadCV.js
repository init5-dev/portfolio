import path from 'path';
import {promises as fs} from 'fs'

export default async function handler(req, res) {
    const fpath = path.join(process.cwd(), 'app/data/curriculum.json')
    const content = await fs.readFile(fpath, 'utf-8')
    res.status(200).json(content)
}

