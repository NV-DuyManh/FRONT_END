//Code Learn
String.prototype.is_big = function () {
    return this.length > 10;
}
function run(name) {
    var result = name.is_big();
    console.log(result);
}

function run() {
    var str = "JavaScript";
    str.charAt(0); // returns "J"

    str.charAt(str.length - 1); // returns "t"

    'ABC'.charCodeAt(0); // returns 65

    "Java".concat("Script"); // returns "JavaScript"

    "JavaScript".indexOf("J"); // returns 0
    "JavaScript".indexOf("X"); // returns -1

    'canal'.lastIndexOf('a'); // returns 3
    'canal'.lastIndexOf('x'); // returns -1

    "Ab".replace('b', 'a'); // returns Aa

    "Mozilla".substr(1, 2); // returns "oz"
    "Mozilla".substr(0, 4); // returns "Mozi"

    "Mozilla".substring(1, 3); // returns "oz"

    var str = 'The quick brown fox jumps over the lazy dog.';

    str.slice(31); // returns "the lazy dog."
    str.slice(4, 19); // returns "quick brown fox"
    str.slice(-4);// returns "dog."

    "Abc".toLowerCase(); // returns "abc"

    "Abc".toUpperCase(); // returns "ABC"

    "The quick brown fox".split(' '); // returns ['The', 'quick', 'brown', 'fox']
    "11,22".split(','); // returns ['11', '22']

    str = 'To be, or not to be, that is the question.';

    str.includes('To be'); 	// true
    str.includes('question');    // true
    str.includes('nonexistent'); // false
    str.includes('To be', 1);	// false
    str.includes('TO BE');	// false
    str.includes('');	// true
    console.log("done");
}
function run(a, b) {
    // console.log(a.length)
    if (a.length === b.length) {
        console.log("true");
        return true
    } else {
        console.log("false");
        return false
    };
}
 function run(str) {
    var a = str.includes("script");
    console.log(a);
}
function ucfirst(str) {
	var first_letter  = str.charAt(0);
	var rest  = str.slice(1);
	var a = first_letter.toUpperCase();
	var b = a.concat(rest);
	console.log(b);
}
function  uc_first(word) {
	var first_word = word.charAt(0);
    var rent = word.slice(1);
    var in_hoa = first_word.toUpperCase();
    var gop = in_hoa.concat(rent);
    return gop;

}
function run(str) {
	var tach_mang = str.split(" ");
    var result = tach_mang.map(function(word){
        return uc_first(word);
    });
    console.log(result.join(" "));
}
function run(str) {
	var new_word = str.replace(/a/g, 4);
     new_word = new_word.replace(/e/g, 3);
      new_word = new_word.replace(/i/g, 1);
       new_word = new_word.replace(/o/g, 0);
        new_word = new_word.replace(/s/g, 5);
         new_word = new_word.trim();
 
    console.log(new_word);
}
function run() {
	var data = [25, 154, 461, 67, 32, 43]; // define an array
	
	var length = data.length; // get length of array datas
	
	console.log(data.length); // output: 6
	
	data.push(length); // Add new element to datas
	
	console.log(data.length); // output: 7
}
function run(a, b){
	b= b.concat(a);
	console.log(b);
}