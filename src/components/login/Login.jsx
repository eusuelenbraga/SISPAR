import { useNavigate} from "react-router-dom";
import Logo from "../../assets/Tela Login/logo-ws.png";
import Capa from "../../assets/Tela Login/imagem tela de login.png";
import styles from "./Login.module.scss";


function Login(){

    const navigate = useNavigate() //iniciando o hook useNavigate

    const irParaReembolsos = () => {
        navigate("/reembolsos")  //redirecionando pra a pagina de reembolsos
        }



    return(
        <main className={styles.container}>
            
            <img src={Capa} alt="Foto de um navio cargueiro"/>
            

            <section className={styles.login}>
                <img src={Logo} alt="Logo da Wilson Sons"/>
                <h1>Boas vindas ao Novo Portal SISPAR</h1>
                <p>Sistema de Emissão de Boletos e Parcelamentos </p>

                <form>
                    <input type="email" name="email" id="email" placeholder="Email"/>
                    <input type="password" name="password" id="password" placeholder="Senha"/>
                    <a href="#">Esqueci minha senha</a>

                    <div className={styles.buttons}>
                    <button onClick={irParaReembolsos} className={styles.btnLogin}>Entrar</button>
                    <button className={styles.btnCriar}>Criar conta</button>
                    </div>
                </form>
            </section>
        </main>
    );
}

export default Login;