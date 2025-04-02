function isPalindrome() {
    let str = prompt("Enter a string :");
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    if (cleanStr === cleanStr.split('').reverse().join('')) {
        console.log("It is a palindrome!");
    } else {
        console.log("It is not a palindrome.");
    }
}
isPalindrome();
