const criaCalculadora = () => {
    let oTable = document.createElement('table');

    oTable.appendChild(criaTr());
    oTable.appendChild(criaTr([7,   8,   9, '%']));
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
    oDivConteudo.style = 'width: 100%; height: 75px; border: 1px lightgray solid; font-size: 80px; text-align: right';
    oTd.setAttribute('colspan', 4);
    oTd.appendChild(oDivConteudo);
    return oTd;
}

const criaTd = valor => {
    let oTd = document.createElement('td');
    let oElemento = document.createElement('button');

    oElemento.value = valor;
    oElemento.textContent = valor;
    oElemento.style = 'width: 75px; height: 75px; font-size: 30px; cursor: pointer;';
    oElemento.addEventListener('click', function() {
        let oDivConteudo = document.getElementById('divConteudo');
        oDivConteudo.textContent = `${oDivConteudo.innerHTML}${this.value}`;
    });
    oTd.appendChild(oElemento);

    return oTd;
}

window.onload = () => criaCalculadora();