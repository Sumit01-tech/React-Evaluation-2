function generateAuthUniqID(studentCode, email) {
    let emailPart = email.split("@")[0];
    let concateString = studentCode + emailPart;
    let lowercaseString = concateString.toLowerCase();
    let oddIndex = '';
    for (let i = 0; i < lowercaseString.length; i++) {
        if ((i + 1) % 2 !== 0) {
            oddIndex += lowercaseString[i];
        }
    }
    let numString = '';
    for (let char of oddIndex) {
        if (/[a-z]/.test(char)) {
            numString += (char.charCodeAt(0) - 96).toString();
        } else if (/[0-9]/.test(char)) {
            numString += char;
        } else {
            numString += "1";
        }
    }
    let authID = '';
    let firstChar = 0;
    let rightChar = numString.length - 1;
    while (firstChar <= rightChar) {
        if (firstChar === rightChar) {
            authID += numString[firstChar];
        } else {
            authID += numString[firstChar] + numString[rightChar];
        }
        firstChar++;
        rightChar--;
    }
    return authID;
}
let studentCode = "fs40_3704053";
let email = "sumitgourav07@gmail.com";
let authID = generateAuthUniqID(studentCode, email);
console.log(authID);

async function fetchProblem(authID) {
    try {
        const response = await fetch(`https://questionmapping.onrender.com/api/problem/${authID}`);
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch (error) {
        console.error("Error fetching problem", error);
    }
}
let authID1 = "6012116295223";
fetchProblem(authID);
