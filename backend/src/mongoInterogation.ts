import {Schema, createConnection} from "mongoose";

const connectionString: string = "mongodb://localhost:27017/bitSoftware";

//This is the User interface
export interface User{
      personalData: {
            name: string,
            lastname: string,
            age: number
            country: string,
            city: string,
            cnp: string
      },
      employeeStatus: {
            employerName: string,
            domain: string,
            timeToWork: string,
            salary: number,
            salaryCurrency: string,
            freeDaysTaken: number,
            freeDaysGiven: number
      }
}

//This is the SCHEMA for the database document
const schema = new Schema<User>({
      personalData: {
            name: {type: String, required: true},
            lastname: {type: String, required: true},
            age: {type: Number, required: true},
            country: {type: String, required: true},
            city: {type: String, required: true},
            cnp: {type: String, required: true}
      },
      employeeStatus: {
            employerName: {type: String, required: true},
            domain: {type: String, required: true},
            timeToWork: {type: String, required: true},
            salary: {type: Number, required: true},
            salaryCurrency: {type: String, required: true},
            freeDaysTaken: {type: Number, required: true},
            freeDaysGiven: {type: Number, required: true}
      }
}, {collection: 'Angajati'});

const connection = createConnection(connectionString);
const userModel = connection.model('Angajati', schema);

export const getUsers = async () => {
      try{  
            const all = await userModel.find({});
            console.log(all);
      }
      catch(err){
            if(err) console.log(err);
      }
}

export const addUser = async (userData: User) => {
      try{
            const userToAdd = new userModel(userData);
            userToAdd.save();
      }
      catch(err){
            if(err) console.log(err);
      }
}

