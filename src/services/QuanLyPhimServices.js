import { baseService } from "./baseService";

export class QuanLyPhimServices extends baseService {
 
    layDanhSachBanner = () =>{
        return this.get(`api/QuanLyPhim/LayDanhSachBanner`);
    }
}

export const quanLyPhimServices = new QuanLyPhimServices();