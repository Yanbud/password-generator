// Assignment Code
var generateBtn = document.querySelector("#generate");
var charLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charUpp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var charSpec = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var newOne = [];

// Write password to the #password input
var generatePassword = function() {
    var pwdLength = prompt("What's the length of the password? (8~128)");
    if (pwdLength == "") {
        alert("You must put something in.")
    } else if (isNaN(pwdLength)) {
        alert("The length should be a number.")
    } else if (pwdLength < 8 || pwdLength > 128) {
        alert("The password is at least 8 characters long and no more than 128 characters.")
    } else {
        var includeLow = confirm("Are lowercase letters included? ");
        var includeUpp = confirm("Are uppercase letters included? ");
        var includeNum = confirm("Are numeric characters included? ");
        var includeSpe = confirm("Are special characters included ? ");
        if (includeLow) {
            if (includeUpp && !includeNum && !includeSpe) {
                newOne = charLow.concat(charUpp);
            } else if (includeUpp && includeNum && !includeSpe) {
                newOne = charLow.concat(charUpp, num);
            } else if (includeUpp && !includeNum && includeSpe) {
                newOne = charLow.concat(charUpp, charSpec);
            } else if (includeUpp && includeNum && includeSpe) {
                newOne = charLow.concat(charUpp, num, charSpec);
            } else if (!includeUpp && includeNum && !includeSpe) {
                newOne = charLow.concat(num);
            } else if (!includeUpp && includeNum && includeSpe) {
                newOne = charLow.concat(num, charSpec);
            } else if (!includeUpp && !includeNum && includeSpe) {
                newOne = charLow.concat(charSpec);
            } else { newOne = charLow }

        } else {
            if (includeUpp && !includeNum && !includeSpe) {
                newOne = charUpp;
            } else if (includeUpp && includeNum && !includeSpe) {
                newOne = charUpp.concat(num);
            } else if (includeUpp && !includeNum && includeSpe) {
                newOne = charUpp.concat(charSpec);
            } else if (includeUpp && includeNum && includeSpe) {
                newOne = charUpp.concat(num, charSpec);
            } else if (!includeUpp && includeNum && !includeSpe) {
                newOne = num;
            } else if (!includeUpp && includeNum && includeSpe) {
                newOne = num.concat(charSpec);
            } else if (!includeUpp && !includeNum && includeSpe) {
                newOne = charSpec;
            } else {
                alert("You have to select at least one character type.");
            }
        };
    }
    valArray = [];
    for (var i = 0; i < pwdLength; i++) {
        var r = Math.floor(Math.random() * (newOne.length));
        valArray.push(newOne[r]);
        newOne.splice(r, 1);
    }
    var newPassword = valArray.join("");
    return newPassword;

}

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);