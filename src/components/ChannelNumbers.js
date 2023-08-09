import React, { useState } from 'react'

function ChannelNumbers({index, setChannel, setMovieData}) {
    const channels = [1,2,3,4,5,6,7,8,9,'Enter',0,'Clear'];
    const [channelDisplay, setChannelDisplay] = useState(index);

    const handleChannel = (channel) =>{
        let ch = channel;
        setChannelDisplay(ch);
        setChannel(ch -1 );
    }

    const resetChannel = () =>{
        setChannelDisplay(0);
        setChannel(0);
        setMovieData(" ");
    }

    const channelItems = channels.map((channel)=>{
        if (typeof channel == 'number'){
            return <div className='channel-digit' onClick={()=>{handleChannel(channel)}}>{channel}</div>
        }
        else if(channel === 'Enter'){
            return <div id='channel-enter'>{channel}</div>
        }
        else{
            return <div id='channel-clear' onClick={()=>{resetChannel()}}>{channel}</div>
        }
    });

  return (
    <div className='channel-container'>
        {channelItems}
        {channelDisplay}
    </div>
  )
}

export default ChannelNumbers