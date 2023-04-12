import React, { useEffect } from 'react';
import MultipleRowSlick from '../../components/SlickMovie/MultipleRowSlick';
import HomeMenu from './HomeMenu/HomeMenu';
import { useSelector, useDispatch } from 'react-redux';
import { layDanhSachPhimAction } from '../../redux/actions/QuanLyPhimAction';
import { layDanhSachHeThongRapAction } from '../../redux/actions/QuanLyRapActions';
import HomeCarousel from '../../templates/HomeTemplate/layouts/HomeCarousel/HomeCarousel';

export default function Home() {
    const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);
    const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(layDanhSachPhimAction);
        dispatch(layDanhSachHeThongRapAction());
    }, []);
    return (
        <div>
            <HomeCarousel />
            <section className="text-gray-600 body-font">
                <div id="Carousel" className="container px-5 py-24 mx-20px ">
                    <MultipleRowSlick arrFilm={arrFilm} />
                </div>
            </section>

            <div className="mx-36">
                <HomeMenu heThongRapChieu={heThongRapChieu} />
            </div>
        </div>
    );
}
