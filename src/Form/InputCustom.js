import { useState } from 'react'
import axios from 'axios'

const InputCustom = (Callback) => {

    const [artigo, setArtigo] = useState({ titulo: '', conteudo: '' });

    const changeInputValue = e => {
        const Auxvalues = { ...artigo }
        Auxvalues[e.target.name] = e.target.value;
        setArtigo(Auxvalues);
    }


    const handleSubmitInput = Callback => event => {
        event.preventDefault();
        console.log(artigo)
        Callback();
    }

    const Enviar = () => {
        axios.post('http://localhost:8080/artigo', artigo).then((response) => {
            console.log(response.data)
            setArtigo({ form: true, titulo: '', conteudo: '' });
        }).catch((erro) => {
            console.log('erro ao conectar com api');
        });
    }


    return [artigo, changeInputValue, handleSubmitInput, Enviar];


}



export default InputCustom;