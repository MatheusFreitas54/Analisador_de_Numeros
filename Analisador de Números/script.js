var num = document.getElementById('fnum')
var lista = document.querySelector('select#flista')
let res = document.getElementById('res')
let valores = []

// Função de verificação para ver se o número está no intevalo correto 
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 1000) {
        return true
    } else {
        return false
    }
}

// Função de verificação para ver se o número já está na lista 
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false 
    }

}

// Comando para chamar a função 'adicionar' com o botão enter
document.addEventListener('keypress', start)
function start(e) {
    if(e.key === 'Enter') {
        var btn = document.querySelector('input#enter');
        btn.click()
    }
}

// Função do botão adicionar
function adicionar() {  
    if  (num.value.length == 0) {
        window.alert(' [ERRO] Por favor, digite um número!')
    } else if (isNumero(num.value) && !inLista(num.value,valores)) {
        valores.push(Number(num.value))
        //lista.innerHTML = ''
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert(' [ERRO] Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

// Função do botão finalizar
function finalizar() {
    if (valores.length == 0) {
        window.alert(' [ERRO] Adicione valores antes de finalizar!')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        let media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos <strong>${total}</strong> números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi <strong>${maior}</strong></p>`
        res.innerHTML += `<p>O menor valor informado foi <strong>${menor}</strong></p>`
        res.innerHTML += `<p>Somando todos os valores, temos <strong>${soma}</strong></p>`
        res.innerHTML += `<p>A média dos valores digitados é <strong>${media}</strong></p>`
    }
}