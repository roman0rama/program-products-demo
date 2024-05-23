import './modal.scss'
import React from 'react'
import { Rate } from 'antd'

export const ProductModal = ({ setOpen, open, oldPrice, price, title, rating, image, description } :
                                 { setOpen:  React.Dispatch<React.SetStateAction<boolean>>, open: boolean, oldPrice?: number, price: number, title: string, rating?:number, image?: string, description?: string}) => {
    return(
        <div className={`animated product-modal ${open ? 'open' : ''}`}>
            <div className="modal-content ">
                <svg onClick={() => {
                    setOpen(false)
                }} height="200" viewBox="0 0 200 200" width="200" className='svg'>
                    <title />
                    <path
                        d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
                </svg>
                <form className='modal-header'>
                    {
                        image ? (
                            <img className='img' src={image} alt='no image' />
                        ) : (
                            <div className='modal-img'>
                                {title}
                            </div>
                        )
                    }
                    <div className='title'>
                        <h2>{title}</h2>
                        <Rate value={rating ? rating : 0} disabled></Rate>
                    </div>
                </form>
                <div className='modal-price'>
                    <p>{price} ₴</p>
                    {oldPrice && <p className='old-price'>{oldPrice} ₴</p>}
                    {oldPrice &&
                        <p className='modal-discount'>{Math.floor(oldPrice && (oldPrice - price) / oldPrice * 100)}%</p>}
                </div>
                <div>
                    <p>Опис:</p>
                    <p>{description}</p>
                </div>
                <button>Покласти в корзину</button>
            </div>
        </div>
    )
}