const express = require ('express');
const app =  express();

const Datauser = [
    {name: 'Jose'},
    {name: 'Jill'}
]
app.get('/users', (req, res) => {
        res.json({
            sucesso: 'verdadeiro',
            mensagem : 'usuarios obtidos com sucesso',
            usuarios: 'mockuserdata'
        })
})

app.listen(3000,() =>{
    app.get('/users/:id',(req,res)=>{
        console.log(req.params.id)
        res.json({
            sucesso: true,
            mensagem: 'got one user',
            user: req.params.id
        })
    })
    console.log('sever running')
});
