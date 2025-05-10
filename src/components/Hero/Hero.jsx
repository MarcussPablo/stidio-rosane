

const Hero = () => {
  return (

    <section className="text-center  container-fluid fade-in " style={{
    }}>
      <div className="col text-center rounded-2  pb-3 salao pt-5">
        <p> <img src="/rosanediva-2.png" className=" my-3 " style={{width:'40%'}} alt="" /></p>
        <h1 className="">Olá divas! <br />Eu sou Rosane Sales, sua fada-madrinha da beleza.</h1>
        <button className="btn btn-success text-dark btn-sm">Agendar atendimento</button>
      </div>
      
      <div className='text-black  justify-content-center align-items-center d-flex flex-column'style={{height:'15em'}}>
        <h3 className="text-dark my-3">O que te oferecemos</h3>
        <ul className="text-start" style={{
          fontSize:'large',
          fontWeight:'bolder'
        }}>
          <li> As mais belas unhas em gel.</li>
          <li> Os mais belos cílios postiços.</li>
          <li> As mais perfeitas sobrancelhas em rena ou naturais.</li>
          <li> Valores atrativos</li>
        </ul>
        
      </div>
    </section>

  )

};
export default Hero;