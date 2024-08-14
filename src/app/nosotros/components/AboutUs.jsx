
const AboutUs = () => {
    return (
        <main className="container-main_aboutus">
            <div className="container-main_aboutus_head">
                <h1>SOBRE NOSOTROS</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
            </div>
            <div className="container-main_aboutus_contact">
                <h2>Contacto</h2>
                <div className="container-main_aboutus_contact_div">
                    <div className="item">
                        <h3>Horarios de atención</h3>
                        <p>Lun-Vier: 8:00am - 20:00pm </p>
                        <p>Sab: 10:00am - 19:00pm </p>
                        <p>Dom: 10:00am - 16:00pm </p>
                    </div>
                    <div className="item">
                        <h3>Tienda</h3>
                        <p>Ventas online</p>
                    </div>
                    <div className="item">
                        <h3>Atención al cliente</h3>
                        <p>Tel: +115491132542154</p>
                        <p>Wpp: +115491132542154</p>
                        <p>Email: example@gmail.com</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AboutUs