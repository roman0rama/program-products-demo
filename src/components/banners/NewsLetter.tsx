import { Email } from '../ui/inputs/Email.tsx'

export const NewsLetter = () => {
    return(
        <div className='newsletter'>
            <div className='newsletter__content'>
                <p>Хочете бути в курсі всіх останніх новин або першим знати про найкращі знижки? <br/> Підпишіться на нашу
                    новинну розсилку!</p>
                <Email></Email>
                <button>Підписатися</button>
            </div>
        </div>
    )
}