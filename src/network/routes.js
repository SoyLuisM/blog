const router = (server) => {
    server.get('/',(req,res)=>{
        res.send('holaaaa');
    });
}

module.exports = router