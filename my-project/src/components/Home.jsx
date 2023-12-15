import React from 'react'
import { Link } from 'react-scroll'
import Button from '../layouts/Button'

const Home = () => {

    const bgColor = 'bg-brightColor';

    return (
        <div>
            <div>
                <h1>Discover the best Destinations</h1>
                <p>With Traveling you can experince new travel and the b est tourist destinations that we have to offer</p>
                <div>
                    <Link>
                        <Button title='Destinations' backgroundColor={bgColor} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home