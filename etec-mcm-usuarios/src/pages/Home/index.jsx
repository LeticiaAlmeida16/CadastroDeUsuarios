import { useEffect, useState, useRef } from 'react'
import './style.css'
import Lixeira from '../../assets/lixeira.png'
import api from '../../services/api'
import Atualizar from '../../assets/atualiza.png'

function Home() {
  const [usuarios, setUsuarios] = useState([])

  const inputNome = useRef()
  const inputIdade = useRef()
  const inputEmail = useRef()

  async function getUsuarios() {
    const usuariosDaApi = await api.get('/cadastro')
    setUsuarios(usuariosDaApi.data)
    //console.log(usuarios)
  }

  async function createUsuarios() {
    await api.post('/cadastro', {
      nome: inputNome.current.value,
      idade: inputIdade.current.value,
      email: inputEmail.current.value
    })
    getUsuarios()// <- atualiza a lista

    //vai limpar os campos
    inputNome.current.value = ""
    inputIdade.current.value = ""
    inputEmail.current.value = ""
  }

  async function deleteUsuarios(id) {
    await api.delete(`/cadastro/${id}`)
    getUsuarios()// <- atualiza a lista
  }

  async function atualizaUsuarios(id) {
    const novoNome = prompt('Digite o novo nome:')
    const novaIdade = prompt('Digite a nova idade:')
    const novoEmail = prompt('Digite o novo email:')
    if (novoNome && novaIdade && novoEmail) {
      await api.put(`/cadastro/${id}`, {
        nome: novoNome,
        idade: novaIdade,
        email: novoEmail
      })
      getUsuarios()// <- atualiza a lista
    }
  }
  

  useEffect(() => {
    getUsuarios()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder='Digite seu nome' name='nome' type="text" ref={inputNome} />
        <input placeholder='Digite sua idade' name='idade' type="number" ref={inputIdade} />
        <input placeholder='Digite seu email' name='email' type="email" ref={inputEmail} />
        <button onClick={createUsuarios} type='button'>Cadastrar</button>
      </form>

      {usuarios.map(usuario => (
        <div key={usuario.id} className='card'>
          <div>
            <p>Nome: {usuario.nome}</p>
            <p>Idade: {usuario.idade}</p>
            <p>Email: {usuario.email}</p>
          </div>
          <button onClick={() => deleteUsuarios(usuario.id)} className='btn-deletar'>
            <img src={Lixeira} />
          </button>
          <button onClick={() => atualizaUsuarios(usuario.id)} className='btn-atualizar'>
            <img src={Atualizar} />
          </button>
        </div>
      ))}
    </div>
  )
}

export default Home