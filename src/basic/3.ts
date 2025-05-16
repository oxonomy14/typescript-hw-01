//Завдання 3
//Створіть змінну, яка може містити або рядок, або число (union type)?
// Також, оголосіть змінну, яка може містити лише одне з двох можливих рядкових значень: 'enable' або 'disable' (literal type).

let mixeType: string | number;

mixeType = "hello";
mixeType = 10;

type enableOrDisable = "enable" | "disable";

let value: enableOrDisable;

value = "enable";
value = "disable";
