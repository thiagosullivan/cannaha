import Image from 'next/image';
import React from 'react';
import ItemOne from '../../assets/presentation-1.png';
import ItemTwo from '../../assets/presentation-2.png';
import ItemThree from '../../assets/presentation-3.png';
import { HomePresentationContainer } from './style';

function HomePresentation() {
  return (
    <HomePresentationContainer>
        <div className='presentation__top'>
            <div className='presentationbox'>
                <h3>2022</h3>
                <p>Pellentesque semper at elit a.</p>
            </div>
            <div className='presetation__top__text'>
                <h2>Product</h2>
                <h3>Praesent vulputate</h3>

                <p>Mauris quis bibendum orci. Sed sit amet nunc eget leo dapibus posuere vel id massa. Nullam tristique maximus ipsum, sed sodales diam mollis a. Praesent ornare massa erat, vitae ultrices neque commodo sed. Donec interdum porta erat ac rutrum. Aenean lectus nisl, feugiat non consectetur et, efficitur ut magna. In tincidunt ligula ullamcorper, lacinia dui ac, eleifend nisi. Sed tempor laoreet faucibus. Curabitur non ex non sapien varius dictum. Quisque pellentesque eleifend enim at fermentum.</p>
            </div>
        </div>
        <div className='presentation__bottom'>
            <h3>Aenean consequat felis a feugiat viverra. Curabitur urna diam, dictum id convallis</h3>
            <div className='presentation__bottom__items'>
                <div className='presentation__item'>
                    <Image src={ItemOne} alt="Item" width={170} height={170} />
                    <p>Nulla feugiat efficitur mi, eu vehicula sapien convallis quis. Nulla quis mi magna. Donec vel eros sed enim finibus feugiat. Quisque scelerisque sed diam ut sodales. Pellentesque vulputate id sapien sed egestas.</p>
                </div>
                <div className='presentation__item'>
                    <Image src={ItemTwo} alt="Item" width={170} height={170} />
                    <p>Nulla feugiat efficitur mi, eu vehicula sapien convallis quis. Nulla quis mi magna. Donec vel eros sed enim finibus feugiat.</p>
                </div>
                <div className='presentation__item'>
                    <Image src={ItemThree} alt="Item" width={170} height={170} />
                    <p>Duis posuere, nisl eu volutpat faucibus, felis neque volutpat felis, aliquet tincidunt nulla ex a neque. Nam sed malesuada sapien. Nam pellentesque sit amet dui a fringilla. Sed porta ipsum sed leo interdum malesuada a vitae justo. Quisque vulputate quis nunc non malesuada. Ut sed urna quis diam hendrerit efficitur et venenatis ante. Fusce a ex at quam tempus pharetra.</p>
                </div>
            </div>
        </div>
    </HomePresentationContainer>
  )
}

export default HomePresentation