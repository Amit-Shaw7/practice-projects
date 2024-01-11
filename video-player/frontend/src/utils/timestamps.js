const regex = /^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d\.\d{3}$/;

export const verifyTimeStamps = (startTime , setStartTimeError, endTime , setEndTimeError) => {
    const startTimeVerified = verifyStartTime(startTime , setStartTimeError);
    const endTimeVerified = verifyEndTime(endTime , setEndTimeError);

    if (startTimeVerified && endTimeVerified) {
        return true;
    }
    return false;
};

const verifyStartTime = (startTime , setStartTimeError) => {
    const verified = regex.test(startTime);
    if (!verified) {
        setStartTimeError("The input must be in 00:00:00.000 format");
        return false;
    }
    return true;
};

const verifyEndTime = (endTime , setEndTimeError) => {
    const verified = regex.test(endTime);
    if (!verified) {
        setEndTimeError("The input must be in 00:00:00.000 format");
        return false;
    }
    return true;
};

