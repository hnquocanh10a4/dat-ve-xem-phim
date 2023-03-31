import { quanLyPhimServices } from '../../services/QuanLyPhimServices';
import { GET_ALL_FILM } from '../types/QuanLyPhimType';

export const layDanhSachPhimAction = async (dispatch) => {
    try {
        const result = await quanLyPhimServices.layDanhSachPhim();
        dispatch({ type: GET_ALL_FILM, data: result.data.content });
    } catch (error) {
        console.error(error);
    }
};
