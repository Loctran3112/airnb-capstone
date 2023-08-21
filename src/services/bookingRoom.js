import { https } from "./config";

export const bookingRoom = {
    getAllBookingRoom: () => {
        return https.get("/api/phong-thue");
    },
    getDatPhong: () =>{
        return https.get("/api/dat-phong");
    },
    getDatPhongTheoMaNguoiDung: (maNguoiDung) =>{
        return https.get(`/api/dat-phong/lay-theo-nguoi-dung/${maNguoiDung}`);
    },
    xoaDatPhong: (id) =>{
        return https.delete(`/api/dat-phong/${id}`);
    }

};