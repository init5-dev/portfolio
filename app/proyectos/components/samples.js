const Samples = ({samples, type}) => {
  return (
    <>
      <h3 className='fade-in-left-55'><b>{type.toUpperCase()}</b></h3>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 px-2 w-full">
        {
          samples.map(
            (sample, key) => (
              sample.type === type &&
              <div>
                <div key={key} className={`card-wide-simple glass fade-in-left-${60 + key * 5}`}>
                  <div >
                    <h3 className="text-lime-700">Título</h3>
                    <p>{sample.title}</p>
                  </div>
                  <div >
                    <h3 className="text-lime-700">Descripción</h3>
                    <p>{sample.description}</p>
                  </div>
                  <div>
                    <h3 className="text-lime-700">Github</h3>
                    <p><a className='text-lime-300 underline' href={sample["github-repo"]}>{sample["github-repo"]}</a></p>
                  </div>
                  <div>
                    <h3 className="text-lime-700">Deploy</h3>
                    <p><a className='text-lime-300 underline' href={sample.deploy}>{sample.deploy}</a></p>
                  </div>
                </div>
              </div>
            )
          )
        }
      </div>
    </>
  )
}

export default Samples