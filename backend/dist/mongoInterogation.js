"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = exports.getUsers = void 0;
const mongoose_1 = require("mongoose");
const connectionString = "mongodb://localhost:27017/bitSoftware";
//This is the SCHEMA for the database document
const schema = new mongoose_1.Schema({
    personalData: {
        name: { type: String, required: true },
        lastname: { type: String, required: true },
        age: { type: Number, required: true },
        country: { type: String, required: true },
        city: { type: String, required: true },
        cnp: { type: String, required: true }
    },
    employeeStatus: {
        employerName: { type: String, required: true },
        domain: { type: String, required: true },
        timeToWork: { type: String, required: true },
        salary: { type: Number, required: true },
        salaryCurrency: { type: String, required: true },
        freeDaysTaken: { type: Number, required: true },
        freeDaysGiven: { type: Number, required: true }
    }
}, { collection: 'Angajati' });
const connection = (0, mongoose_1.createConnection)(connectionString);
const userModel = connection.model('Angajati', schema);
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const all = yield userModel.find({});
        console.log(all);
    }
    catch (err) {
        if (err)
            console.log(err);
    }
});
exports.getUsers = getUsers;
const addUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userToAdd = new userModel(userData);
        userToAdd.save();
    }
    catch (err) {
        if (err)
            console.log(err);
    }
});
exports.addUser = addUser;
