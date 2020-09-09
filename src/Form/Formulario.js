import React from 'react'
import InputCustom from './InputCustom';
import './Form.css'
import Titulo from './Titulo'

export default function Formulario() {

    const [artigo, changeInputValue, handleSubmitInput, Enviar] = InputCustom('')

    return (
        <>   
            <Titulo />
            {!artigo.form ?
                <form onSubmit={handleSubmitInput(Enviar)}>
                    <input
                        type="text"
                        name="titulo" 
                        required
                        onChange={changeInputValue}
                        value={artigo.titulo}
                        placeholder="titulo"
                        className="Input-titulo"
                    />
                    <input
                        type="text"
                        name="conteudo"
                        required
                        onChange={changeInputValue}
                        value={artigo.conteudo}
                        placeholder="conteudo"
                        className="Input-conteudo"

                    />
                    <button>Enviar</button>
                </form> : <h1>Cadastro feito com Sucesso</h1>
            }
        </>
    );

}



