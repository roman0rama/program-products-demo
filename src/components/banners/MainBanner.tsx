import { TbTruckDelivery } from 'react-icons/tb'
import './banners.scss'
import { MdOutlineTimeline, MdSpeed } from 'react-icons/md'
import { GrInsecure } from 'react-icons/gr'
import { ImPriceTags } from 'react-icons/im'
import { SiAnydesk } from 'react-icons/si'

export const MainBanner = () => {
    return(
        <div>
            <div className='main-banner'>
                <div className='main-banner__content'>
                    <h1><SiAnydesk /> Ексклюзивна пропозиція <SiAnydesk /></h1>
                    <h3>Професійні відеоредактори за вигідними цінами</h3>
                    <button>Придбати зараз <MdOutlineTimeline /></button>
                </div>
            </div>
            <div className='main-banner__bottom'>
                <div>
                    <p><TbTruckDelivery className='banner_icon'/> Безкоштовна доставка замовлень на суму понад 10.000</p>
                    <p><MdSpeed className='banner_icon'/> Швидка та безпечна доставка</p>
                    <p><GrInsecure className='banner_icon'/> Захист даних</p>
                    <p><ImPriceTags className='banner_icon'/> Найнижчі ціни</p>
                </div>
            </div>
        </div>
    )
}