function getInputSomething(): string {
    return '1341534';
}

function loadFromDatabase(id: number) {
    return {
        id,
        name: '张三',
        age: 25
    }
}

const id_str = getInputSomething();
const id = parseInt(id_str);

if (isNaN(id)) {
    console.error('Invalid ID provided');
} else {
    let {name, age} = loadFromDatabase(id);
    console.log(name, age);
}