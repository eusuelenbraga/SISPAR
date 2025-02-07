import Logo from "../../assets/Tela Login/logo-ws.png"
import Capa from "../../assets/Tela Login/imagem tela de login.png"



function Login(){
    return(
        <main>
            <section> </section>

            <section>
                <img src={Logo} alt="Logo da Wilson Sons"/>

                <h1>Boas vindas ao Novo portal SISPAR</h1>

                <p>Sistema de Emissão de Boletos e Parcelamentos </p>

                <form action="">
                    <input type="email" name="email" id="email" placeholder="Email"/>
                    <input type="password" name="password" id="password" placeholder="Senha"/>
                    <a href="">Esqueci minha senha</a>
                    
                </form>
                
                <div>
                    <button>Entrar</button>
                    <button>Criar conta</button>
                </div>
                 </section>
        </main>
    )
}

export default Login