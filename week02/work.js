/*
数字包括：
1. 十进制数字：
	整数.小数.e
	.小数 E
	整数 e

*/

//1
var numReg = /(^(\d)*\.?\d*e(+|-)?\d+$)|(^0o[0-7]+$)|(^0x[0-9, A-F]+$)/g




// 2 分成1-4个字节， 不同字节使用不同的逻辑处理
function unicodeToUTF8(s) {
	let code = e.codePointAt(0).toString(2)
	let res = ''
	if (code < 0x7f) {
		res = code
	}
	if (code >= 0x80 && code < 0x07ff) {
		let str1 = +code.slice(0, 6), str2 = +code.slice(6)
		res = (0b11000000 & str2).toString(2) + (0b10000000 & str1).toString(2)
	}
	if (code >= 0x800 && code < 0xffff ) {
		let str1 = +code.slice(0, 6), str2 = +code.slice(6, 12), str3 = +code.slice(12)
		res = (0b11100000 & str3).toString(2) + (0b10000000 & str2).toString(2) + (0b10000000 & str1).toString(2)
	}
	if (code >= 0x10000 && code < 0x10ffff) {
		let str1 = +code.slice(0, 6), str2 = +code.slice(6, 12), str3 = +code.slice(12, 18), str4 = +code.slice(18)
		res = (0b11110000 & str4).toString(2) + (0b10000000 & str3).toString(2) + (0b10000000 & str2).toString(2) + (0b10000000 & str1).toString(2)
	}
	return String.fromCharCode(res)
}


//3
var strReg = /[\u0000-\u10ffff]*/