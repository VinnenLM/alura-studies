import React from "react";
import botao from './style.module.scss';

class Botao extends React.Component {
    render(): React.ReactNode {
        return (
            <button className={botao.botao}>Botão</button>
        )
    }
}

export default Botao;