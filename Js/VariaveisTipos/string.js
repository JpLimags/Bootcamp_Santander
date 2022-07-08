let Nome = 'João Pedro'
let sobrenome = 'Lima'

let concat = Nome.concat(sobrenome) //Concatena as duas "variáveis (Obs:  mas sem espaçamento entre os conteúdos)"

//console.log(`${Nome.concat(sobrenome)}`);

/*console.log(typeof concat) - Mostrao tipo de dado da variável "
console.log(concat.length) - Pega o tamanho do conteúdo guardadao na "variavel" concat
*/

/*let exemplo = new String("olá") Atenção caso você defina string com letra maiuscula apartir daquele 
momento ela será tratada  com um objeto*/

// console.log(Nome[0]) Mostra o valor da posição selecionada

/*concat = Nome + " " + sobrenome Essa forma de concatear nos permite adicionar um espaço entre as variáveis
console.log(concat)*/

/*concat = Nome + "\n" + sobrenome Aqui fazemos a conatenação dando umaquebra de linha
console.log(concat)*/

/*concat = `${Nome} ${sobrenome}` Dessa forma não a necessida de de utilizar o operador mais para dar espaço
entre as strings concatenadas
console.log(concat)*/

/*concat = `${Nome} 

${sobrenome}` E caso queira pular linhas é só fazer da seguinte forma
console.log(concat)*/
let frase = "Ola, como está ?"

/*let frase = "Ola, como está ?" Dessa forma a frase será mostrada separa letra por letra
frase.split("")*/

/*let frase = "Ola, como está ?" Ja com o espaço a frase será mostrada separa por cada palavra
frase.split(" ")*/

/*frase.includes("como") Verifica se na frase existe a frase que está dentro do parenteses */ 

/*frase.startsWith("O") Verifica se na frase existe a frase que está dentro do parenteses */ 