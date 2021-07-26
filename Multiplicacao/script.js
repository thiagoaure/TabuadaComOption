function calcular(){
    let num = Number(document.querySelector('input#numero').value)
    let res = document.querySelector('select#tabuada')
    let foto = document.querySelector('div#imgTabuada')
    res.innerHTML = ''

    if (num == 0) {
        window.alert('ERRO! DIGITE UM NÚMERO')
    } else {
        for(let i=0; i<=10; i++){
            let item = document.createElement('option')
            item.text += `${num} x ${i} = ${num*i}`
            item.value = `res${i}` // criacao do value para cada opcao do select, usado para outras linguagens 
            res.appendChild(item)
        }
    }   
}

let img = document.createElement('img') //criando imagem com js
img.setAttribute('id', 'imgTabuada')
img.setAttribute('src', 'imgTabuada.jpg')
imgTabuada.appendChild(img)