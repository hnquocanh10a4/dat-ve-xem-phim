import React from 'react';
import { PlayCircleOutlined } from '@ant-design/icons';
import './FlimFlip.css';
import { history } from '../../App';
import { useDispatch } from 'react-redux';
import { HIEN_TRAILER } from '../../redux/types/QuanLyPhimType';

export default function FilmFlip(props) {
    const { item } = props;
    const dispatch = useDispatch();
    return (
        <div className="flip-card mt-2">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={item.hinhAnh} alt="Avatar" style={{ width: 300, height: 300 }} />
                </div>
                <div className="flip-card-back" style={{ position: 'relative', backgroundColor: 'rgba(0,0,0,.9)' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0 }}>
                        <img src={item.hinhAnh} alt="Avatar" style={{ width: 300, height: 300 }} />
                    </div>
                    <div
                        className="w-full h-full"
                        style={{
                            position: 'absolute',
                            backgroundColor: 'rgba(0,0,0,.5)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <div>
                            <div className="rounded-full cursor-pointer">
                                <PlayCircleOutlined
                                    style={{ fontSize: '50px' }}
                                    onClick={() => {
                                        dispatch({
                                            type: HIEN_TRAILER,
                                            trailer: item.trailer,
                                        });
                                    }}
                                />
                            </div>
                            <div className="text-2xl mt-2 font-bold">{item.tenPhim}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                onClick={() => {
                    history.push(`/detail/${item.maPhim}`);
                }}
                className="hover:bg-orange-600 hover:text-white h-7 mb-20 rounded-lg border-orange-600 border-2 border-solid bg-white text-center cursor-pointer py-2  my-2 text-orange-600 font-bold"
            >
                ĐẶT VÉ
            </div>
        </div>
    );
}
