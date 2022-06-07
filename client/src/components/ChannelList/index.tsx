import  Link  from "next/link";
import { useChannelContext } from "../../hooks/useChannelContext";

export function ChannelList(){

    const { channels } = useChannelContext();

    return(
        <ul>
            {channels.map(channel =>(
                <li key={channel.id}>
                    <Link href={`/Chat/${channel.id}`}>{channel.name}</Link>
                </li>
            ))}
        </ul>
    )
}