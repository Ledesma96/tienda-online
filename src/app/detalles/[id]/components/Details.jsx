'use client'
import Link from "next/link"
import { useRef, useState } from "react"

const Details = () => {
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const [open, setOpen] = useState({
        acordeon1: false,
        acordeon2: false
    })

    const toggleAcordeon = (acordeonName) => {
        setOpen(prevState => ({
            ...prevState,
            [acordeonName]: !prevState[acordeonName]
        }))
    }
    
    return (
        <main className="container-main">
            <h1>POLLERA VERDE</h1>
            <Link href=''>Consultar</Link>
            <section>
                <div onClick={() => toggleAcordeon('acordeon1')}>
                    <h4 className={open.acordeon1 ? "h4-focus-on" : "h4-focus-off"}>Detalles del producto</h4>
                    {open.acordeon1 ? <p>-</p> : <p>+</p>}
                </div>
                <div
                    style={{
                        height: open.acordeon1 ? `${ref1.current.scrollHeight + 32}px`  : "0px",
                        overflow: "hidden",
                        transition: "height 0.2s ease",
                    }}>
                    <p ref={ref1} className={open.acordeon1 ? 'open-text' : 'close-text'}>Detalles del producto. Agrega aquí más detalles sobre tu producto como tamaño, material e instrucciones de cuidado y de limpieza. También puedes incluir especificaciones del producto, información sobre el envío, ingredientes y otros aspectos.</p>
                </div>
            </section>
            <section>
                <div onClick={() => toggleAcordeon('acordeon2')}>
                    <h4 className={open.acordeon2 ? "h4-focus-on" : "h4-focus-off"}>Politica de devolucion y reembolso</h4>
                    {open.acordeon2 ? <p>-</p> : <p>+</p>}
                </div>
                <div
                    style={{
                        height: open.acordeon2 ? `${ref2.current.scrollHeight + 32}px` : "0px",
                        overflow: "hidden",
                        transition: "height 0.2s ease",
                    }}>
                    <p ref={ref2} className={open.acordeon2 ? 'open-text' : 'close-text'}>Soy una política de devolución y reembolso. Una oportunidad ideal para explicarles a tus clientes qué hacer en caso de no estar satisfechos con su compra. Al ofrecerles una política de reembolso clara y sencilla, generas confianza y credibilidad en tus clientes, pues saben que en tu tienda pueden realizar compras con altos niveles de seguridad.</p>
                </div>
            </section>
        </main>
    )
}

export default Details