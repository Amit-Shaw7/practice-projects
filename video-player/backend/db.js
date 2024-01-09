import mongoose from "mongoose";
export const connectToDB = async (DB_URI) => {
    let dbStatus = ''
    try {
        const connected = await mongoose.connect(DB_URI);
        if (connected) {
            dbStatus = `*    DB Connection: OK`
            // if (process.env.NODE_ENV !== 'test') {
            console.log("****************************")
            console.log('*    Starting Server')
            console.log(`*    Port: ${process.env.PORT || 3000}`)
            console.log(`*    NODE_ENV: ${process.env.NODE_ENV}`)
            console.log(`*    Database: MongoDB`)
            console.log(dbStatus);
            console.log("****************************");
            // }
        }
    } catch (error) {
        dbStatus = `*    Error connecting to DB: ${error.message}\n****************************\n`
    }
}