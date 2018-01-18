
var reg = /^[0-9]{4}-(0\d|1[12])-(0\d|[12]\d|3[01])$/;
console.log(reg.test("2017-04-27"))

var path = /^F:\\(study(\\)?)?(javascript(\\)?)?(regex(\\)?)?(regular expression\.pdf)?$/
console.log(path.test("F:\\study\\javascript"))


var str = "123werg";
var strReg = /(?!\d{6,12)(?![a-z]{6,12})(?![A-Z]{6,12})^[\dA-Za-z]{6,12}$/g;
console.log(strReg.test(str));
var dateStr = "2017-09-17";
var dateReg = /^((\d{4})-(\d{2}))-(\d{2})$/;
console.log(dateStr.match(dateReg))


var testReg = /^((0{0,2}\d|0?\d{2}|2[0-4]\d|25[0-5])\.){3}(0{0,2}\d|0?\d{2}|1\d{2}|2[0-4]\d|25[0-5])$/;