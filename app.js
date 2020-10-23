const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const config = require('./config');

const app = express();
app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

const start = async()=>{
    try{
        await mongoose.connect(config.DB,{
            useNewUrlParser: true,
                useUnifiedTopology: true,
        }, ()=>console.log('mongoose connected to DB'));
        
        app.listen(config.PORT, err=>{
            err ? console.log(err) : console.log(`server started at port: ${config.PORT}`);
        });

    }
    catch(err){
        console.log('Start server error: ', err);
    }
}

start()


