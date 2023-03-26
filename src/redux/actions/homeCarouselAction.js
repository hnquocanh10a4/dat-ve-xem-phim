import { quanLyPhimServices } from "../../services/QuanLyPhimServices"
import { GET_CAROUSEL_IMG } from "../types/carouselType"

export const homeCarouselAction = async (dispatch) =>{
    try {
        const result =  await quanLyPhimServices.layDanhSachBanner()
        dispatch({
            type:GET_CAROUSEL_IMG,
            data : result.data.content
        })
    } catch (error) {
        
    }
}