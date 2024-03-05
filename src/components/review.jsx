import ava from '../assets/Ellipse.png'
import star from '../assets/Star 1.svg'
import './review.css'


export default function Review(props) { 
    return (
        <div class="review">
            <div className="grade">
                <div className="infa">
                    <img src={ava} alt="" />
                    <p class="name">{props.name}</p>
                </div>
                <div className="stars">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                </div>
            </div>
            <p>{props.p}</p>
        </div>
    )
}