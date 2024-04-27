import mongoose from "mongoose";

var RouteTestModule = function() {
    //This module generates a set of mock-up mongoose schemas that enable us
    //to unit test RouteID code independently from the database.

    //Kept empty. RouteID must throw an error if the model it receives isn't
    //an instance of the mongoose model.
    const falseModel = Object.create(Function);

    //Creates a new model object where we can override its methods for testing
    //without affecting all instances that directly inherit from mongoose.Model.
    const instanceCheck = Object.create(mongoose.Model);
    let state = true;
    
    instanceCheck.findById = async function() {
        const current = state;
        state = false;
        return current;
    };

    const errorCheck = Object.create(mongoose.Model);
    
    //When routeID checks for a duplicateID, routeID must be able to throw or log errors
    //from database.
    errorCheck.findById = async function() {
        throw new Error("RouteID Test = This should be thrown or logged!");
    }

    return {
        falseModel: falseModel,
        dupeCheck: instanceCheck,
        errorCheck: errorCheck
    }
}();

export default RouteTestModule;