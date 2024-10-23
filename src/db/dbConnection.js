import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()


const uri = process.env.DB_URL;

mongoose.connect(uri)
    .then(() => {
        console.log('MongoDB bağlantısı uğurlu oldu.');
    })
    .catch(err => {
        console.error('MongoDB bağlantı hatası:', err);
    });


