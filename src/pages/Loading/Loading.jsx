import React from 'react'
// dùng thư viện assets loading animation tải được từ lottie về
import loadingAnimation from '../../assets/loading animation.json'
import Lottie from 'react-lottie';

const Loading = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loadingAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <div className='h-screen w-full flex items-center fixed z-50 bg-black opacity-50'>
        <Lottie options={defaultOptions} height={200} width={200} />
        </div>
    )
}

export default Loading