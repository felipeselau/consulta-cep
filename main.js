const cep = document.querySelector("#cep")

const showData = (result)=>{
    for(const campo in result){
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result[campo]
        }
        
    }
}

function pesquisar (){
    let search = cep.value.replace("-","")
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then((response)=>{response.json().then((data)=> showData(data))})
    .catch((e)=> alert("CEP Inválido!"))

    mostraResto()
}

function mostraResto(){
    if(cep.value){
        document.querySelector(".info").id = 'active'
    }
    
}

function limpar(){
    document.querySelector(".info").id = ''
    cep.value = ''
}
//cep.addEventListener("blur", (e)=>{
//    console.log(cep.value)
//    let search = cep.value.replace("-","")
//    console.log(search)
//    const options = {
//        method: 'GET',
//        mode: 'cors',
//        cache: 'default'
//    }
//    console.log(options)
//    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
//    .then((response)=>{response.json().then((data)=> showData(data))})
//    .catch((e)=> console.log("deu ruim"))
//})