"use strict";
// ========== Завдання 1: Enums ==========
var Days;
(function (Days) {
    Days["Monday"] = "\u041F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A";
    Days["Tuesday"] = "\u0412\u0456\u0432\u0442\u043E\u0440\u043E\u043A";
    Days["Wednesday"] = "\u0421\u0435\u0440\u0435\u0434\u0430";
    Days["Thursday"] = "\u0427\u0435\u0442\u0432\u0435\u0440";
    Days["Friday"] = "\u041F'\u044F\u0442\u043D\u0438\u0446\u044F";
    Days["Saturday"] = "\u0421\u0443\u0431\u043E\u0442\u0430";
    Days["Sunday"] = "\u041D\u0435\u0434\u0456\u043B\u044F";
})(Days || (Days = {}));
function getActivity(day) {
    switch (day) {
        case Days.Monday:
            return "Початок робочого тижня";
        case Days.Tuesday:
            return "Продуктивна робота";
        case Days.Wednesday:
            return "Середина тижня";
        case Days.Thursday:
            return "Підготовка до вихідних";
        case Days.Friday:
            return "Завершення робочого тижня";
        case Days.Saturday:
            return "Активний відпочинок";
        case Days.Sunday:
            return "Відпочинок";
        default:
            return "Невідомий день";
    }
}
// ========== Завдання 2: Generics ==========
class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(item) {
        this.items.push(item);
    }
    dequeue() {
        return this.items.shift();
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    getItems() {
        return [...this.items];
    }
}
function combine(input1, input2) {
    if (typeof input1 === 'string' && typeof input2 === 'string') {
        return input1 + input2;
    }
    else if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
    }
    else {
        throw new Error("Обидва параметри повинні бути одного типу!");
    }
}
class Worker {
    constructor(name, age, position, salary) {
        this.name = name;
        this.age = age;
        this.position = position;
        this._salary = salary;
    }
    getSalary() {
        return this._salary;
    }
    setSalary(newSalary) {
        if (newSalary > 0) {
            this._salary = newSalary;
        }
        else {
            throw new Error("Зарплата повинна бути більше 0!");
        }
    }
    getInfo() {
        return `${this.name}, ${this.age} років, ${this.position}, зарплата: ${this._salary} грн`;
    }
}
