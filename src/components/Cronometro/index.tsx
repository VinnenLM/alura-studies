import { useEffect, useState } from "react";
import tempoParaSegundos from "../../common/utils/date";
import { ITarefa } from "../../types/tarefas";
import Botao from "../Botao";
import Relogio from "./Relogio";
import estilo from './style.module.scss';

interface Props {
    selecionado: ITarefa | undefined
}

function Cronometro({ selecionado }: Props) {

    const [tempo, setTempo] = useState <number>();
    
    useEffect(() => {
        if(selecionado?.tempo){
            setTempo(tempoParaSegundos(selecionado.tempo));
        }
    },[selecionado]);

    return (
        <div className={estilo.cronometro}>
            <p className={estilo.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={estilo.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>
            <Botao
                texto="Começar!"
            />
        </div>
    );
}

export default Cronometro;