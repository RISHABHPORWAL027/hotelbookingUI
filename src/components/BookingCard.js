import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import './BookingCard.css';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import profile from './profile.jpg'

export const BookingCard = () => {

    return (
        <Card className='card' sx={{ minWidth: 275, marginTop: 'auto' }}>
            <CardContent sx={{ padding: '9px !important' }}>
                <Box className='cardContent'>
                    <Button className='cardBtn' variant="contained">Clinic</Button>
                    <Button className='cardBtn1' sx={{ color: '#fff' }} variant="contained">Test</Button>
                    <Button className='cardBtn1' sx={{ color: '#fff' }} variant="contained">Surgery</Button>
                    <Button className='cardBtn1' sx={{ color: '#fff' }} variant="contained">Medicine</Button>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem', marignLeft: '14px' }}>
                    <Avatar sx={{ padding: '1.3rem', border: '3px solid rgba(255, 132, 18, 0.4)', }} alt="Remy Sharp" > <img src={profile} style={{ width: '100px' }} /></Avatar>
                    <Box sx={{ margin: 'auto' }}>
                        <Typography className='dateText'>17 september 2021, 9.30 PM</Typography>
                        <Typography className='docText'>appointment with doctor arun</Typography>
                        <Typography className='clincText'>doctor world clinic</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '28px' }}>
                    <Button className='cardBtn2' style={{
                    }} variant="contained">RESCHEDULE</Button>
                    <Button className='cardBtn2' variant="contained">CANCEL</Button>
                    <Button className='cardBtn3' sx={{ bgcolor: '#fff !important' }} variant="contained">
                        <RemoveRedEyeIcon sx={{ mr: '5px' }} />View</Button>
                </Box>
            </CardContent>
        </Card >
    )
}
