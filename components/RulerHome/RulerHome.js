import React from 'react';
import { FaTruck, FaLock, FaHeadset, FaCheck } from 'react-icons/fa';
import { RulerHomeContainer } from './style';

function RulerHome() {
  return (
    <RulerHomeContainer>
        <div className='Ruler__home__content'>
            <div className='ruler__info'>
                <FaTruck />
                <div className='ruler__info__txt'>
                    <h5>Aenean consequat felis a feugiat viverra.</h5>
                    <p>Curabitur urna diam, dictum id convallis a, maximus in ligula.</p>
                </div>
            </div>
            <div className='ruler__info'>
                <FaLock />
                <div className='ruler__info__txt'>
                    <h5>Aenean consequat felis a feugiat</h5>
                    <p>Curabitur urna diam, dictum id convallis a, maximus in ligula.</p>
                </div>
            </div>
            <div className='ruler__info'>
                <FaHeadset />
                <div className='ruler__info__txt'>
                    <h5>Aenean consequat</h5>
                    <p>Curabitur urna diam, dictum id convallis a, maximus in ligula.</p>
                </div>
            </div>
            <div className='ruler__info'>
                <FaCheck />
                <div className='ruler__info__txt'>
                    <h5>Aenean blandit orci sapien, et auctor mi luctus vel. Etiam leo metus</h5>
                    <p>Curabitur urna diam, dictum id convallis a, maximus in ligula.</p>
                </div>
            </div>
        </div>
    </RulerHomeContainer>
  )
}

export default RulerHome