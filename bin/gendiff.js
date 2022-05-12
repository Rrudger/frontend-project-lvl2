#!/usr/bin/env node

import { program } from 'commander';
import gendiff from './gendiffFunction.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((type) => {
    console.log(gendiff(type));
  });

program.parse();
