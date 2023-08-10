
import './style.css';

type CardProps = {
    titulo : string,
    imagem: string,
    descricao: string,
    acoes?: boolean,
    categoria?: string
}

const Card = ({ titulo, imagem, descricao, acoes, categoria } : CardProps) => {

    function fazerAlgo(){
        alert('fez algo');
    }

    return(
        <>
            <div className="card">
                <h3 className="card-title">
                    { titulo }
                </h3>
                {
                    categoria && (
                        <h4>{categoria}</h4>
                    )
                }
                <div className="card-image">
                    <img src={ imagem } alt="" />
                </div>
                <p className="card-content">
                    { descricao }
                </p>

                {
                    acoes && (
                        <div className="card-actions">
                            <button onClick={() => fazerAlgo()}>action</button>
                        </div>
                    )
                }

            </div>
        </>
    );
}

export default Card;
