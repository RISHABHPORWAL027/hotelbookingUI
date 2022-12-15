import React from 'react';
import './BookingHistory.css';
import Box from '@mui/material/Box';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Button from '@mui/material/Button';
import { BookingCard } from './BookingCard'


export const BookingHistory = () => {

    const l = [1, 2];

    return (
        <div className='BookingHistory'>
            <div className="headerComponents">
                <div className="icon"><ArrowBackIosIcon /></div>
                <h6 className="heading">UPCOMING APPOINMENTS</h6>
            </div>
            <div className='bookingCard'>
                <h6 className='bookingFont'>new booking in 2 minutes</h6>
                <Button className='bookNowbtn' variant="contained">Book Now</Button>
            </div>
            <div style={{marginTop:'1rem'}}>
                {
                    l.map(() => {
                        return <BookingCard />
                    })
                }
            </div>
            <Box className='footerBtn'>
                <Button className='backbtn' variant="contained">Back</Button>
            </Box>
        </div >
    )
}
