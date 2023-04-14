import { quanLyDatVeService } from '../../services/QuanLyDatVeService';
import { ThongTinDatVe } from '../../_core/models/ThongTinDatVe';
import { CHUYEN_TAB, SET_CHI_TIET_PHONG_VE } from '../types/QuanLyDatVeType';
import { displayLoadingAction, hideLoadingAction } from './LoadingActions';

export const layChiTietPhongVeAction = (maLichChieu) => {
    return async (dispatch) => {
        try {
            dispatch(displayLoadingAction);
            const result = await quanLyDatVeService.layChiTietPhongVe(maLichChieu);

            if (result.status === 200) {
                dispatch({
                    type: SET_CHI_TIET_PHONG_VE,
                    chiTietPhongVe: result.data.content,
                });
            }
            await dispatch(hideLoadingAction);
        } catch (error) {
            console.log(error);

            dispatch(hideLoadingAction);
        }
    };
};

export const datVeAction = (thongTinDatVe = new ThongTinDatVe()) => {
    return async (dispatch) => {
        try {
            dispatch(displayLoadingAction);

            const result = await quanLyDatVeService.datVe(thongTinDatVe);
            //Đặt vé thành công gọi api load lại phòng vé
            await dispatch(layChiTietPhongVeAction(thongTinDatVe.maLichChieu));
            // await dispatch({ type: DAT_VE_HOAN_TAT });
            await dispatch(hideLoadingAction);

            dispatch({ type: CHUYEN_TAB });
        } catch (error) {
            console.log(error);

            dispatch(hideLoadingAction);
        }
    };
};
