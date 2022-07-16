function getAdmin(map){

    let adm = [];

    for([key, value] of map){

        if(value === 'Admin'){

            adm.push(key);
        }
    } 
    return adm;
}

const mapUsers = new Map();

mapUsers.set('Ricardo', 'Admin');
mapUsers.set('Luana', 'Admin');
mapUsers.set('Maria', 'User');
mapUsers.set('Marcos', 'User');
mapUsers.set('João', 'Admin');

console.log(getAdmin(mapUsers));