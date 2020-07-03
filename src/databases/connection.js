const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/nodeapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(success => {
    console.log('MongoDB Online');
}).catch(error => {
    console.log(error);
});