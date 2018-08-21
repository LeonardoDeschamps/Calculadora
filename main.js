let fTotal = 0;
let sOperacao = '';

const criaCalculadora = () => {
    let oTable = document.createElement('table');

    oTable.appendChild(criaTr());
    oTable.appendChild(criaTr([7,   8,   9, '/']));
    oTable.appendChild(criaTr([4,   5,   6, 'x']));
    oTable.appendChild(criaTr([1,   2,   3, '-']));
    oTable.appendChild(criaTr([0, '.', '=', '+']));

    document.getElementById('container').appendChild(oTable);
}

const criaTr = aDados => {
    let oTr = document.createElement('tr');
    
    if(aDados) {
        for(let i in aDados) {
            oTr.appendChild(criaTd(aDados[i]));
        }
    }
    else {
        oTr.appendChild(criaDivConteudo());
    }

    return oTr;
}

const criaDivConteudo = () => {
    let oTd = document.createElement('td');
    let oDivConteudo = document.createElement('div');
    oDivConteudo.id = 'divConteudo';
    oDivConteudo.textContent = 0;
    oDivConteudo.className = 'conteudo';
    oTd.setAttribute('colspan', 4);
    oTd.appendChild(oDivConteudo);
    return oTd;
}

const criaTd = valor => {
    let oTd = document.createElement('td');
    let oElemento = document.createElement('button');

    oElemento.value = valor;
    oElemento.textContent = valor;
    oElemento.className = 'botao';
    oElemento.addEventListener('click', function() {
        let oDivConteudo = document.getElementById('divConteudo');
        if(isNumero(valor) || isPonto(valor)) {
            oDivConteudo.textContent = oDivConteudo.textContent != 0 ? `${oDivConteudo.textContent}${this.value}` : this.value;
        }
        else if(!isIgual(valor)) {
            fTotal = parseFloat(oDivConteudo.textContent);
            sOperacao = valor;
            oDivConteudo.textContent = '';
        }
        else {
            executaOperacao(sOperacao);
        }
    });
    oTd.appendChild(oElemento);

    return oTd;
}

const executaOperacao = sText => {
    let oDivConteudo = document.getElementById('divConteudo');
    switch(sText) {
        case '+':
            fTotal = fTotal + parseFloat(oDivConteudo.textContent);
            oDivConteudo.textContent = fTotal;
        break;
            
        case '-':
            fTotal = fTotal - parseFloat(oDivConteudo.textContent);
            oDivConteudo.textContent = fTotal;
        break;

        case 'x':
            fTotal = fTotal * parseFloat(oDivConteudo.textContent);
            oDivConteudo.textContent = fTotal;
        break;

        case '/':
            fTotal = fTotal / parseFloat(oDivConteudo.textContent);
            oDivConteudo.textContent = fTotal;
        break;
    }
}

const isNumero = valor => typeof valor == 'number'

const isPonto = valor => valor == '.';

const isIgual = valor => valor == '=';

window.onload = () => criaCalculadora();