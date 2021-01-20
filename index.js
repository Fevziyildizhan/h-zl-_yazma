document.getElementById('btn').addEventListener('click' , ()=>{

    let car = document.getElementById('text').value.length
    let word = document.getElementById('text').value ;

     word = word.match(/\w+/g)
     word = word.length

    document.getElementById('word').innerHTML = `<p> KARAKTER : ${car}  YAZILANLAR : ${word}</p>`
    
})