function rand(min , max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {

        setTimeout(() =>{
            if(typeof msg !== 'string'){
                reject('Erro')
                return;
            }

            resolve(msg + 'Passei na promise');
        }, tempo);
    });
}

async function executa() {
    try{
    const fase1 = await esperaAi('fase 1', rand());
    console.log('fase 1')
    const fase2 = await esperaAi(2, rand());
    console.log('fase 2')
    const fase3 = await esperaAi('fase 3', rand());
    console.log('fase 3') 
    }catch(e){
        console.log('Erro')
    }
}

executa();

// pending -> pedente
// fullfilled -> resolvida
// rejected -> rejeitada


// pending 
const teste2 = esperaAi('qlq', 5000);
console.log(teste2)