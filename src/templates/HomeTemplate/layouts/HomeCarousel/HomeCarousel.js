import React, { useEffect } from 'react';
import { Carousel } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { homeCarouselAction } from '../../../../redux/actions/homeCarouselAction';
import './HomeCarousel.css';

const contentStyle = {
    height: '600px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    backgroundPosition: 'center',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
};

export default function HomeCarousel() {
    const dispatch = useDispatch();

    const { arrHinhAnh } = useSelector((state) => state.caroselReducer);

    console.log('arrHinhAnh', arrHinhAnh);

    useEffect(() => {
        dispatch(homeCarouselAction);
    }, []);

    const renderHinhAnh = () => {
        console.log('arrHinhAnh', arrHinhAnh);
        return arrHinhAnh.map((item, index) => {
            return (
                <div key={index}>
                    <div style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}>
                        <img src={item.hinhAnh} className="w-full opacity-0" alt={item.hinhAnh} />
                    </div>
                </div>
            );
        });
    };
    return (
        <Carousel effect="fade" style={{ width: '100%', padding: 0, margin: 0 }}>
            {renderHinhAnh()}
        </Carousel>
    );
}
