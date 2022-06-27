import { MongoClient } from 'mongodb';
import { Typography } from '@mui/material';

export default function MongoConnection() {

    const username = 'root'; // FIXME use env variable
    const password = 'rooPass'; // FIXME use env variableconst 
    const uri = `mongodb://${username}:${password}@lattice-100:27018/`;
    const client = new MongoClient(uri);

    connect();

    async function connect() {
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

    return (
        <Typography textAlign="center">Hi from MongoConnection!</Typography>
    )
}