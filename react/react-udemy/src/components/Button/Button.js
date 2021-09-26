import './Button.css'

const Button = (props)=>{
    const {name , url} = props;
    return (
        <div>
            <a href={url?url:''}>
            <button className={ url ? 'button-url' : ''}>{name}</button>
            </a>
        </div>
    );
}

export default Button;