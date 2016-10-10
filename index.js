const alfy = require('alfy');
var nowDate = new Date();
var ms = nowDate.getTime();
var s = parseInt(ms/1000);
alfy.output([{'title':s,'subtitle':'seconds','arg':s},{'title':ms,'subtitle':'millisecond','arg':ms}]);