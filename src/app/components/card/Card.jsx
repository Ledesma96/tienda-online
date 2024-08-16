'use client'
import Link from "next/link"
import { useEffect, useState } from "react"

const Card = () => {
    const useWindowSize = () => {
        const [windowSize, setWindowSize] = useState({
            width: undefined,
            height: undefined
        })

        useEffect(() => {
            function handleResize() {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight
                })
            }
            window.addEventListener('resize', handleResize)
            handleResize()
            return () => window.removeEventListener('resize', handleResize)
        }, [])
        return windowSize
    }

    const { width } = useWindowSize()

    return (
        <div className="container-card">
            <div className="card">
                <img src="https://static.wixstatic.com/media/cda177_f95b14c95d6446de847782f0b6fd0027.png/v1/fill/w_578,h_594,al_c,usm_0.66_1.00_0.01/cda177_f95b14c95d6446de847782f0b6fd0027.png" alt="Card image cap" />
                <div className="card-body">
                    <h3>Preda</h3>
                    <Link className="btn" href='/detalles/123'><span>Detalles</span></Link>
                </div>
            </div>
            {/* replicas */}
            <div className="card">
                <img src="https://static.wixstatic.com/media/cda177_f95b14c95d6446de847782f0b6fd0027.png/v1/fill/w_578,h_594,al_c,usm_0.66_1.00_0.01/cda177_f95b14c95d6446de847782f0b6fd0027.png" alt="Card image cap" />
                <div className="card-body">
                    <h3>Preda</h3>
                    <Link className="btn" href='/detalles/123'><span>Detalles</span></Link>
                </div>
            </div>
            <div className="card">
                <img src="https://static.wixstatic.com/media/cda177_f95b14c95d6446de847782f0b6fd0027.png/v1/fill/w_578,h_594,al_c,usm_0.66_1.00_0.01/cda177_f95b14c95d6446de847782f0b6fd0027.png" alt="Card image cap" />
                <div className="card-body">
                    <h3>Preda</h3>
                    <Link className="btn" href='/detalles/123'><span>Detalles</span></Link>
                </div>
            </div>
            <div className="card">
                <img src="https://static.wixstatic.com/media/cda177_f95b14c95d6446de847782f0b6fd0027.png/v1/fill/w_578,h_594,al_c,usm_0.66_1.00_0.01/cda177_f95b14c95d6446de847782f0b6fd0027.png" alt="Card image cap" />
                <div className="card-body">
                    <h3>Preda</h3>
                    <Link className="btn" href='/detalles/123'><span>Detalles</span></Link>
                </div>
            </div>
            <div className="card">
                <img src="https://static.wixstatic.com/media/cda177_f95b14c95d6446de847782f0b6fd0027.png/v1/fill/w_578,h_594,al_c,usm_0.66_1.00_0.01/cda177_f95b14c95d6446de847782f0b6fd0027.png" alt="Card image cap" />
                <div className="card-body">
                    <h3>Preda</h3>
                    <Link className="btn" href='/detalles/123'><span>Detalles</span></Link>
                </div>
            </div>
        </div>
    )
}

export default Card