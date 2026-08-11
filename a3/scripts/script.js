
/*
Problem 1 — studentIntroduction()
*/
const studentIntroduction = (student) => {
    return typeof (student) !== "object" || student === null || student.name === undefined || student.age === undefined || student.course === undefined ? "Invalid" : `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`
}

/*
Problem 2 — filterActiveUsers()
*/
const filterActiveUsers = (users) => {
    if (!Array.isArray(users) || users.length <= 0) {
        return "Invalid"
    }
    for (let user of users) {
        if (user.isActive === undefined) {
            return "Invalid"
        }
    }
    const activeUsers = users.filter(user => user.isActive === true)
    return activeUsers
}


/*
Problem 3 — countHashtags()
*/
const countHashtags = (caption) => {
    if (typeof (caption) !== "string") {
        return "Invalid"
    }
    const words = caption.split(" ")

    const hashTags = words.filter(word => word.startsWith("#"))

    if (hashTags.length <= 0) {
        return {
            hashtagCount: hashTags.length,
            longestTag: ""
        }
    }

    let largestTag = hashTags[0].replace("#", "")

    for (let hashTag of hashTags) {

        const removeHash = hashTag.replace("#", "")
        if (removeHash.length > largestTag.length) {
            largestTag = removeHash
        }
    }

    return {
        hashtagCount: hashTags.length,
        longestTag: largestTag
    }
}


/*
Problem 4 — bonusScore()
*/

const bonusScore = (scores) => {
    if (!Array.isArray(scores) || scores.length === 0) {
        return "Invalid"
    }

    let updatedScores = [];

    for (let score of scores) {
        if (typeof (score) !== "number") {
            return "Invalid"
        }
        updatedScores.push(score + 10)
    }

    const totalScore = updatedScores.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0)
    return totalScore
}


/*
Problem 5 — generateLeaderboard()
 */
function generateLeaderboard(students) {
    if (!Array.isArray(students) || students.length === 0) {
        return "Invalid";
    }
    for (let student of students) {
        if (student.name === undefined || student.score === undefined || typeof (student.score) !== "number") {
            return "Invalid"
        }
    }
    const filterQualified = students.filter(student => student.score >= 70);

    let qualified = []
    for (let info of filterQualified){
        qualified.push(info.name.toUpperCase())
    }
    
    let leaderBoard = [];
    for(let student of qualified){
        if(leaderBoard.length < 3){
     leaderBoard.push(student)   
    }
    }

    return leaderBoard   
}