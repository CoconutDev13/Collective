const mongoose = require('mongoose');

module.exports = {
    name:"ready",
    once: true,
    async execute(client) {
        await mongoose.connect(process.env.MONGO_URI, {
            keepAlive: true,
        });

        if (mongoose.connect) {
            console.log('MongoDB connection succesful.')
        }

        console.log(`${client.user.username} is now online ✅`);
    },
};