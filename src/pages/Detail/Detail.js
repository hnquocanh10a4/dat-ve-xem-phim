import React, { useEffect } from 'react';
import detail from './detail.css';
import '../../assets/styles/circle.scss';
import { useSelector, useDispatch } from 'react-redux';
import { layThongTinChiTietPhim } from '../../redux/actions/QuanLyRapActions';
import { Rate, Tabs } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

export default function Detail(props) {
    const filmDetail = useSelector((state) => state.QuanLyRapReducer.filmDetail);
    console.log('filmDetail', filmDetail);

    const dispatch = useDispatch();

    useEffect(() => {
        let { id } = props.match.params;
        console.log('id', id);

        dispatch(layThongTinChiTietPhim(id));
    }, []);

    return (
        <div style={{ backgroundImage: `url(${filmDetail.hinhAnh})`, minHeight: '100vh' }}>
            <div className="glassmorphism w-screen h-full pb-5">
                <div className="grid grid-cols-12">
                    <div className="col-span-5 col-start-3">
                        <div className="grid grid-cols-3">
                            <img
                                className="col-span-1"
                                src={filmDetail.hinhAnh}
                                style={{ width: '100%', height: 300 }}
                                alt="123"
                            />
                            <div className="col-span-2 ml-5 decoration-white" style={{ color: 'white' }}>
                                <p className="text-sm">
                                    Ngày chiếu: {moment(filmDetail.ngayKhoiChieu).format('DD.MM.YYYY')}
                                </p>
                                <p className="text-4xl leading-10">{filmDetail.tenPhim}</p>
                                <p>{filmDetail.moTa}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-4">
                        <div className="center-rate">
                            <h1 className="heading-rate">Đánh giá</h1>
                            <h1 style={{ marginLeft: '5%' }} className="text-green-400 text-2xl">
                                <Rate
                                    allowHalf
                                    value={filmDetail.danhGia / 2}
                                    style={{ color: 'yellow', fontSize: 30 }}
                                />
                            </h1>
                            <div className={`c100 p${filmDetail.danhGia * 10} blue items-center`}>
                                <span className="text-white">{filmDetail.danhGia * 10}%</span>
                                <div class="slice">
                                    <div class="bar"></div>
                                    <div class="fill"></div>
                                </div>
                            </div>
                        </div>
                        <br />
                    </div>
                </div>

                <div className="mt-10 ml-72 w-2/3 container bg-white px-5 py-5 rounded-xl">
                    <Tabs defaultActiveKey="1" centered>
                        <TabPane tab="Lịch chiếu" key="1" style={{ minHeight: 300 }}>
                            <div>
                                <Tabs tabPosition={'left'}>
                                    {filmDetail.heThongRapChieu?.map((htr, index) => {
                                        return (
                                            <TabPane
                                                tab={
                                                    <div className="flex flex-row items-center justify-center">
                                                        <img
                                                            src={htr.logo}
                                                            className="rounded-full w-full"
                                                            style={{ width: 50 }}
                                                            alt={htr.tenHeThongRap}
                                                        />
                                                        <div className="text-center ml-2">{htr.tenHeThongRap}</div>
                                                    </div>
                                                }
                                                key={index}
                                            >
                                                {htr.cumRapChieu?.map((cumRap, index) => {
                                                    return (
                                                        <div className="mt-5" key={index}>
                                                            <div className="flex flex-row">
                                                                <img
                                                                    style={{ width: 60, height: 60 }}
                                                                    src={cumRap.hinhAnh}
                                                                    alt={cumRap.tenCumRap}
                                                                />
                                                                <div className="ml-2">
                                                                    <p
                                                                        style={{
                                                                            fontSize: 20,
                                                                            fontWeight: 'bold',
                                                                            lineHeight: 1,
                                                                        }}
                                                                    >
                                                                        {cumRap.tenCumRap}
                                                                    </p>
                                                                    <p
                                                                        className="text-gray-400"
                                                                        style={{ marginTop: 0 }}
                                                                    >
                                                                        {cumRap.diaChi}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="thong-tin-lich-chieu grid grid-cols-4">
                                                                {cumRap.lichChieuPhim
                                                                    ?.slice(0, 12)
                                                                    .map((lichChieu, index) => {
                                                                        return (
                                                                            <NavLink
                                                                                to={`/checkout/${lichChieu.maLichChieu}`}
                                                                                key={index}
                                                                                className="col-span-1 text-green-800 font-bold"
                                                                            >
                                                                                {moment(
                                                                                    lichChieu.ngayChieuGioChieu,
                                                                                ).format('hh:mm A')}
                                                                            </NavLink>
                                                                        );
                                                                    })}
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </TabPane>
                                        );
                                    })}
                                </Tabs>
                            </div>
                        </TabPane>
                        <TabPane tab="Thông tin" key="2" style={{ minHeight: 300 }}>
                            Thông tin
                        </TabPane>
                        <TabPane tab="Đánh giá" key="3" style={{ minHeight: 300 }}>
                            Đánh giá
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}
