import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { useChannelContext } from "../../../hooks/useChannelContext";
import { ChannelList } from "../../../components/ChannelList";

export default function ChannelCreate()     {
    const [ channelName, setChannelName] = useState('');
    const { createChannel, userName } = useChannelContext();
    const { push } = useRouter()

    useEffect(()=>{
        if(!userName){
            push("/Login")
            return;
        }
    },[])

    return(
        <>
        <form onSubmit={e => {
            e.preventDefault();
            createChannel(channelName)
            setChannelName('')
        }}>
            <p>Nome do canal</p>
            <input type="text" value={channelName} 
             onChange={(e) => setChannelName(e.target.value)}
             />
             <button type="submit">Create channel</button>
        </form>
        <ChannelList />
        </>
    )
}