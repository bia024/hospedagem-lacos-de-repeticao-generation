const exercises = [
    {
        fileName: "Exercicio1For.js",
        title: "Lista 01 - Laço de Repetição For",
        code: `const leia = require("readline-sync");

let primeiroNumero = leia.questionInt("Digite o primeiro numero do intervalo: ");
let ultimoNumero = leia.questionInt("Digite o último número do intervalo: ");

if (primeiroNumero >= ultimoNumero) {
    console.log("Intervalo inválido!");
} else {
    console.log("\\nNo Intervalo entre \${primeiroNumero} e \${ultimoNumero}:\\n");

    let encontrouMultiplo = false;

    for (let contador = primeiroNumero; contador <= ultimoNumero; contador++) {
        if (contador % 3 === 0 && contador % 5 === 0) {
            console.log(\`\${contador} é múltiplo de 3 e 5!\`);
            encontrouMultiplo = true;
        }
    }

    if (!encontrouMultiplo) {
        console.log("Nenhum número múltiplo de 3 e 5 foi encontrado neste intervalo.");
    }
}`,
        execute: async (mockConsole, mockInput) => {
            try {
                const leia = {
                    questionInt: async (msg) => parseInt(await mockInput(msg)),
                    question: async (msg) => await mockInput(msg),
                    questionFloat: async (msg) => parseFloat(await mockInput(msg))
                };

                let primeiroNumero = await leia.questionInt("Digite o primeiro numero do intervalo: ");
                let ultimoNumero = await leia.questionInt("Digite o último número do intervalo: ");

                if (primeiroNumero >= ultimoNumero) {
                    mockConsole.log("Intervalo inválido!");
                } else {
                    mockConsole.log(`\\nNo Intervalo entre \${primeiroNumero} e \${ultimoNumero}:\\n`);

                    let encontrouMultiplo = false;

                    for (let contador = primeiroNumero; contador <= ultimoNumero; contador++) {
                        if (contador % 3 === 0 && contador % 5 === 0) {
                            mockConsole.log(`\${contador} é múltiplo de 3 e 5!`);
                            encontrouMultiplo = true;
                        }
                    }

                    if (!encontrouMultiplo) {
                        mockConsole.log("Nenhum número múltiplo de 3 e 5 foi encontrado neste intervalo.");
                    }
                }

            } catch (error) {
                mockConsole.error("Erro na execução: " + error.message);
            }
        }
    },
    {
        fileName: "Exercicio3.js",
        title: "Lista 02 - Laço de Repetição While",
        code: `const leia = require("readline-sync");

let menores21 = 0;
let maiores50 = 0;
let idade;

console.log("=== Digite 0 para sair ===\\n");

do {
    idade = leia.questionInt("Digite uma idade: ");

    if (idade > 0) {
        if (idade < 21) {
            menores21++;
        } else if (idade > 50) {
            maiores50++;
        }
    }

} while (idade !== 0);

console.log(\`\\nTotal de pessoas menores de 21 anos: \${menores21}\`);
console.log(\`Total de pessoas maiores de 50 anos: \${maiores50}\`);`,
        execute: async (mockConsole, mockInput) => {
            try {
                const leia = {
                    questionInt: async (msg) => parseInt(await mockInput(msg))
                };

                let menores21 = 0;
                let maiores50 = 0;
                let idade;

                mockConsole.log("=== Digite 0 para sair ===\\n");

                do {
                    idade = await leia.questionInt("Digite uma idade: ");

                    if (idade > 0) {
                        if (idade < 21) {
                            menores21++;
                        } else if (idade > 50) {
                            maiores50++;
                        }
                    }

                } while (idade !== 0);

                mockConsole.log(`\\nTotal de pessoas menores de 21 anos: \${menores21}`);
                mockConsole.log(`Total de pessoas maiores de 50 anos: \${maiores50}`);

            } catch (error) {
                mockConsole.error("Erro na execução: " + error.message);
            }
        }
    },
    {
        fileName: "Exercicio5.js",
        title: "Lista 03 - Laço de Repetição Do While",
        code: `const leia = require("readline-sync");

let numero;
let somaPositivos = 0;

console.log("=== SOMA DE POSITIVOS (Digite 0 para encerrar) ===\\n");

do {
    numero = leia.questionInt("Digite um numero: ", {
        limitMessage: "Por favor, digite um numero inteiro valido.",
    });

    if (numero > 0) {
        somaPositivos += numero;
    }

} while (numero !== 0);

console.log(\`\\nA soma dos numeros positivos é: \${somaPositivos}\`);`,
        execute: async (mockConsole, mockInput) => {
            try {
                const leia = {
                    questionInt: async (msg, opts) => parseInt(await mockInput(msg))
                };

                let numero;
                let somaPositivos = 0;

                mockConsole.log("=== SOMA DE POSITIVOS (Digite 0 para encerrar) ===\\n");

                do {
                    numero = await leia.questionInt("Digite um numero: ");

                    if (numero > 0) {
                        somaPositivos += numero;
                    }

                } while (numero !== 0);

                mockConsole.log(`\\nA soma dos numeros positivos é: \${somaPositivos}`);

            } catch (error) {
                mockConsole.error("Erro na execução: " + error.message);
            }
        }
    },
    {
        fileName: "Exercicio7.js",
        title: "Lista 04 - Vetores",
        code: `const leia = require("readline-sync");

const vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

console.log("=== PESQUISA EM VETOR ===");

let numeroProcurado = leia.questionInt("Digite o numero que voce deseja encontrar: ");

let posicao = vetor.indexOf(numeroProcurado);

if (posicao !== -1) {
    console.log(\`O número \${numeroProcurado} está localizado na posição: \${posicao}\`);
} else {
    console.log(\`O número \${numeroProcurado} não foi encontrado!\`);
}`,
        execute: async (mockConsole, mockInput) => {
            try {
                const leia = {
                    questionInt: async (msg) => parseInt(await mockInput(msg))
                };

                const vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

                mockConsole.log("=== PESQUISA EM VETOR ===");

                let numeroProcurado = await leia.questionInt("Digite o numero que voce deseja encontrar: ");

                let posicao = vetor.indexOf(numeroProcurado);

                if (posicao !== -1) {
                    mockConsole.log(`O número \${numeroProcurado} está localizado na posição: \${posicao}`);
                } else {
                    mockConsole.log(`O número \${numeroProcurado} não foi encontrado!`);
                }

            } catch (error) {
                mockConsole.error("Erro na execução: " + error.message);
            }
        }
    },
    {
        fileName: "Exercicio9.js",
        title: "Lista 05 - Matriz ",
        code: `const leia = require("readline-sync");

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let diagonalPrincipal = "";
let diagonalSecundaria = "";
let somaPrincipal = 0;
let somaSecundaria = 0;

for (let i = 0; i < 3; i++) {
    diagonalPrincipal += matriz[i][i] + " ";
    somaPrincipal += matriz[i][i];

    diagonalSecundaria += matriz[i][2 - i] + " ";
    somaSecundaria += matriz[i][2 - i];
}

console.log("\nElementos da Diagonal Principal:");
console.log(diagonalPrincipal);

console.log("\nElementos da Diagonal Secundária:");
console.log(diagonalSecundaria);

console.log(\`\\nSoma dos Elementos da Diagonal Principal: \${somaPrincipal}\`);
console.log(\`Soma dos Elementos da Diagonal Secundária: \${somaSecundaria}\`);`,
        execute: async (mockConsole, mockInput) => {
            try {
                const leia = {
                    questionInt: async (msg) => parseInt(await mockInput(msg))
                };

                const vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

                mockConsole.log("=== PESQUISA EM VETOR ===");

                let numeroProcurado = await leia.questionInt("Digite o numero que voce deseja encontrar: ");

                let posicao = vetor.indexOf(numeroProcurado);

                if (posicao !== -1) {
                    mockConsole.log(`O número \${numeroProcurado} está localizado na posição: \${posicao}`);
                } else {
                    mockConsole.log(`O número \${numeroProcurado} não foi encontrado!`);
                }

            } catch (error) {
                mockConsole.error("Erro na execução: " + error.message);
            }
        }
    }
];

