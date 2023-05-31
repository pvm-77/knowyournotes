import React from 'react'
import Carousel from '../carousel/Carousel'
import { Link } from 'react-router-dom';
import Button from '../button/Button';
const Home = () => {
    return (
        <div>
            <Carousel />
            <Link to='/login'>
                <Button btnLabel='login' />
            </Link>
            <Link to='/signup'>
                <Button btnLabel='create account' />
            </Link>

        </div>
    )
}

export default Home