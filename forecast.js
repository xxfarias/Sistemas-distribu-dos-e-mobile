const axios = require("axios");
//chave de acesso
const appid = "c934854f9d06b1dcad2aa06472958e19"

//cidade
const q = "Limeira"
//unidade de medida
const unidade = "metrics"
// idioma
const idioma = "pt-BR"
// quantidade de resultados
const cont = "10"
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${q}&units=${unidade}&appid=${appid}&lang=${idioma}&cnt=${cont}`;

axios
    .get(url)
    .then((res) => {
        console.log(res);
        return res.data;
    })
    .then((res)=> {
        //Mostrar quantos registros vieram
        console.log(res.cnt);
        return res;
    })

    .then((res) =>{
        //Os dados = a lista de previsões
        console.log("dados", res);
        return res["list"]
    })
    .then((res)=>{
        // para cada elemento da lista, extrair informações
        for (let previsao of res){
            console.log(`
            ${new Date(+previsao.dt * 1000).toLocaleString()},
            ${'Min: ' + previsao.main.temp_min}\u00B0C,
            ${'Max: ' + previsao.main.temp_max}\u00B0C,
            ${'Hum: ' + previsao.main.humidity}%,
            ${previsao.weather[0].description}
            `)
        }
    })