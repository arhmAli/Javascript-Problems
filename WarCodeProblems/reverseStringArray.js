//reversing all the strings that are present in a array of strings i.e ["arham"]=>["mahra"]
function reverseWords(str) {
    return str.split(' ').map( str => str.split('').reverse().join('') ).join(' ');
}
