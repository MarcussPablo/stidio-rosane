import { CiInstagram } from "react-icons/ci";

const Redes = () =>{
    return(
        <div className="my-5 ">
            <h3 className="rounded-2 border border-5 bg-dark border-dark">Me encontre nas minhas redes sociais</h3>
            <div className="mt-5">
            <CiInstagram style={{color:'rgb(253, 56, 137)',
                fontSize:'5em'
            }} />
                        <CiInstagram style={{color:'rgb(253, 56, 137)',
                fontSize:'5em'
            }} />
                        <CiInstagram style={{color:'rgb(253, 56, 137)',
                fontSize:'5em'
            }} />
            
            </div>
        </div>
    )
}
export default Redes