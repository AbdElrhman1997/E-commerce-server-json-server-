const data=require('./db.js');
const jsonServer=require('json-server');
const server=jsonServer.create();
const router=server.router(data);
const middlewares=jsonServer.defaults();
const port=process.env.PORT||3000;

server.use(middlewares);
server.use(router);

server.listen(port,()=>{
    console.log(`App runing in port ${port}`);
});
