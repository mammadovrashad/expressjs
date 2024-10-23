import mongoose from 'mongoose';


const userShema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        min: 8

    }
}, {
    collection: 'users', timestamps: true
});

const userModel = mongoose.model('users', userShema);


export default userShema;
