import React from 'react';
import { Typography } from '@mui/material';
import MongoConnection from './database/MongoConnection';

export default function Page() {

    return (
        <>
            <Typography textAlign='center'>Home Page</Typography>
            <MongoConnection/>
        </>
    );

}