const app = require('./route')
const mongoose = require('mongoose')
const keys = require("./config/keys")
const http = require('http').Server(app);
const io = require('socket.io')(http);

const db = keys.mongoURI;
const port = keys.PORT

mongoose.connect( db, { 
     useNewUrlParser: true, 
     useUnifiedTopology: true,
     useFindAndModify: false,
     useCreateIndex: true})
 .then(()=>console.log('MongoDB succesfully Connected'))
 .catch(err => console.log(err))


const map = new Map()

const server = http.listen(port, function() {
    console.log('Server is running on port: ' + port)
   });
``
io.on('connection', socket  =>{
    socket.on('room', (room) => {
      map.set(socket.id,room)

      socket.join(map.get(socket.id))
    });
  
    // Listen for chatMessage
    socket.on('message', msg => {
      room = map.get(socket.id)
      console.log(msg)
      socket.broadcast.to(room).emit('message', msg);
    });
    
    // Runs when client disconnects
    socket.on('disconnect', () => {   
        socket.leave(map.get(socket.id)) 
        map.delete(socket.id)
    });
});

module.exports = server;
                            