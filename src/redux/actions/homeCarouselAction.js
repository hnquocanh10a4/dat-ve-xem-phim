import { quanLyPhimServices } from '../../services/QuanLyPhimServices';
import { GET_CAROUSEL_IMG } from '../types/carouselType';
import { displayLoadingAction, hideLoadingAction } from './LoadingActions';

export const homeCarouselAction = async (dispatch) => {
    try {
        dispatch(displayLoadingAction);
        const result = await quanLyPhimServices.layDanhSachBanner();
        dispatch({
            type: GET_CAROUSEL_IMG,
            data: result.data.content,
        });
        await dispatch(hideLoadingAction);
    } catch (error) {}
};
