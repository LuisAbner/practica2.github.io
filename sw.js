selft.addEventListener('install',(event)=>{
    console.log('sw:instalado')
})

self.addEventListener('fetch',(event)=>{
    console.log(event.request.url);
})