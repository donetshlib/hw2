// Ініціалізація
const stringQueue = new Queue();
const numberQueue = new Queue();
const worker = new Worker("Іван Петренко", 30, "Розробник", 50000);

// Завдання 1: Enums
function checkDay() {
    const select = document.getElementById('daySelect');
    const selectedDay = Days[select.value];
    const activity = getActivity(selectedDay);
    const result = `День: ${selectedDay}, Активність: ${activity}`;
    
    console.log('=== ENUMS ===');
    console.log(result);
    
    document.getElementById('activityResult').textContent = result;
}

// Завдання 2: Generics - Рядки
function addString() {
    const input = document.getElementById('stringInput');
    if (input.value.trim()) {
        stringQueue.enqueue(input.value);
        const result = `Додано: "${input.value}". Всього в черзі: ${stringQueue.size()}`;
        
        console.log('=== QUEUE (STRING) ===');
        console.log(result);
        
        document.getElementById('stringQueueResult').textContent = result;
        input.value = '';
    }
}

function removeString() {
    const item = stringQueue.dequeue();
    let result;
    
    if (item !== undefined) {
        result = `Видалено: "${item}". Залишилось: ${stringQueue.size()}`;
    } else {
        result = 'Черга порожня!';
    }
    
    console.log('=== QUEUE (STRING) ===');
    console.log(result);
    
    document.getElementById('stringQueueResult').textContent = result;
}

// Завдання 2: Generics - Числа
function addNumber() {
    const input = document.getElementById('numberInput');
    const num = parseFloat(input.value);
    
    if (!isNaN(num)) {
        numberQueue.enqueue(num);
        const result = `Додано: ${num}. Всього в черзі: ${numberQueue.size()}`;
        
        console.log('=== QUEUE (NUMBER) ===');
        console.log(result);
        
        document.getElementById('numberQueueResult').textContent = result;
        input.value = '';
    }
}

function removeNumber() {
    const item = numberQueue.dequeue();
    let result;
    
    if (item !== undefined) {
        result = `Видалено: ${item}. Залишилось: ${numberQueue.size()}`;
    } else {
        result = 'Черга порожня!';
    }
    
    console.log('=== QUEUE (NUMBER) ===');
    console.log(result);
    
    document.getElementById('numberQueueResult').textContent = result;
}

// Завдання 3: Type Aliases
function combineValues() {
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;
    let result;
    
    try {
        let val1 = input1;
        let val2 = input2;

        const num1 = parseFloat(input1);
        const num2 = parseFloat(input2);

        if (!isNaN(num1) && !isNaN(num2)) {
            val1 = num1;
            val2 = num2;
        }

        const res = combine(val1, val2);
        result = `Результат: ${res}`;
        
        console.log('=== TYPE ALIASES ===');
        console.log(result);
        
    } catch (error) {
        result = `Помилка: ${error.message}`;
        
        console.error('=== TYPE ALIASES ERROR ===');
        console.error(result);
    }
    
    document.getElementById('combineResult').textContent = result;
}

// Завдання 4: Interfaces
function showWorkerInfo() {
    const info = worker.getInfo();
    
    console.log('=== INTERFACES ===');
    console.log(info);
    
    document.getElementById('workerInfo').textContent = info;
}

function updateSalary() {
    const input = document.getElementById('newSalary');
    const newSalary = parseFloat(input.value);
    let result;
    
    try {
        worker.setSalary(newSalary);
        result = `Зарплата оновлена! ${worker.getInfo()}`;
        
        console.log('=== INTERFACES ===');
        console.log(result);
        
        input.value = '';
    } catch (error) {
        result = `Помилка: ${error.message}`;
        
        console.error('=== INTERFACES ERROR ===');
        console.error(result);
    }
    
    document.getElementById('salaryResult').textContent = result;
}