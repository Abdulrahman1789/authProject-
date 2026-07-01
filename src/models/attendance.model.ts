import { Schema, model } from "mongoose";

const attendanceSchema = new Schema({
    employee: {
        type: Schema.Types.ObjectId,
        ref: "Employee",
        required: true
    },
    checkIn: {
        type: Date,
        required: true
    },
    checkOut: {
        type: Date
    },

    date: {
        type: Date,
        required: true
    },
    workingHours: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        enum: ["Present", "Late", "Absent"],
        default: "Present"
    }
},
    { timestamps: true }
);


export const Attendance = model("Attendance", attendanceSchema);