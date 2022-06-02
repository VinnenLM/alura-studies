import estilo from './style.module.scss';

interface Props {
    tempo: number | undefined
}

function Relogio({ tempo = 0 }: Props){
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0');
    const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0');
    return(
        <>
            <span className={estilo.relogioNumero}>{minutoDezena}</span>
            <span className={estilo.relogioNumero}>{minutoUnidade}</span>
            <span className={estilo.relogioDivisao}>:</span>
            <span className={estilo.relogioNumero}>{segundoDezena}</span>
            <span className={estilo.relogioNumero}>{segundoUnidade}</span>
        </>
    );
}

export default Relogio;