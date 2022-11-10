/* eslint-disable no-undef */
import { addTask, taskArr } from './src/models/components';

test('New item added', () => {
  addTask(
    (taskObj.index = 1),
    (taskObj.description = 'Read book'),
    (taskObj.completed = false),
  );
  expect(taskArr).toHaveLength(1);
});
