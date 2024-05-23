import './header.scss'
import { Divider } from 'antd'
import { FaBasketShopping } from 'react-icons/fa6'

const Header = () => {
    return(
        <>
            <div className='header container'>
                <div className='logo'>
                    SOFTWARE STORE
                </div>
                <div className='nav'>
                    <a href='#Антивіруси'>Антивірус</a>
                    <a href='#Системні утиліти'>Системні утиліти</a>
                    <a href='#Операційні системи'>Операційні системи</a>
                    <a href='#Офісні програми'>Офісні програми</a>
                </div>
                <div>
                    <FaBasketShopping className="icon" />
                </div>
            </div>
            <Divider className='divider'></Divider>
        </>
    )
}

export default Header;