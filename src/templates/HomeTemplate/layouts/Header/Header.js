import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../../../../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRegistered, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { Menu } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import { DANG_XUAT } from '../../../../redux/types/QuanLyNguoiDungType';

const items = [
    {
        // label: 'D',
        key: 'SubMenu',
        icon: <FontAwesomeIcon icon={faUser} style={{ fontSize: '30px' }} />,
        children: [
            {
                type: 'group',
                children: [
                    {
                        icon: <FontAwesomeIcon icon={faRightFromBracket} />,
                        label: <Link to="/login">Đăng nhập</Link>,
                        key: 'setting:1',
                    },
                    {
                        icon: <FontAwesomeIcon icon={faRegistered} />,
                        label: <Link to="/register">Đăng ký</Link>,
                        key: 'setting:2',
                    },
                ],
            },
        ],
    },
];

export default function Header() {
    const user = useSelector((state) => state.QuanLyNguoiDungReducer.userLogin);
    const dispatch = useDispatch();
    const items1 = [
        {
            label: user.hoTen,
            key: 'SubMenu',
            icon: <FontAwesomeIcon icon={faUser} style={{ fontSize: '30px' }} />,
            children: [
                {
                    type: 'group',
                    children: [
                        {
                            icon: <FontAwesomeIcon icon={faRightFromBracket} />,
                            label: <Link to="/">Đăng xuất</Link>,
                            key: 'setting:1',
                        },
                    ],
                },
            ],
        },
    ];
    const handleDangXuat = (e) => {
        dispatch({ type: DANG_XUAT });
    };
    return (
        <header className="p-4 bg-coolGray-100 text-coolGray-800 bg-opacity-40 bg-black text-white fixed w-full z-10">
            <div className="container flex justify-between h-16 mx-auto">
                <NavLink to="/" aria-label="Back to homepage" className="flex items-center p-2">
                    <img src={logo} alt="movie ticket" className="w-[200px]" />
                </NavLink>
                {window.location.pathname === '/' ? (
                    <ul className="items-stretch hidden space-x-3 lg:flex">
                        <li className="flex">
                            <ScrollLink
                                to="Carousel"
                                smooth={true}
                                className="hover:text-xl hover:text-orange-600 cursor-pointer flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-white"
                            >
                                Lịch Chiếu
                            </ScrollLink>
                        </li>
                        <li className="flex">
                            <ScrollLink
                                to="cumRap"
                                smooth={true}
                                className="hover:text-xl hover:text-orange-600 cursor-pointer flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-white"
                            >
                                Cụm rạp
                            </ScrollLink>
                        </li>
                    </ul>
                ) : (
                    <ul className="items-stretch hidden space-x-3 lg:flex">
                        <li className="flex">
                            <Link
                                to="/"
                                smooth={true}
                                className="hover:text-xl hover:text-orange-600 cursor-pointer flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-white"
                            >
                                Lịch Chiếu
                            </Link>
                        </li>
                        <li className="flex">
                            <Link
                                to="/"
                                smooth={true}
                                className="hover:text-xl hover:text-orange-600 cursor-pointer flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-white"
                            >
                                Cụm rạp
                            </Link>
                        </li>
                    </ul>
                )}

                <div className="items-center flex-shrink-0 hidden lg:flex text-3xl">
                    {/* <button className="self-center px-8 py-3 rounded">Sign in</button>
                    <button className="self-center px-8 py-3 font-semibold rounded bg-violet-600 text-coolGray-50">
                        Sign up
                    </button> */}
                    {_.isEmpty(user) ? (
                        <Menu
                            className="bg-transparent w-60 text-white hover:text-white"
                            mode="horizontal"
                            items={items}
                        />
                    ) : (
                        <Menu
                            className="bg-transparent w-60 text-white text-xl hover:text-white"
                            mode="horizontal"
                            onClick={handleDangXuat}
                            items={items1}
                        />
                    )}
                    {/* <FontAwesomeIcon className="text-2xl" icon={faUser}/> */}
                    {/* <Menu className="bg-transparent w-60 text-white hover:text-white" mode="horizontal" items={items} /> */}
                    {/* </FontAwesomeIcon> */}
                </div>
                <button className="p-4 lg:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6 text-coolGray-800"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>
        </header>
    );
}
