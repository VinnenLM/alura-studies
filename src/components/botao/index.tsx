import React from "react";
import botao from './style.module.scss';

class Botao extends React.Component<{ texto: string }> {
    render(): React.ReactNode {
        return (
            <button className={botao.botao}>{this.props.texto}</button>
        )
    }
}

export default Botao;