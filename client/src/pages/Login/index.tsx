import { useState } from "react"
import { useChannelContext } from "../../hooks/useChannelContext";
import { useRouter } from 'next/router'



export default function Login(){
    const [ userName, setUserName] = useState('');
    const { push } = useRouter()
    const { login } = useChannelContext();
    return(
    <div>
        <h1>Login</h1>

        <form 
         onSubmit={(e) => {
         e.preventDefault();
         login(userName)
         push('/Channels/ChannelCreate')
        }}>
            <p>Username</p>
            <input 
             type="text"
             placeholder="Seu usuário"
             value={userName}
             onChange={(e) => setUserName(e.target.value)}
             />
            <button type="submit">Entrar</button>
        </form>
    </div>
    )
}

