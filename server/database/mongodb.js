const mongoose = require('mongoose');
const MONGO_URI = "mongodb+srv://brandon:CompanyCreator7!@dailyquest.eym6y.mongodb.net/?retryWrites=true&w=majority&appName=DailyQuest";


mongoose.connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'dailyQuest'
  })
    .then(() => console.log('Connected to Mongo DB.'))
    .catch(err => console.log(err));


const Schema = mongoose.Schema;

const adventurersSchema = new Schema ({
    name: String,
    email: String,
    phone: Number,
    date: { type: Date, default: Date.now }
})


const questsSchema = new Schema ({
  quest: String,
  vehicle: String,
  mood: String,
  date: { type: Date, default: Date.now }
})

const Adventurers = mongoose.model('Adventurers', adventurersSchema);

const Quests = mongoose.model('Quests', questsSchema);


module.exports = {Adventurers, Quests};