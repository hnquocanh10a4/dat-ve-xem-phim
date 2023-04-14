import { TOKEN, USER_LOGIN } from '../../until/setting/configs';
import { DANG_NHAP_ACTION, DANG_XUAT, SET_THONG_TIN_NGUOI_DUNG } from '../types/QuanLyNguoiDungType';
import { history } from '../../App.js';

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
    userLogin: user,
};

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case DANG_NHAP_ACTION: {
            const { thongTinDangNhap } = action;
            localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap));
            localStorage.setItem(TOKEN, thongTinDangNhap.accessToken);
            history.push('/');
            return { ...state, userLogin: thongTinDangNhap };
        }

        case SET_THONG_TIN_NGUOI_DUNG: {
            state.thongTinNguoiDung = action.thongTinNguoiDung;
            return { ...state };
        }

        case DANG_XUAT: {
            localStorage.removeItem(USER_LOGIN);
            localStorage.removeItem(TOKEN);
            return { ...state, userLogin: {} };
        }

        default:
            return { ...state };
    }
};
