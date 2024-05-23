import React from 'react'

export const ProductsCategory = ({title, children} : {title: string, children?:React.ReactNode}) => {
    return(
        <>
            <div className='category-title' id={title}>
                <div></div>
                {title}
            </div>
            <div className='category-children'>
                { children }
            </div>
        </>
    )
}