const app = require("./app")

const PORT = process.env.PORT || 5001
const start = async ()=>{
    try {
        app.listen({port: PORT});
        app.log.info(`Server is running on http://localost:${PORT}`)
        
    } catch (error) {
        console.log(error)
        app.log.error(error)
        process.exit(1)   
    }   
} 

start()