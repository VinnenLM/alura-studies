import estilo from './style.module.scss';

function Relogio(){
    return(
        <>
            <span className={estilo.relogioNumero}>0</span>
            <span className={estilo.relogioNumero}>0</span>
            <span className={estilo.relogioDivisao}>:</span>
            <span className={estilo.relogioNumero}>0</span>
            <span className={estilo.relogioNumero}>0</span>
        </>
    );
}

export default Relogio;