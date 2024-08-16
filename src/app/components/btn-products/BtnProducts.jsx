import Link from 'next/link'

const BtnProducts = () => {
    return (
        <div className='container-btns'>
            <Link href='/'>
                <span>Parte superior</span>
            </Link>
            <Link href='/'>
                <span>Parte inferior</span>
            </Link>
        </div>
    )
}

export default BtnProducts