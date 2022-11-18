import mongoose, { Schema, Document } from "mongoose";

export interface ITask extends Document {
    title: String
};

export interface ITaskObj extends Document {
    _id: String,
    title: String
}

const TaskSchema = new Schema({
    title: String
});

export default mongoose.model<ITask>('Task', TaskSchema);