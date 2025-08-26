let amigos = [];

function adicionarAmigo() {
    let amigo = document.getElementById('amigo');
    if (amigo.value == '') {
        alert('Informe o nome do amigo!');
        return;
    }

    let lista = document.getElementById('listaAmigos');
    amigos.push(amigo.value);
    
    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }

    amigo.value = '';
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos!');
        return;
    }
    embaralha(amigos);
    let sorteio = document.getElementById('resultado');

    for (let i = 0; i < amigos.length; i++) {
        let amigoSorteado;
        if (i == amigos.length - 1) {
            amigoSorteado = amigos[0];
        } else {
            amigoSorteado = amigos[i + 1];
        }
        
        sorteio.innerHTML = sorteio.innerHTML + `<p>${amigos[i]}  --> ${amigoSorteado}</p>`;
    }
}

function embaralha(lista) {
    for (let i = lista.length; i; i--) {
        const indiceAleatorio = Math.floor(Math.random() * i);
        [lista[i - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[i - 1]];
    }
}