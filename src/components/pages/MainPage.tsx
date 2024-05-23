import Header from '../header/Header.tsx'
import "./pages.scss"
import { MainBanner } from '../banners/MainBanner.tsx'
import { NewsLetter } from '../banners/NewsLetter.tsx'
import { ProductList } from '../product_list/ProductList.tsx'
import { Footer } from '../footer/Footer.tsx'

export const MainPage = () => {
    return(
        <div className="main-page">
            <Header></Header>
            <MainBanner></MainBanner>
            <ProductList></ProductList>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </div>
    )
}