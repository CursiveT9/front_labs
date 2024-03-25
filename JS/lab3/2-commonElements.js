function commonElements(array1, array2){
    let common = [];
    for(let i = 0; i < array1.length; i++){
        for(let j = 0; j < array2.length; j++){
            if(array1[i] === array2[j]){
                common.push(array1[i]);
            }
        }
    }
    for (let i = 0; i < common.length; i++){
        console.log(common[i]);
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']);
commonElements(['R', 'u', 's', 's', 'i', 'a'],
    ['R', 'u', 't']);