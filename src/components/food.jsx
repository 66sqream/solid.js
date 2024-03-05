import pasta from '../assets/image 4.png'
import './food.css'


export default function Food(props) { 
    return (
        <div class="food">
            <img src={pasta} alt="" />
            <div className="text">
                <h3>{props.h3}</h3>
                <p>{props.p}</p>
            </div>
        </div>
    )
}