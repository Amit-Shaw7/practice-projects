import React from 'react'


// eslint-disable-next-line react/prop-types
const SubtitleComponent = ({handleSubtitleArray , subtitleArray}) => {
    const [startTime, setStartTime] = React.useState("");
    const [endTime, setendTime] = React.useState("");
    const [subtitle, setSubtitle] = React.useState("");

    const emptyFeilds = () => {
        setStartTime("");
        setendTime("");
        setSubtitle("");
    }

    const handleStartTime = (event) => {
        setStartTime(event.target.value);
    };

    const handleendTime = (event) => {
        setendTime(event.target.value)
    };

    const handleSubtitle = (event) => {
        setSubtitle(event.target.value);
    }

    const addInSubtitleArray = () => {
        handleSubtitleArray(startTime, endTime, subtitle);
        emptyFeilds();
    }

    return (
        <div>
            <div>
                <input value={startTime} onChange={(e) => handleStartTime(e)} type="text" placeholder='start time' />
                <input value={endTime} onChange={(e) => handleendTime(e)} type="text" placeholder='endTime' />
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
                            <input value={item.endTime} type="text" placeholder='endTime' />
                            <input value={item.subtitle} type="text" placeholder='subtitle' />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SubtitleComponent