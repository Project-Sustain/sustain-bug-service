const {MongoClient} = require('mongodb');

console.log('Hi from the server');

const username = 'root'; // FIXME use env variable
const password = 'rooPass'; // FIXME use env variableconst 
const uri = `mongodb://${username}:${password}@lattice-100:27018/`;
const client = new MongoClient(uri);

async function main() {
    try {
        await client.connect();
        const db = client.db('sustaindb');
        const document = db('water_quality_sites').findOne();
        console.log({document});
    } catch (e) {
        console.log({e});
    } 
    finally {
        client.close();
    }
}

main().catch(console.error);
