import { https } from "./config";

export const commitUser = {
    getBinhLuan: () => {
        return https.get("/api/binh-luan");
    },
    postBinhLuan: (dataBinhLuan) => {
        return https.post("/api/binh-luan", dataBinhLuan);
    },
    xoaBinhLuan: (id) => {
        return https.delete(`/api/binh-luan/${id}`);
    },
    getBinhLuanTheoMaPhong: (maPhong) => {
        return https.get(`/api/binh-luan/lay-binh-luan-theo-phong/${maPhong}`);
    }

};