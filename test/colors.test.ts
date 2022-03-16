import {
  getAllTodoistColors,
  getTodoistColorById,
  getTodoistColorByName,
} from '../src';

test('Returns all as array', () => {
  expect(getAllTodoistColors()).toMatchSnapshot();
});

test('Returns by ID', () => {
  const color = getTodoistColorById(41);

  expect(color).toEqual({
    hexColor: '#6accbc',
    id: 41,
    name: 'blue',
  });
});

test('Returns by name', () => {
  const color = getTodoistColorByName('green');

  expect(color).toEqual({
    hexColor: '#299438',
    id: 36,
    name: 'green',
  });
});
