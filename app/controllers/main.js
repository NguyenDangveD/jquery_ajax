$(document).ready(function () {
    var dsnguoidung = new dsNguoiDung();
    getListUser();

    function getListUser() {
        dsnguoidung.layDanhSachNguoiDung()
            .done(function (result) {
                table(result);
            })
            .fail(function (error) {
                console.log(error);
            });
    }
    function table(mang) {
        content = "";
        mang.map(function (item, index) {
            content += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${item.taiKhoan}</td>
                    <td>${item.hoTen}</td>
                    <td>${item.matKhau}</td>
                    <td>${item.email}</td>
                    <td>${item.soDT}</td>
                    <td>${item.maLoaiNguoiDung}</td>
                    <td>
                        <button class="btnSua btn btn-success" data-toggle="modal"
                        data-target="#myModal" data-id="${item.id}">Sửa</button>
                        <button class="btnXoa btn btn-danger" data-id="${item.id}">Xóa</button>
                    </td>
                </tr>            
            `
        })
        $('#tblDanhSachNguoiDung').html(content);
    }

    $('#btnThemNguoiDung').click(function () {
        $('.modal-title').html("Thêm người dùng");
        var footer = `<button class="btn btn-success" id="btnThem">Thêm</button>`;
        $('.modal-footer').html(footer);
    })

    $('body').delegate('#btnThem', 'click', function () {
        var user = $('#TaiKhoan').val();
        var pass = $('#MatKhau').val();
        var name = $('#HoTen').val();
        var email = $('#Email').val();
        var soDT = $('#SoDienThoai').val();
        var loaiNguoiDung = $('#loaiNguoiDung').val();


        var nguoiDung = new NguoiDung(user, pass, name, email, soDT, loaiNguoiDung);
        dsnguoidung.themNguoiDung(nguoiDung)
            .done(function (result) {
                getListUser();

            })
            .fail(function (error) {
                console.log(error);
            })
            ;
    })

    $('body').delegate('.btnXoa', 'click', function () {
        var id = $(this).data("id");
        dsnguoidung.xoaNguoiDung(id)
            .done(function () {
                getListUser();
            })
            .fail(function () {
                alert("Error");
            })
    })

    //Lấy thông tin người dùng
    $('body').delegate('.btnSua', 'click', function () {

        $('.modal-title').html("Sửa người dùng");

        var footer = `<button id="btnCapNhat" class="btn btn-success">Cập Nhật</button>`;

        $('.modal-footer').html(footer);
        var id = $(this).data("id");
        dsnguoidung.layThongTinNguoiDung(id)
            .done(function (result) {
                $('#TaiKhoan').val(result.taiKhoan);
                $('#MatKhau').val(result.matKhau);
                $('#HoTen').val(result.hoTen);
                $('#Email').val(result.email);
                $('#SoDienThoai').val(result.soDT);
                $('#loaiNguoiDung').val(result.maLoaiNguoiDung);

                //Cập nhật người dùng
                $('body').delegate('#btnCapNhat', 'click', function () {
                    var user = $('#TaiKhoan').val();
                    var pass = $('#MatKhau').val();
                    var name = $('#HoTen').val();
                    var email = $('#Email').val();
                    var soDT = $('#SoDienThoai').val();
                    var loaiNguoiDung = $('#loaiNguoiDung').val();

                    var nguoidung = new NguoiDung(user, pass, name, email, soDT, loaiNguoiDung);
                    dsnguoidung.capNhatNguoiDung(id, nguoidung)
                        .done(function (result) {
                            getListUser();
                        })
                        .fail(function () {
                            alert("Error");
                        })
                })
            })
            .fail(function () {
                alert("Error");
            })
    })
})

