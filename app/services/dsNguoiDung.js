function dsNguoiDung() {
    this.ArrayNguoiDung = [];

    /* Lấy thông tin người dùng*/
    this.layDanhSachNguoiDung = function () {
        return $.ajax({
            url: "http://5d78df40a8c2710014986690.mockapi.io/api/NguoiDung",
            type: "GET"
        })
    }

    //Thêm người dùng
    this.themNguoiDung = function (user) {
        return $.ajax({
            url: "http://5d78df40a8c2710014986690.mockapi.io/api/NguoiDung",
            type: "POST",
            data: user,
        })
    };

}
dsNguoiDung.prototype.xoaNguoiDung = function(id){
    return $.ajax({
        url: `http://5d78df40a8c2710014986690.mockapi.io/api/NguoiDung/${id}`,
        type: "DELETE",
    })
}

//Lấy thông tin người dùng
dsNguoiDung.prototype.layThongTinNguoiDung = function(id){
    return $.ajax({
        url: `http://5d78df40a8c2710014986690.mockapi.io/api/NguoiDung/${id}`,
        type: "GET",
    })
}

//Cập nhật người dùng
dsNguoiDung.prototype.capNhatNguoiDung = function(id, user){
    return $.ajax({
        url: `http://5d78df40a8c2710014986690.mockapi.io/api/NguoiDung/${id}`,
        type: "PUT",
        data: user,
    })
}
