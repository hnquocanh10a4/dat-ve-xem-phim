import React, { useEffect } from 'react';
import MultipleRowSlick from '../../components/SlickMovie/MultipleRowSlick';
import HomeMenu from './HomeMenu/HomeMenu';
import { useSelector, useDispatch } from 'react-redux';
import { layDanhSachPhimAction } from '../../redux/actions/QuanLyPhimAction';

export default function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(layDanhSachPhimAction);
    }, []);
    const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-20px ">
                    <MultipleRowSlick arrFilm={arrFilm} />
                </div>
            </section>

            <div className="mx-36">
                <HomeMenu />
            </div>
        </div>
    );
}
