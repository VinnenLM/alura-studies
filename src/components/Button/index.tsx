import botao from './style.module.scss';

interface Props {
    texto: string,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
}

function Botao({ texto, type, onClick}: Props) {
        return (
            <button 
                onClick={onClick} 
                type={type} 
                className={botao.botao}>
                {texto}
            </button>
        )
    }

export default Botao;