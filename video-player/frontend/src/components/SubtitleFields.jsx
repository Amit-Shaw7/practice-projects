import PropTypes from 'prop-types'
import React from 'react'
import Input from './Input';
import { verifyTimeStamps } from '../utils/timestamps';
import Button from './Button';

const SubtitleFields = ({ handleSubtitleArray }) => {


    const [startTime, setStartTime] = React.useState('');
    const [startTimeError, setStartTimeError] = React.useState('');
    const [endTime, setEndTime] = React.useState('');
    const [endTimeError, setEndTimeError] = React.useState('');
    const [subtitleText, setSubtitleText] = React.useState('');


    const handleStartTimeChange = (e) => {
        setStartTime(e.target.value);
        setStartTimeError("");
    };

    const handleEndTimeChange = (e) => {
        setEndTime(e.target.value);
        setEndTimeError("");
    };

    const handleSubtitleTextChange = (e) => {
        setSubtitleText(e.target.value);
    };

    const callHandleSubtitleArrayFn = (e) => {
        e.preventDefault();
        const timeStampVerified = verifyTimeStamps(startTime, setStartTimeError, endTime, setEndTimeError);
        if (timeStampVerified) {
            handleSubtitleArray(startTime, endTime, subtitleText);
            emptyAllFeilds();
        }
    }

    const emptyAllFeilds = () => {
        setStartTime('');
        setEndTime('');
        setSubtitleText('');
    }

    return (
        <div
            id="subtitleFeilds"
            className='flex flex-col gap-5 w-full items-center justify-center'
        >
            <Input
                label="Start Time"
                name="startTime"
                value={startTime}
                handleChange={handleStartTimeChange}
                type="text"
                error={startTimeError}
            />
            <Input
                label="End Time"
                name="endTime"
                value={endTime}
                handleChange={handleEndTimeChange}
                type="text"
                error={endTimeError}
            />
            <Input
                label="Subtitle Text"
                name="subtitleText"
                value={subtitleText}
                handleChange={handleSubtitleTextChange}
                type="text"
            />

            <Button
                type="button"
                text='Add Subtitle'
                onClick={callHandleSubtitleArrayFn}
                fullWidth
            />
        </div>
    )
}

export default SubtitleFields;

SubtitleFields.propTypes = {
    subtitleArray: PropTypes.array.isRequired,
    handleSubtitleArray: PropTypes.func,
}
