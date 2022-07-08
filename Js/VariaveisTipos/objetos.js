let objt = {}

/*typeof objt retorna que o tipo de objt é um objeto*/

/*objt.name = 'Jp' isso nos diz que dentro de objeto temos uma chave chamada name com um valor Jp
*/

/*objt.idade = '19' define uma nova chave*/

/*objt.values nos retorna os valores guardados nas chaves*/

/*objt.keys nos retorna os "nomes" das chaves*/


//Outra forma de declarar as keys e seus values

let person = {

    name: "Jp",
    idade: 19,
    adress: "Rua c"
}

/*Formas de acessar os valores:

person.name -> Jp

person['name'] => Jp

Podemos também criar chaves dessa forma:
*/

person["numberOfSibleings"] = 1

console.log(person)