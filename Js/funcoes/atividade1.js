const alunos = [

    {
        nome: 'Igor',
        nota: 6,
        turma: '2E'
    },
    {
        nome: 'Maria',
        nota: 9,
        turma: '2A'
    },
    {
        nome: 'Murilo',
        nota: 7,
        turma: '2B'
    },
    {
        nome: 'Renata',
        nota: 10,
        turma: '2A'
    },
];


function alunoApv(arr, media){

    let alunosAprovados = [];


    for(let i = 0; i < arr.length; i++){
        //Utilizando object destructing
        const {nota, nome} = arr[i];

        if(nota >= media){

            alunosAprovados.push(nome);
        }
    }

    return alunosAprovados;
}


console.log(alunoApv(alunos, 7))