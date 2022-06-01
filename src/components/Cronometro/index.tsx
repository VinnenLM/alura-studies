import Botao from "../Botao";
import Relogio from "./Relogio";
import estilo from './style.module.scss';

function Cronometro() {
    return (
        <div className={estilo.cronometro}>
            <p className={estilo.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={estilo.relogioWrapper}>
                <Relogio />
            </div>
            <Botao
                texto="Começar!"
            />
        </div>
    );
}

export default Cronometro;