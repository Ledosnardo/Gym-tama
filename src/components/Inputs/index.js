import styles from './Inputs.module.css';

const Inputs = ({ texto, placeholder, valor, setValor, disabled = false, type = 'text' }) => {
    return (
        <div>
            <label>{texto}</label>
            <input 
                type={type}
                placeholder={placeholder}
                value={valor}
                onChange={(event) => setValor(event.target.value)}
                disabled={disabled}
            ></input>
        </div>
    )
}

export default Inputs;