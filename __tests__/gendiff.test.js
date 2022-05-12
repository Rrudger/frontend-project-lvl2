import gendiff from '../bin/gendiffFunction.js';

test('test1', () => {
  expect(gendiff('path1', 'path2')).toBe('path1');
});