let currentExerciseIndex = 0;

const fileList = document.getElementById('fileList');
const currentFileName = document.getElementById('currentFileName');
const codeDisplay = document.getElementById('codeDisplay');
const runBtn = document.getElementById('runBtn');
const clearBtn = document.getElementById('clearBtn');
const consoleOutput = document.getElementById('consoleOutput');

function init() {
    renderFileList();
    loadExercise(0);
}

function renderFileList() {
    fileList.innerHTML = '';
    exercises.forEach((ex, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fa-brands fa-js"></i> ${ex.fileName}`;
        if (index === currentExerciseIndex) li.classList.add('active');
        li.onclick = () => loadExercise(index);
        fileList.appendChild(li);
    });
}

function loadExercise(index) {
    currentExerciseIndex = index;
    const ex = exercises[index];

    const items = fileList.querySelectorAll('li');
    items.forEach(i => i.classList.remove('active'));
    items[index].classList.add('active');

    currentFileName.textContent = `${ex.fileName} - ${ex.title}`;

    codeDisplay.textContent = ex.code;
    hljs.highlightElement(codeDisplay);

    clearConsole();
}

const mockConsole = {
    log: (text) => appendToTerminal(text, 'output'),
    error: (text) => appendToTerminal(text, 'error')
};

const mockInput = async (message) => {
    return new Promise(resolve => {
        const div = document.createElement('div');
        div.classList.add('terminal-line', 'input-prompt');
        div.innerHTML = `<span>${message} </span><input type="text" style="background:transparent; border:none; color:white; outline:none; font-family:inherit;">`;
        consoleOutput.appendChild(div);

        const input = div.querySelector('input');
        input.focus();

        consoleOutput.scrollTop = consoleOutput.scrollHeight;

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const val = input.value;
                div.innerHTML = `<span>${message} </span><span style="color: #fff">${val}</span>`;
                resolve(val);
            }
        });
    });
};

function appendToTerminal(text, type = 'output') {
    const div = document.createElement('div');
    div.classList.add('terminal-line', type);
    div.textContent = text;
    consoleOutput.appendChild(div);
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
}

function clearConsole() {
    consoleOutput.innerHTML = '<div class="terminal-line text-muted">Pronto para executar...</div>';
}

runBtn.addEventListener('click', () => {
    clearConsole();
    const ex = exercises[currentExerciseIndex];
    if (ex && ex.execute) {
        ex.execute(mockConsole, mockInput);
    }
});

clearBtn.addEventListener('click', clearConsole);

init();
