import gendiff from '../bin/gendiffFunction.js';

const result = '{"- follow":false,"host":"hexlet.io","- proxy":"123.234.53.22","- timeout":50,"+ timeout":20,"+ verbose":true}';

test('test1', () => {
  expect(gendiff('file1.json', 'file2.json')).toBe(result);
});
