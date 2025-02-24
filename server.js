// import { createServer } from 'node:http'

// const server = createServer((request, response) => {
//     response.write('oi') 
        
//     return response.end()
    
// })

// server.listen(3333)

// SERVER WITH MICRO-FRAMEWORK FASTIFY

import { fastify } from 'fastify'

const server = fastify()

server.get('/', () =>{
    return 'Hello World'
})



server.get('/alestis', () =>{
    return 'Hello Alestis'
})

server.get('/aciturri', () =>{
    return 'Hello Aciturri'
})

server.listen({
    port: 3333,
})
