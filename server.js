const express = require ('express');
const app =  express();

const Datauser = [
    {name: 'Jose'},
    {name: 'Jill'}
]
app.get('/usuarios', (req, res) => {
        res.json({
            sucesso: 'verdadeiro',
            mensagem : 'usuarios obtidos com sucesso',
            usuarios: 'mockuserdata'
        })
})


app.listen(3000,() =>{
    console.log('sever running')
});
