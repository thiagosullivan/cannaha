import Image from 'next/image';
import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import InstaOne from '../../assets/image-2.jpg';
import InstaTwo from '../../assets/image-3.jpg';
import InstaThree from '../../assets/image-4.jpg';
import InstaFour from '../../assets/image-5.jpg';
import { InstagramFeedContainer } from './style';

function InstagramFeed() {
  return (
    <InstagramFeedContainer>
        <h2><FaInstagram /> Instagram</h2>

        <div className='instagram__content'>
            <div className='instagram__imgs'>
                <Image src={InstaOne} layout="responsive" alt='Instagram'/>
            </div>
            <div className='instagram__imgs'>
                <Image src={InstaTwo} layout="responsive" alt='Instagram'/>
            </div>
            <div className='instagram__imgs'>
                <Image src={InstaThree} layout="responsive" alt='Instagram'/>
            </div>
            <div className='instagram__imgs'>
                <Image src={InstaFour} layout="responsive" alt='Instagram'/>
            </div>
            <div className='instagram__imgs'>
                <Image src={InstaFour} layout="responsive" alt='Instagram'/>
            </div>
            <div className='instagram__imgs'>
                <Image src={InstaThree} layout="responsive" alt='Instagram'/>
            </div>
            <div className='instagram__imgs'>
                <Image src={InstaTwo} layout="responsive" alt='Instagram'/>
            </div>
            <div className='instagram__imgs'>
                <Image src={InstaOne} layout="responsive" alt='Instagram'/>
            </div>
            {/* <Image src={InstaThree} width={400} height={400}/>
            <Image src={InstaThree} width={400} height={400}/>
            <Image src={InstaThree} width={400} height={400}/>
            <Image src={InstaThree} width={400} height={400}/>
            <Image src={InstaThree} width={400} height={400}/>
            <Image src={InstaThree} width={400} height={400}/>
            <Image src={InstaThree} width={400} height={400}/>
            <Image src={InstaThree} width={400} height={400}/> */}
        </div>
    </InstagramFeedContainer>
  )
}

export default InstagramFeed