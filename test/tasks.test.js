const { getTasks, reset, addTask } = require('../lib/tasks');

beforeEach(() => {
  reset();
});

test('initial task list is empty', () => {
  expect(getTasks()).toEqual([]);
});

test('addTask adds a task correctly', () => {
  const task = addTask('Test task');
  expect(task).toEqual({ id: 1, name: 'Test task', done: false });
  expect(getTasks()).toEqual([task]);
});

test('addTask trims whitespace from task name', () => {
  const task = addTask('   Trimmed task   ');
  expect(task.name).toBe('Trimmed task');
});

test('addTask throws error for invalid names', () => {
  expect(() => addTask('')).toThrow('Invalid task name');
  expect(() => addTask('   ')).toThrow('Invalid task name');
  expect(() => addTask(123)).toThrow('Invalid task name');
});
