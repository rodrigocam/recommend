#!/usr/bin/env node

const fs = require('fs');
const csv = require('csv-parser');
const program = require('commander');
const raccoon = require('raccoon');
const package = require('../package.json');

program.version(package.version);
program
    .option('-d, --dataset <path>', 'dataset path')
    .option('-u, --user <user>', 'user which will receive recommendation')
    .option('-r, --recs <number>', 'number of recommendations desired', 10);

function process_dataset(path){
    fs.createReadStream(path)
        .pipe(csv())
	.on('data', (row) => {
	    raccoon.liked(row.user, row.follows);
	})

}

// main
program.parse(process.argv);
raccoon.config.className = 'friends';
process_dataset(program.dataset);
raccoon.recommendFor(program.user, program.recs).then((recs) => {
    console.log('The recommendations are: ', recs);
    process.exit();
});
