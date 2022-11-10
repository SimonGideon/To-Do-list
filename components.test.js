/**
 * @jest-environment jsdom
 */
import { addTask, taskArr } from './src/models/components';

test('New item added', () => {
  addTask({
    index: 1,
    description: 'Read book',
    completed: false,
  });
  expect(taskArr).toHaveLength(1);
});
