import { getUsers, addUser, User } from "./mongoInterogation";

const userData: User = {
      personalData: {
            name: 'Stirbu',
            lastname: 'Stefania',
            age: 17,
            country: 'Romania',
            city: 'Brasov',
            cnp: '56969696969'
      },
      employeeStatus: {
            employerName: 'Delaco',
            domain: 'Marketing',
            timeToWork: '10h',
            salary: 1700,
            salaryCurrency: 'ron',
            freeDaysTaken: 4,
            freeDaysGiven: 21
      }
};
addUser(userData);
getUsers();
