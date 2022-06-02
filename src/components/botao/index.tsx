import React from "react";
import botao from './style.module.scss';

class Botao extends React.Component<{ texto: string, type?: "button" | "submit" | "reset" | undefined, onClick?: () => void }> {
    render(): React.ReactNode {
        const { type = 'button', onClick } = this.props;
        return (
            <button onClick={onClick} type={type} className={botao.botao}>{this.props.texto}</button>
        )
    }
}

export default Botao;