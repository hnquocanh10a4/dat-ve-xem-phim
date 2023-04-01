import { GROUPID } from '../until/setting/configs';
import { baseService } from './baseService';
export class QuanLyRapService extends baseService {
    layDanhSachHeThongRap = () => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`);
    };
}

export const quanLyRapService = new QuanLyRapService();
