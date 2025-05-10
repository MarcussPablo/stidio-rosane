import { CiInstagram } from "react-icons/ci";

const Redes = () => {
    return (
        <div className=" d-flex flex-row  redes">
            <div className="mx-auto">
                <h3 className="text-dark">Me encontre nas minhas redes sociais</h3>
                <div className="flex-row d-flex text-center justify-content-center align-items-center text-center">
                    <div className="d-flex  justify-content-center align-items-center text-center">
                        <CiInstagram style={{
                            color: 'rgb(253, 56, 137)',
                            fontSize: '5em'
                        }} />
                    </div>
                    <div className="d-flex justify-content-center align-items-center text-center">
                        <CiInstagram style={{
                            color: 'rgb(253, 56, 137)',
                            fontSize: '5em'
                        }} />
                    </div>
                    <div className="d-flex justify-content-center align-items-center text-center">
                        <CiInstagram style={{
                            color: 'rgb(253, 56, 137)',
                            fontSize: '5em'
                        }} />
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Redes