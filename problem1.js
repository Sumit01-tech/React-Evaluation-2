//function generateAuthUniqID(studentCode, email) {
//let emailPart = email.split("@")[0];
//let concateString = studentCode + emailPart;
//let lowercaseString = concateString.toLowerCase();
//let oddIndex = '';
//for (let i = 0; i < lowercaseString.length; i++) {
//if ((i + 1) % 2 !== 0) {
// oddIndex += lowercaseString[i];
//}
//}
//}
//let studentCode = "fs40_3704053";
//let email = "sumitgourav07@gmail.com";
//generateAuthUniqID(studentCode, email); 

async function fetchProblem(_generateAuthUniqID) {
    try {
        const response = await fetch(`https://questionmapping.onrender.com/api/problem/{generateAuthUniqID}`);
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch (error) {
        console.error("Error fetching problem", error);
    }
}
let generateAuthUniqID = "6012116295223";
fetchProblem(generateAuthUniqID);
