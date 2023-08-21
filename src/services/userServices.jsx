import { https } from "./config";

export const userServ = {
    signup: (data) => {
        return https.post('/api/users', data);
    },
    getNguoiDung: () => {
        return https.get('/api/users');
    },
    xoaNguoiDung: (id) => {
        return https.delete(`/api/users?id=${id}`);
    },
};