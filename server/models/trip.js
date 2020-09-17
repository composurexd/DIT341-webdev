var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tripSchema = new Schema({
    destination: {type: String, require:true, default: "NULL Destination"},
    description: {type: String, require:true, default: "NULL Discription"},
    date: {type: Date, default: Date.now, require:true},
    budget: {type: Number, required: true, default: 0},
    expense: [{type: Schema.Types.ObjectId, ref:"expense"}]
<<<<<<< HEAD

=======
>>>>>>> cc223badfb0a815224fd1aaace9ea7562dc7aa5f
})

var Trip = mongoose.model("trips", tripSchema);

module.exports = Trip;