export type TodoistColor = {
  id: number;
  name: string;
  hexColor: string;
};

const apiColors = [
  {
    id: 30,
    hexColor: '#b8256f',
    name: 'berry_red',
  },
  {
    id: 31,
    hexColor: '#db4035',
    name: 'red',
  },
  {
    name: 'orange',
    id: 32,
    hexColor: '#ff9933',
  },
  {
    id: 33,
    hexColor: '#fad000',
    name: 'yellow',
  },
  {
    name: 'olive_green',
    id: 34,
    hexColor: '#afb83b',
  },
  {
    hexColor: '#299438',
    id: 35,
    name: 'lime_green',
  },
  {
    hexColor: '#299438',
    id: 36,
    name: 'green',
  },
  {
    hexColor: '#6accbc',
    id: 37,
    name: 'mint_green',
  },
  {
    hexColor: '#158fad',
    id: 38,
    name: 'teal',
  },
  {
    hexColor: '#14aaf5',
    id: 39,
    name: 'sky_blue',
  },
  {
    name: 'light_blue',
    id: 40,
    hexColor: '#96c3eb',
  },
  {
    hexColor: '#4073ff',
    id: 41,
    name: 'blue',
  },
  {
    hexColor: '#884dff',
    id: 42,
    name: 'grape',
  },
  {
    hexColor: '#af38eb',
    id: 43,
    name: 'violet',
  },
  {
    hexColor: '#eb96eb',
    id: 44,
    name: 'lavender',
  },
  {
    hexColor: '#e05194',
    id: 45,
    name: 'magenta',
  },
  {
    hexColor: '#ff8d85',
    id: 46,
    name: 'salmon',
  },
  {
    hexColor: '#808080',
    id: 47,
    name: 'charcoal',
  },
  {
    hexColor: '#b8b8b8',
    id: 48,
    name: 'grey',
  },
  {
    hexColor: '#ccac93',
    id: 49,
    name: 'taupe',
  },
] as const;

type ArrayElementType<A> = A extends readonly (infer T)[] ? T : never;

export type TodoistColorsList = typeof apiColors;

export const getAllTodoistColors = () => apiColors;

export const getTodoistColorById = (
  id: ArrayElementType<TodoistColorsList>['id']
) => apiColors.find(color => color.id === id) ?? null;
export const getTodoistColorByName = (
  name: ArrayElementType<TodoistColorsList>['name']
) => getAllTodoistColors().find(item => item.name === name) ?? null;
