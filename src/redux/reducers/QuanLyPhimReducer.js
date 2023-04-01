import { GET_ALL_FILM, SET_FILM_DANG_CHIEU, SET_FILM_SAP_CHIEU } from '../types/QuanLyPhimType';

const stateDefault = {
    arrFilm: [
        {
            maPhim: 1282,
            tenPhim: 'Ban tay diet quy',
            biDanh: 'ban-tay-diet-quy',
            trailer: 'https://www.youtube.com/embed/uqJ9u7GSaYM',
            hinhAnh: 'http://movieapi.cyberlearn.vn/hinhanh/ban-tay-diet-quy.png',
            moTa: "Newlywed couple Ted and Tami-Lynn want to have a baby, but in order to qualify to be a parent, Ted will have to prove he's a person in a court of law.",
            maNhom: 'GP00',
            ngayKhoiChieu: '2019-07-29T00:00:00',
            danhGia: 5,
            hot: true,
            dangChieu: false,
            sapChieu: true,
        },
    ],
    dangChieu: true,
    sapChieu: false,
    arrFilmDefault: [],
};

export const QuanLyPhimReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case GET_ALL_FILM: {
            state.arrFilm = action.data;
            state.arrFilmDefault = action.data;
            return { ...state };
        }
        case SET_FILM_DANG_CHIEU: {
            state.dangChieu = !state.dangChieu;
            state.sapChieu = !state.sapChieu;
            state.arrFilm = state.arrFilmDefault.filter((film) => film.dangChieu === true);
            return { ...state };
        }
        case SET_FILM_SAP_CHIEU: {
            state.dangChieu = !state.dangChieu;
            state.sapChieu = !state.sapChieu;
            state.arrFilm = state.arrFilmDefault.filter((film) => film.sapChieu === true);
            return { ...state };
        }
        default:
            return { ...state };
    }
};
