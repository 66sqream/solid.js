import './infa.css'

export default function Infa(props) { 
    return (
        <div class="block">
           <img src={props.img} alt="" />
            <div class="text">
                <h3>{props.h1}</h3>
                <p>{props.p}</p>
            </div>
        </div>
        
    )
}