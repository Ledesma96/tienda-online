import Link from 'next/link'

const Banner = () => {
    return (
        <div className='container-banner'>
            <img src='/84770f_b5b78cd83b6342199b7370a2ba6b9e06.webp'></img>
            <div className='container-btn'>
                <h3 className='container-btn_text'>OTOÑO & INVIERNO</h3>
                <Link className='container-btn_link' href='/'>Comprar</Link>
            </div>
            <p className='container-banner_text'>ENVIO GRATIS A TODO EL MUNDO</p>
        </div>
    )
}

export default Banner