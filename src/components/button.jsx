import './button.css'

export default function Btn(props) { 
    return (
        <button className="btn">{props.text}</button>
    )
}