import './product-card.scss'
import { Rate } from 'antd'
import { MdOpenInFull } from 'react-icons/md'
import { ProductModal } from './product_description/ProductModal.tsx'
import { useState } from 'react'

export const ProductCard = ({oldPrice, price, title, rating, image, description} : {oldPrice?: number, price: number, title: string, rating?:number, image?: string, description?: string}) => {
    const [openDesc, setOpenDesc] = useState<boolean>(false)

    return(
        <div className="product-card">
            {
                image ? (
                    <img className='img' src={image} alt='no image' />
                ) : (
                    <div className='img'>
                        {title}
                    </div>
                )
            }
            <p>{title}</p>
            <Rate value={rating ? rating : 0} disabled></Rate>
            <div className="price">
                <p>{price} ₴</p>
                {oldPrice && <p className='old-price'>{oldPrice} ₴</p>}
                {oldPrice && <p className='discount'>{Math.floor(oldPrice && (oldPrice - price)/oldPrice * 100)}%</p>}
            </div>
            <div className="buttons">
                <button>В кошик</button>
                <button onClick={() => {
                    setOpenDesc(true)
                }} className='icon-button'><MdOpenInFull className='icon'/></button>
            </div>
            <ProductModal open={openDesc} setOpen={setOpenDesc} title={title} rating={rating} price={price} image={image} oldPrice={oldPrice} description={description}></ProductModal>
        </div>
    )
}