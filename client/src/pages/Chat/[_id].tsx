import { useEffect, useRef, useState } from "react";
import  {GetServerSideProps, GetServerSidePropsContext } from 'next'
import { useChannelContext } from "../../hooks/useChannelContext";
import  Link  from 'next/link'

export default function Chat(_id){
    const [message, setMessage ] = useState('');
    const { channel, joinChannel, createMessage} = useChannelContext();
    const divRef = useRef<HTMLDivElement>(null)
    
    
    const goToBottom = () =>{
        if(divRef.current){
            divRef.current.scrollTop = divRef.current?.scrollHeight
        }
    }


    useEffect(()=>{
        goToBottom()
    },[channel?.messages]);

    useEffect(()=>{
        joinChannel(_id)
    },[])
    return(
        <>
        <div style={{
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center'
        }}>
            <h5>
                # {channel?.name}
            </h5>
            <Link href="/Channels">Voltar</Link>
        </div>
        <div ref={divRef} style={{
            maxHeight:'300px',
            overflowY:'auto'
        }}>
            {channel?.messages.map((message,index) => (
                <div key={index}>
                    <strong>{message.userName}</strong>:{message.message}
                </div>
            ))}
        </div>
        <form onSubmit={e => {
            e.preventDefault();
            createMessage(message,_id)
            setMessage('')  
        }}>
            <input type="text" 
             placeholder="Escreve sua mensagem"
             value={message} 
             onChange={(e) => setMessage(e.target.value)}
             />
             <button type="submit">Enviar</button>
        </form>
        </>
    )
}

export const getServerSideProps:GetServerSideProps = async(ctx :GetServerSidePropsContext) => {
    const _id = await ctx.params._id;
    return{
       props:{
           _id
       }
    }
}
