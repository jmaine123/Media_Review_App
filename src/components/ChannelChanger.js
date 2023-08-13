import React from 'react';
import ArrowCircleUpTwoToneIcon from '@mui/icons-material/ArrowCircleUpTwoTone';
import ArrowCircleDownTwoToneIcon from '@mui/icons-material/ArrowCircleDownTwoTone';

function ChannelChanger({channel, setChannel, movieData}) {
    let currentIdx = channel;
    // let selectedMovie = movieData[channel];
    let lengthofdata = movieData.length;


    const updateChannelIndex = (direction) => {
        if (movieData.length === 1){
            currentIdx = 0;
        }
        else if (direction === "Left" && currentIdx > 0){
            let newIdx = currentIdx - 1;
            setChannel(newIdx);
        }
        else if(direction ==="Left" && currentIdx <= 0){
            let newIdx = (lengthofdata -1);
            setChannel(newIdx);
        }
        else if(direction === "Right" && currentIdx >= lengthofdata-1){
            let newIdx = 0;
            setChannel(newIdx);
        }
        else{
            setChannel(currentIdx+1);
        }
    }
  return (
        <div className='index-arrows' >
            <div onClick={()=>{updateChannelIndex("Left")}}>
                <ArrowCircleDownTwoToneIcon className='arrow'/>
            </div>
            <div className='channel'>
                <div>{channel + 1}</div>
            </div>
            <div onClick={()=>{updateChannelIndex("Right")}} >
                <ArrowCircleUpTwoToneIcon className='arrow' />
            </div>
        </div>
  )
}

export default ChannelChanger