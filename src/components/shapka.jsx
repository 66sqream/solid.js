import logo from '../assets/logo.svg'
import './Shapka.css'

export default function Shapka() { 
    return (
      <div class="hed">
            <img src={logo} alt="" />
            <ul>
                <a class="a" href="">О ресторане</a>
                <a href="">Меню</a>
                <a href="">Акции</a>
                <a href="">Блог</a>
                <a href="">Отзывы</a>
                <a href="">Бронь</a>
            </ul>
            <p>89012345678</p>
      </div>
    )
}