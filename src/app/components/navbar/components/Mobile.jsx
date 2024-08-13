'use client'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Mobile = ({pathName}) => {
    const [open, setOpen] = useState(false);


    const toggleMenu = () => {
        setOpen(!open)
    }

    return (
        <div className="container_navbar-mobile">
            <Link className="container-logo" href='/' alt='Logotipo del local'>
                <Image src='/Logo_ENZO3_2075x.png' width={80} height={80} alt="Logo de local, gatito negro"></Image>
                <p>TAN Meringue</p>
            </Link>
            <div className="container_icon-menu" onClick={toggleMenu}>
                <span className={`${open && 'span1'} span`}></span>
                <span className={`${open && 'span2'} span`}></span>
                <span className={`${open && 'span3'} span`}></span>
            </div>
            <nav className={`${open ? 'container-menu-on' : 'container-menu-off'} container-menu`}>
                <div className='cont'>
                    <div className={`${open ? 'container-menu_div-on' : 'container-menu_div-off'} menu`}>
                        <Link className={`${pathName === '/' && 'active'} link`} href='/' onClick={toggleMenu}>Inicio</Link>
                        <Link className={`${pathName === '/tienda' && 'active'} link`} href='/tienda' onClick={toggleMenu}>Tienda</Link>
                        <Link className={`${pathName === '/nosotros' && 'active'} link`} href='/nosotros' onClick={toggleMenu}>Nosotros</Link>
                        <Link className={`${pathName === '/compra' && 'active'} link`} href='/compra' onClick={toggleMenu}>Como comprar</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Mobile