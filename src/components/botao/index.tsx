import React from "react";
import botao from './style.module.scss';

class Botao extends React.Component<{ texto: string, type?: "button" | "submit" | "reset" | undefined }> {
    render(): React.ReactNode {
        const {type = 'button'} = this.props;
        return (
            <button type={type} className={botao.botao}>{this.props.texto}</button>
        )
    }
}

export default Botao;