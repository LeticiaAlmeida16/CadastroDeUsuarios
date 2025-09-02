import './style.css'
import Lixeira from '../../assets/lixeira.png'

function Home(){
  const usuarios = [{
    id: '16',
    nome: 'lele',
    idade: 17,
    email: 'lele@email.com'
  }, {
    id: '17',
    nome: 'go',
    idade: 17,
    email: 'go@email.com'
  },{
    id: '16',
    nome: 'lele',
    idade: 17,
    email: 'lele@email.com'
  }]

  return (
    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
          <input name='nome' type="text" />
          <input name='idade' type="number" />
          <input name='email' type="email" />
          <button type='button'>Cadastrar</button>
      </form>

    {usuarios.map(usuario =>(
      <div key={usuario.id} className='card'>
        <div>
          <p>Nome: {usuario.nome}</p>
          <p>Idade: {usuario.idade}</p>
          <p>Email: {usuario.email}</p>
        </div>
        <button>
          <img src={Lixeira} />
        </button>
    </div>
    ))}
  </div>
  )
}

export default Home