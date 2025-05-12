

const Hero = () => {
  return (

    <section className="text-center  container-fluid fade-in " style={{
    }}>
      <div className="col text-center rounded-2 salao pt-5">
        <p className="diva"> <img src="/rosanediva-2-3.png" className=" mt-2 " style={{width:'40%'}} alt="" /></p>
        <h1 className="text-light">Olá divas! <br />Eu sou Rosane Sales, sua fada-madrinha da beleza.</h1>
        <p style={{fontSize:'large'}}>Nail designer, lash designer e eyebrows designer. <br />*(Unhas, cílios e sobrancelhas)</p>
        <button className="btn btn-success text-dark btn-sm">Agendar atendimento</button>
      </div>
      
      <div className='text-dark '>
        <h3 className=" my-3 fs-2">Serviços</h3>
      </div>
    </section>

  )

};
export default Hero;