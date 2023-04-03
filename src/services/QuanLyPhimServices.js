import { GROUPID } from '../until/setting/configs';
import { baseService } from './baseService';

export class QuanLyPhimServices extends baseService {
    layDanhSachBanner = () => {
        return this.get(`api/QuanLyPhim/LayDanhSachBanner`);
    };

    layDanhSachPhim = () => {
        return this.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`);
    };
}

export const quanLyPhimServices = new QuanLyPhimServices();
