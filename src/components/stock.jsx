import people from '../assets/image 7.png'
import './stock.css'


export default function Stock(props) { 
    return (
        <div class="stock">
            <img src={people} alt="" />
            <div className="text">
                <h3>{props.h3}</h3>
                <p>{props.p}</p>
            </div>
        </div>
    )
}