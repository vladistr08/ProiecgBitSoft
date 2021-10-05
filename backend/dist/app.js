"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoInterogation_1 = require("./mongoInterogation");
const userData = {
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
(0, mongoInterogation_1.addUser)(userData);
(0, mongoInterogation_1.getUsers)();
