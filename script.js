const ANO_MINIMO = 1922;
const ANO_MAXIMO_NASCIMENTO = new Date().getFullYear();

const form = document.getElementById('form-idade');
const nomeCompletoInput = document.getElementById('nomeCompleto');
const anoNascimentoInput = document.getElementById('anoNascimento');
const anoCalculoInput = document.getElementById('anoCalculo');
const mensagemErroEl = document.getElementById('mensagemErro');
const resultadoDiv = document.getElementById('resultado');
const textoResultadoEl = document.getElementById('textoResultado');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    mensagemErroEl.textContent = '';
    resultadoDiv.classList.add('hidden');

    const nomeCompleto = nomeCompletoInput.value.trim();
    const anoNascimentoStr = anoNascimentoInput.value;
    const anoCalculoStr = anoCalculoInput.value;

    if (nomeCompleto === '') {
        mensagemErroEl.textContent = 'Erro: Por favor, digite seu nome completo.';
        return; 
    }

    const anoNascimento = parseInt(anoNascimentoStr);
    const anoCalculo = parseInt(anoCalculoStr);

    if (isNaN(anoNascimento) || anoNascimento < ANO_MINIMO || anoNascimento > ANO_MAXIMO_NASCIMENTO) {
        mensagemErroEl.textContent = `Erro: Ano de nascimento inválido. Por favor, digite um ano entre ${ANO_MINIMO} e ${ANO_MAXIMO_NASCIMENTO}.`;
        return;
    }

    if (isNaN(anoCalculo) || anoCalculo < anoNascimento) {
        mensagemErroEl.textContent = `Erro: O ano para cálculo deve ser um número e maior que o seu ano de nascimento.`;
        return;
    }

    const idade = anoCalculo - anoNascimento;

    textoResultadoEl.innerHTML = `<strong>Nome:</strong> ${nomeCompleto}<br>
                                  Você terá (ou teve) <strong>${idade} anos</strong> em ${anoCalculo}.`;
    resultadoDiv.classList.remove('hidden');
});