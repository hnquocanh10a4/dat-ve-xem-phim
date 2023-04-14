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
            if (result.data.statusCode === 404) {
                // openNotification('error', 'Thất bại', 'Đăng nhập Thất bại');
                console.log(result.content, '123123');
            }
        } catch (error) {
            console.log(error.response.data.content);

            openNotification('error', 'Thất bại', error.response.data.content);
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
        } catch (error) {
            console.log(error);

            openNotification('error', 'Thất bại', error.response.data.content);
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
        } catch (error) {
            console.log(error);

            dispatch(hideLoadingAction);
        }
    };
};
