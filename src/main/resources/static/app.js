const BASE_URL = 'https://parallelum.com.br/fipe/api/v1';

async function fetchJson(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Erro ao buscar ${url}`);
    }
    return await response.json();
}

async function carregarMarcas() {
    const tipo = document.getElementById('tipo').value;
    const marcas = await fetchJson(`${BASE_URL}/${tipo}/marcas`);
    const selectMarca = document.getElementById('marca');
    selectMarca.innerHTML = '<option value="">Selecione</option>' +
        marcas.map(m => `<option value="${m.codigo}">${m.nome}</option>`).join('');
    document.getElementById('modelo').innerHTML = '';
    document.getElementById('ano').innerHTML = '';
}

async function carregarModelos() {
    const tipo = document.getElementById('tipo').value;
    const marca = document.getElementById('marca').value;
    if (!marca) return;
    const dados = await fetchJson(`${BASE_URL}/${tipo}/marcas/${marca}/modelos`);
    const selectModelo = document.getElementById('modelo');
    selectModelo.innerHTML = '<option value="">Selecione</option>' +
        dados.modelos.map(m => `<option value="${m.codigo}">${m.nome}</option>`).join('');
    document.getElementById('ano').innerHTML = '';
}

async function carregarAnos() {
    const tipo = document.getElementById('tipo').value;
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    if (!modelo) return;
    const anos = await fetchJson(`${BASE_URL}/${tipo}/marcas/${marca}/modelos/${modelo}/anos`);
    const selectAno = document.getElementById('ano');
    selectAno.innerHTML = '<option value="">Selecione</option>' +
        anos.map(a => `<option value="${a.codigo}">${a.nome}</option>`).join('');
}

async function carregarVeiculo() {
    const tipo = document.getElementById('tipo').value;
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const ano = document.getElementById('ano').value;
    if (!ano) return;
    const veiculo = await fetchJson(`${BASE_URL}/${tipo}/marcas/${marca}/modelos/${modelo}/anos/${ano}`);
    const tbody = document.querySelector('#resultado tbody');
    tbody.innerHTML = `<tr><td>${veiculo.Marca}</td><td>${veiculo.Modelo}</td><td>${veiculo.AnoModelo}</td><td>${veiculo.Valor}</td></tr>`;
}

document.getElementById('tipo').addEventListener('change', carregarMarcas);
document.getElementById('marca').addEventListener('change', carregarModelos);
document.getElementById('modelo').addEventListener('change', carregarAnos);
document.getElementById('ano').addEventListener('change', carregarVeiculo);

carregarMarcas();
