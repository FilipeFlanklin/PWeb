var listaProdutos = [];

class Gasto {

    constructor(nome, cod, vlr) {
        this.nome = nome;
        this.cod = cod;
        this.vlr = vlr;
    }


}

class Essencial extends Gasto {
    constructor(nome, cod, vlr, tipo) {
        super(nome, cod, vlr);
        this.tipo = tipo;
    }
}

class Superfluo extends Gasto {
    constructor(nome, cod, vlr, tipo) {
        super(nome, cod, vlr);
        this.tipo = tipo;
    }

    QtdSuperfluo() {
        let count = 0
        for (let i = 0; i < listaProdutos.length; i++) {
            if ('supérfluo' == listaProdutos[i].tipo) {
                count++
            }
        }
        if (count > 5) {
            alert('Cuidado com os Gastos!!')
        }
    }
}


function salvar() {

    var gasto;

    if (buttonsalvar = document.getElementById('salvar').innerText == 'Salvar Novo') {
        switch (document.getElementById('TipoGasto',).value) {
            case 'Essencial':
                gasto = new Essencial(document.getElementById('NmeGasto').value, document.getElementById('CodGasto').value,
                    document.getElementById('VlrGasto').value, document.getElementById('TipoGasto').value);
                break;
            case 'supérfluo':
                gasto = new Superfluo(document.getElementById('NmeGasto').value, document.getElementById('CodGasto').value,
                    document.getElementById('VlrGasto').value, document.getElementById('TipoGasto').value);

                break;
        }
    } else {
        let achou = false
        for (let i = 0; i < listaProdutos.length; i++) {
            if (document.getElementById('CodGasto').value == listaProdutos[i].cod) {
                listaProdutos[i].nome = document.getElementById('NmeGasto').value;
                listaProdutos[i].vlr = document.getElementById('VlrGasto').value;
                listaProdutos[i].tipo = document.getElementById('TipoGasto').value;
                achou = true;
            }
        }
        if (achou == false) {
            alert('Código de edição não encontrado')
        }
        cancelar();
        listar();
    }





    if (verificarCampos(gasto) == true) {
        listaProdutos.push(gasto);
        console.log(listaProdutos);
        listar();
        cancelar();
        gasto.QtdSuperfluo();

    }


}

function verificarCampos(gasto) {
    let aviso = '';

    if (gasto.nome == '') {
        aviso += '.Preencha o campo Nome \n';
    }
    if (gasto.vlr == '') {
        aviso += '.Preencha o campo valor \n';
    }
    if (gasto.cod == '') {
        aviso += '.Preencha o campo código \n';
    }
    for (let i = 0; i < listaProdutos.length; i++) {
        if (gasto.cod == listaProdutos[i].cod) {
            aviso += '.código já existente \n';
        }
    }
    if (aviso == '') {
        return true;
    } else {
        alert(aviso);
    }
}

function listar() {

    let table = document.getElementById('tbody');
    table.innerText = '';

    for (let i = 0; i < listaProdutos.length; i++) {
        tr = document.createElement('tr');

        td = document.createElement('td');
        td.innerText = listaProdutos[i].cod;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerText = listaProdutos[i].nome;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerText = listaProdutos[i].vlr;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerText = listaProdutos[i].tipo;
        tr.appendChild(td);

        buttonEdit = document.createElement('button');
        buttonEdit.innerText = 'Editar';
        buttonEdit.addEventListener('click', function () { editar(listaProdutos[i].cod) });
        tr.appendChild(buttonEdit);

        buttonExcluir = document.createElement('button');
        buttonExcluir.innerText = 'Excluir';
        buttonExcluir.addEventListener('click', function () { excluir(listaProdutos[i].cod) });
        tr.appendChild(buttonExcluir);

        table.appendChild(tr);
    }
}

function cancelar() {
    buttonsalvar = document.getElementById('salvar');
    buttonsalvar.innerText = 'Salvar Novo';
    document.getElementById('NmeGasto').value = document.getElementById('CodGasto').value = document.getElementById('VlrGasto').value = '';
}

function excluir(exCod) {

    for (let i = 0; i < listaProdutos.length; i++) {
        if (exCod == listaProdutos[i].cod) {
            listaProdutos.splice(i, 1);
        }
    }
    listar();
}

function editar(exCod) {
    buttonsalvar = document.getElementById('salvar');
    buttonsalvar.innerText = 'Salvar Edição';

    for (let i = 0; i < listaProdutos.length; i++) {
        if (exCod == listaProdutos[i].cod) {
            document.getElementById('NmeGasto').value = listaProdutos[i].nome;
            document.getElementById('CodGasto').value = listaProdutos[i].cod;
            document.getElementById('VlrGasto').value = listaProdutos[i].vlr;
            document.getElementById('TipoGasto').value = listaProdutos[i].tipo;

        }
    }

    listar();
}