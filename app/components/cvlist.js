import Image from "next/image"

export default function CVList({ listType, data }) {

    if (listType == 'studies')
        return data.map(
            (study) => (
                <div key={study.id} className={`card-wide glass fade-in-left-${60 + Number(study.id)*5}`}>
                    <div className="w-full flex justify-center items-center">
                        <Image src={study.img} width={200} height={200} alt={study.center} />
                    </div>
                    <div className="w-full">
                        <div className="my-3" >
                            <h3 className="text-lime-700">Título</h3>
                            <p>{study.degree}</p>
                        </div>
                        <div className="my-3" >
                            <h3 className="text-lime-700">Centro</h3>
                            <p>{study.center}</p>
                        </div>
                        <div className="my-3" >
                            <h3 className="text-lime-700">Fechas</h3>
                            <p>{study.duration}</p>
                        </div>
                    </div>
                </div>
            )
        )
    else
        return data.map(
            (position) => (
                <div key={position.id} className={`card-wide glass fade-in-left-${50 + Number(position.id)*5}`}>
                    <div className="w-full flex justify-center items-center">
                        <Image src={position.img} width={150} height={150} alt='IPI Fernando Aguado y Rico' />
                    </div>
                    <div className="w-full">
                        <div className="my-3" >
                            <h3 className="text-lime-700">Cargo</h3>
                            <p>{position.title}</p>
                        </div>
                        <div className="my-3" >
                            <h3 className="text-lime-700">Empresa</h3>
                            <p>{position.company}</p>
                        </div>
                        <div className="my-3" >
                            <h3 className="text-lime-700">Fechas</h3>
                            <p>{position.duration}</p>
                        </div>
                    </div>
                </div>
            )
        )
}