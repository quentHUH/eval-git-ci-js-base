const { getTasks, reset, addTask, toggleTask, countDone } = require('../lib/tasks');

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

test('toggleTask toggles the done status', () => {
  const { toggleTask } = require('../lib/tasks');
  const task = addTask('Toggle me');
  expect(task.done).toBe(false);
  const toggled = toggleTask(task.id);
  expect(toggled.done).toBe(true);
  const toggledBack = toggleTask(task.id);
  expect(toggledBack.done).toBe(false);
});

test('toggleTask throws error for invalid id', () => {
  const { toggleTask } = require('../lib/tasks');
  expect(() => toggleTask(999)).toThrow('Task not found');
});

test('countDone returns correct number', () => {
  const { toggleTask, countDone } = require('../lib/tasks');
  addTask('Task 1');
  const t2 = addTask('Task 2');
  toggleTask(t2.id);
  expect(countDone()).toBe(1);
});
