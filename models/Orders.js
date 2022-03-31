import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const OrderSchema = new Schema({
  orderId: String,
  order: Array,
//   date: Date
});

export const Orders = mongoose.models.Orders || mongoose.model('Order',OrderSchema)