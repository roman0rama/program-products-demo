import './product_list.scss'
import { ProductsCategory } from './ProductsCategory.tsx'
import { ProductCard } from '../product_card/ProductCard.tsx'
import { Filter } from './Filter.tsx'

export const ProductList = () => {
    return(
        <div className="product_list container p-2em">
            <Filter></Filter>
            <ProductsCategory title='Антивіруси'>
                <ProductCard
                    oldPrice={5000}
                    price={3000}
                    title='Avast'
                    rating={2}
                    image='https://ico.kz/upload/iblock/fb7/4bqqat6iiqh6cxe8jazd4y7y1y9ri56o.png'
                    description='Антивірус Avast один із найпопулярніших антивірусів'
                />
                <ProductCard
                    oldPrice={5000}
                    price={3000}
                    title='Avira GmbH'
                    rating={1}
                    image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuUEgUlpJFt6orremo6PDxK-zHuyhPKWxaTHknHYtvuQ&s'
                    description='Антивірус ......................................................'
                />
            </ProductsCategory>
            <ProductsCategory title='Системні утиліти'>
                <ProductCard
                    oldPrice={5000}
                    price={3000}
                    title='Microsoft Office Professional 2019'
                    rating={4}
                />
                <ProductCard
                    oldPrice={4500}
                    price={2800}
                    title='Microsoft Office Professional 2018'
                    rating={4}
                />
                <ProductCard
                    oldPrice={4000}
                    price={2500}
                    title='Microsoft Office Professional 2017'
                    rating={4}
                />
                <ProductCard
                    oldPrice={3600}
                    price={2200}
                    title='Microsoft Office Professional 2016'
                    rating={4}
                />
                <ProductCard
                    oldPrice={3000}
                    price={1500}
                    title='Microsoft Office Education 2014'
                    rating={4}
                />
            </ProductsCategory>
            <ProductsCategory title='Операційні системи'>
                <ProductCard
                    price={3000}
                    title='Windows 11 Home'
                    rating={4}
                />
                <ProductCard
                    oldPrice={3000}
                    price={2500}
                    title='Windows 10 Pro'
                    rating={4}
                />
                <ProductCard
                    oldPrice={3000}
                    price={2200}
                    title='Windows 10 Home'
                    rating={4}
                />
            </ProductsCategory>
            <ProductsCategory title='Офісні програми'>
                <ProductCard
                    oldPrice={5000}
                    price={3000}
                    title='Microsoft Office Professional 2019'
                    rating={4}
                />
                <ProductCard
                    oldPrice={5000}
                    price={3000}
                    title='Microsoft Office Professional 2019'
                    rating={4}
                />
            </ProductsCategory>
        </div>
    )
}