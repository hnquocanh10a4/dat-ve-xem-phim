import { history } from '../../App';
import { openNotification } from '../../components/Notification/Notification';
import { quanLyNguoiDungService } from '../../services/QuanLyNguoiDung';
import { DANG_NHAP_ACTION, SET_THONG_TIN_NGUOI_DUNG } from '../types/QuanLyNguoiDungType';
import { displayLoadingAction, hideLoadingAction } from './LoadingActions';

export const dangNhapAction = (thongTinDangNhap) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);

            if (result.data.statusCode === 200) {
                dispatch({
                    type: DANG_NHAP_ACTION,
                    thongTinDangNhap: result.data.content,
                });

                openNotification('success', 'Thành công', 'Đăng nhập thành công');
            }

            console.log('result', result);
        } catch (error) {
            openNotification('error', 'Thất bại', 'Đăng nhập Thất bại');
            console.log('error', error.response.data);
        }
    };
};

export const dangKyAction = (thongTinDangKy) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.dangKy(thongTinDangKy);

            if (result.data.statusCode === 200) {
                history.push('/login');
                openNotification('success', 'Thành công', 'Đăng ký thành công mời bạn đăng nhập');
            }

            console.log('result', result);
        } catch (error) {
            openNotification('error', 'Thất bại', 'Đăng ký Thất bại');
            console.log('error', error.response.data);
        }
    };
};

export const layThongTinNguoiDungAction = (thongTinDangNhap) => {
    return async (dispatch) => {
        try {
            dispatch(displayLoadingAction);
            const result = await quanLyNguoiDungService.layThongTinNguoiDung();

            if (result.data.statusCode === 200) {
                dispatch({
                    type: SET_THONG_TIN_NGUOI_DUNG,
                    thongTinNguoiDung: result.data.content,
                });
            }
            await dispatch(hideLoadingAction);

            console.log('result', result);
        } catch (error) {
            console.log('error', error.response.data);
            dispatch(hideLoadingAction);
        }
    };
};
