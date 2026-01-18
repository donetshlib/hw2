// ========== Завдання 1: Enums ==========
enum Days {
  Monday = "Понеділок",
  Tuesday = "Вівторок",
  Wednesday = "Середа",
  Thursday = "Четвер",
  Friday = "П'ятниця",
  Saturday = "Субота",
  Sunday = "Неділя"
}

function getActivity(day: Days): string {
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
class Queue<T> {
  private items: T[] = [];

  enqueue(item: T): void {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }

  getItems(): T[] {
    return [...this.items];
  }
}

// ========== Завдання 3: Type Aliases ==========
type StringOrNumber = string | number;

function combine(input1: StringOrNumber, input2: StringOrNumber): string | number {
  if (typeof input1 === 'string' && typeof input2 === 'string') {
    return input1 + input2;
  } else if (typeof input1 === 'number' && typeof input2 === 'number') {
    return input1 + input2;
  } else {
    throw new Error("Обидва параметри повинні бути одного типу!");
  }
}

// ========== Завдання 4: Interfaces ==========
interface IPerson {
  name: string;
  age: number;
}

interface IWorker extends IPerson {
  position: string;
  salary: number;
}

class Worker implements IWorker {
  name: string;
  age: number;
  position: string;
  private _salary: number;

  constructor(name: string, age: number, position: string, salary: number) {
    this.name = name;
    this.age = age;
    this.position = position;
    this._salary = salary;
  }

  getSalary(): number {
    return this._salary;
  }

  setSalary(newSalary: number): void {
    if (newSalary > 0) {
      this._salary = newSalary;
    } else {
      throw new Error("Зарплата повинна бути більше 0!");
    }
  }

  getInfo(): string {
    return `${this.name}, ${this.age} років, ${this.position}, зарплата: ${this._salary} грн`;
  }
}