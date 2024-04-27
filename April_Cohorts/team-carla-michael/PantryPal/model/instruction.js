/**@module model/instruction*/
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/**Schema object for the Instruction model
 * @author Tyler Del Rosario
 * @property recipe_id {ObjectID} An ObjectID that references the recipe that this instruction belongs to.
 * @property task {string} Describes the instruction
 */
const InstructionSchema = new Schema({
    recipe_id: {type: Schema.Types.ObjectID, ref: "Recipe", required: true},
    index: {type: Number, required: true},
    task: {type: String, required: true}
});

export default mongoose.model("Instruction", InstructionSchema);