const {DateTime, Interval} = require('luxon');

const agora = DateTime.now()

console.log(agora.month);
console.log(new Date().toLocaleString("en-US"))
console.log(new Date().toLocaleString()) //toLocaleString vazio respeita o padrão do computador

const dataAniversario = DateTime.fromFormat('02/01/1998', 'dd/MM/yyyy');
console.log(dataAniversario);

const idade = Interval.fromDateTimes(dataAniversario,agora).length('year');
console.log(Math.floor(idade));

const isoDate = '2020-11-19T21:22:00-0300'
const rFC = 'Thu, 19 Nov 2020 21:22:00 -0300'

console.log(DateTime.fromISO(isoDate).toLocaleString())
console.log(DateTime.fromRFC2822(rFC).toLocaleString())
