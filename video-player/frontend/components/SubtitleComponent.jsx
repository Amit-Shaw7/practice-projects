import React from 'react'


// eslint-disable-next-line react/prop-types
const SubtitleComponent = ({handleSubtitleArray , subtitleArray}) => {
    const [startTime, setStartTime] = React.useState("");
    const [endtime, setEndtime] = React.useState("");
    const [subtitle, setSubtitle] = React.useState("");

    const emptyFeilds = () => {
        setStartTime("");
        setEndtime("");
        setSubtitle("");
    }

    const handleStartTime = (event) => {
        setStartTime(event.target.value);
    };

    const handleEndTime = (event) => {
        setEndtime(event.target.value)
    };

    const handleSubtitle = (event) => {
        setSubtitle(event.target.value);
    }

    const addInSubtitleArray = () => {
        handleSubtitleArray(startTime, endtime, subtitle);
        emptyFeilds();
    }

    return (
        <div>
            <div>
                <input value={startTime} onChange={(e) => handleStartTime(e)} type="text" placeholder='start time' />
                <input value={endtime} onChange={(e) => handleEndTime(e)} type="text" placeholder='endtime' />
                <input value={subtitle} onChange={(e) => handleSubtitle(e)} type="text" placeholder='subtitle' />
            </div>
            <button onClick={addInSubtitleArray}>Add</button>

            <br />

            <div id='subtitle-container'>
                {
                    // eslint-disable-next-line react/prop-types
                    subtitleArray?.map((item, idx) => (
                        <div key={idx}>
                            <input value={item.startTime} type="text" placeholder='start time' />
                            <input value={item.endtime} type="text" placeholder='endtime' />
                            <input value={item.subtitle} type="text" placeholder='subtitle' />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SubtitleComponent