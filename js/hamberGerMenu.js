const detail = async () => {
    let hamber_detail = "";
    let res = await axios.get("http://localhost:3004/menu_hamber");
    let data = res.data;

    data.map((elem) => {
        hamber_detail += `
            <div class="main_detail p-2 mt-3">
                <div class="d-flex justify-content-between">
                    <p class="mt-1 font-s">${elem.name}</p>
                    <img src="./imge/ooooooooooooooooooooooooooooooooooo.png" class="w-7 h-5" alt="">
                </div>
                <div class="line_hamber"></div>
            </div>
        `;
    });

    // استفاده از insertAdjacentHTML برای اضافه کردن محتوا بدون پاک کردن بخش‌های موجود
    document.querySelector(".hmaber_ger_menu_detail").insertAdjacentHTML('beforeend', hamber_detail);
};

export default { detail };
