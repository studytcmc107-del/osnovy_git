function showMenu(): void {
    console.log("Меню");
    console.log("1. Сложение");
    console.log("2. Вычитание");
    console.log("3. Умножение");
    console.log("4. Деление");
    console.log("0. Выход");
}

function add(a: number, b: number): number {
    return a + b;
}

function subtract(a: number, b: number): number {
    return a - b;
}

showMenu();
