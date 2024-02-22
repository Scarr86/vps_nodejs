// подключение express
const express = require("express");
const path = require('path')
// создаем объект приложения
const app = express();
const port = 3000;

const data = [
    {
        _id: 1,
        body: "sdfsdfsdfqw41234"
    },
    {
        _id: 2,
        body: "231bnjklh34k2b4bk"
    }
];


app.use(express.static(__dirname));
// определяем обработчик для маршрута "/"
app.get("/", function(request, response){
    response.sendFile(path.join(__dirname));
});
app.get("/data", function(request, response){
    response.send(JSON.stringify(data));
});
// начинаем прослушивать подключения на 3000 порту
app.listen(port, ()=> console.log(`server start to port: ${port}`));