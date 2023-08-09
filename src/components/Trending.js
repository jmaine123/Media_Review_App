import React, {useState} from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


function Trending() {
    const [medium, setMedium] = useState('TV');

    const handleChange = (event, newMedium) => {
      setMedium(newMedium);
    };
  return (
    <div className='trending-container'>
        <h3>{medium}</h3>

        <ToggleButtonGroup
        // color="primary"
        value={medium}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
        >
            <ToggleButton value="TV" className="medium-toggle">TV</ToggleButton>
            <ToggleButton value="Movies" className="medium-toggle">Movies</ToggleButton>
            <ToggleButton value="People" className="medium-toggle">People</ToggleButton>
        </ToggleButtonGroup>
    </div>
  )
}

export default Trending