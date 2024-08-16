import Filter from "./components/Filter"
import SeoTienda from "./components/SeoTienda"
import Shop from "./components/Shop"

const page = () => {
    return (
        <div className="container-tienda">
            <SeoTienda/>
            <Filter/>
            <Shop/>
        </div>
    )
}

export default page