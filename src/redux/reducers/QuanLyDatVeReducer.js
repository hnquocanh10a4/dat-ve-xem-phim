import { CHANGE_TAB_ACTIVE, CHUYEN_TAB, DAT_VE, SET_CHI_TIET_PHONG_VE } from '../types/QuanLyDatVeType';
import { ThongTinLichChieu } from '../../_core/models/ThongTinPhongVe';

const stateDefault = {
    chiTietPhongVe: new ThongTinLichChieu(),
    danhSachGheDangDat: [],
    danhSachGheKhachDat: [],
    tabActive: '1',
};

export const QuanLyDatVeReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_CHI_TIET_PHONG_VE: {
            state.chiTietPhongVe = action.chiTietPhongVe;
            return { ...state };
        }

        case DAT_VE: {
            let danhSachGheCapNhat = [...state.danhSachGheDangDat];

            let index = danhSachGheCapNhat.findIndex((gheDD) => gheDD.maGhe === action.gheDuocChon.maGhe);
            if (index !== -1) {
                danhSachGheCapNhat.splice(index, 1);
            } else {
                danhSachGheCapNhat.push(action.gheDuocChon);
            }
            return { ...state, danhSachGheDangDat: danhSachGheCapNhat };
        }

        case CHUYEN_TAB: {
            state.tabActive = '2';
            return { ...state };
        }

        case CHANGE_TAB_ACTIVE: {
            state.tabActive = action.number;
            return { ...state };
        }

        default:
            return { ...state };
    }
};
