const users = {
    user1: {
        name: 'Alice',
        skills: ['JavaScript', 'React', 'Node.js']
    },
    user2: {
        name: 'Bob',
        skills: ['Python', 'Django']
    },
    user3: {
        name: 'Charlie',
        skills: ['Java', 'Spring', 'Hibernate', 'SQL']
    },
    user4: {
        name: 'Dave',
        skills: ['C#', 'ASP.NET', 'Azure', 'SQL', 'Angular']
    }
};

let userWithMostSkills = null;
let maxSkills = 0;

for (const userId in users) {
    if (users.hasOwnProperty(userId)) {
        const user = users[userId];
        const skillCount = user.skills.length;
        
        if (skillCount > maxSkills) {
            maxSkills = skillCount;
            userWithMostSkills = user;
        }
    }
}

console.log(userWithMostSkills);
