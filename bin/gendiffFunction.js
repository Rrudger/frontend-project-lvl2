import { readFileSync } from 'fs';
import path from 'path';
import _ from 'lodash';

export default function gendiff(path1, path2) {
  const obj1 = JSON.parse(readFileSync(path.resolve('__fixtures__', path1.split('/').pop())));
  const obj2 = JSON.parse(readFileSync(path.resolve('__fixtures__', path2.split('/').pop())));
  const arr = _.sortBy(_.uniq(Object.keys(obj1).concat(Object.keys(obj2))));
  const result = {};
  const objKeys1 = Object.keys(obj1);
  const objKeys2 = Object.keys(obj2);
  arr.forEach((item) => {
    if (objKeys1.includes(item)) {
      if (objKeys2.includes(item)) {
        if (obj1[item] === obj2[item]) {
          result[`${item}`] = obj1[item];
        } else {
          result[`- ${item}`] = obj1[item];
          result[`+ ${item}`] = obj2[item];
        }
      } else {
        result[`- ${item}`] = obj1[item];
      }
    } else {
      result[`+ ${item}`] = obj2[item];
    }
  });
  return JSON.stringify(result);
}
