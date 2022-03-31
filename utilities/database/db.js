import mongoose from 'mongoose';

let isConnected = false;

export const connect = async () => {
    if (!isConnected) {
       await mongoose.connect('mongodb://localhost/orders');
       isConnected = true;
    }

}

