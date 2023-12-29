const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

postSchema.virtual('id').get(function() {
    // Return _id as a string
    return this._id.toString();
});

// Ensure virtual fields are included in toJSON output
postSchema.set('toJSON', {
    virtuals: true
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
