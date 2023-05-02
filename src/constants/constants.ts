export const OPTIONS = [
  "Все",
  "Активный",
  "Отмененный",
  "Завершенный",
] as const;

export const INITIAL_OPTION = "Статус";

export const NAVIGATION = [1, 2, 3, 4, 5];

export const TABLE_HEAD = [
  "Название",
  "Описание",
  "Пользователь",
  "Дата создания",
  "Дата исполнения",
  "Статус",
];

export const FIRST_ROW = [
  " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod",
  "Иванов В. Н.",
  "02.01.2023",
  "-",
  "Активный",
];

export const SECOND_ROW = [
  " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod",
  "Сидоров В. Н.",
  "02.01.2023",
  "03.01.2023",
  "Завершенный",
];

export enum IDs {
  First = "Название 1",
  Second = "Название 2",
}
