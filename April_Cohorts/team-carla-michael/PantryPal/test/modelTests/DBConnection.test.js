import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.set("strictQuery", false);
const dbURL = process.env.DB_URL;

describe("Database Connection", function() {
    console.log(process.env);
    it("Should connect to your database.", async function() {
        this.timeout(5000);
        return new Promise(function(resolve, reject) {
            mongoose.connect(dbURL).then(() => {
                mongoose.disconnect().catch((error) => {
                    reject(error);
                });

               resolve();
            }).catch((error) => {
                console.log(error);
                reject(error);
            });
        });
    });
});