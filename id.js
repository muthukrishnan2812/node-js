const {v4 } = require('uuid');
const {format } = require('date-fns')
console.log(v4());
console.log(format(new Date(),'dd-MM-yyyy\tHH:mm:ss'));