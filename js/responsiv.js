const close_list = () => {
    let closes = document.querySelector(".close_hamber_ger_menu");
    let list_group = document.querySelector(".hmaber_ger_menu_detail");
    let parent_whole = document.querySelector(".parent_whole");

    closes.addEventListener('click', () => {
        list_group.style.display = "none";
        parent_whole.style.zIndex = "10"; 
        // swiper-z.style.zIndex = "10";
    });
}

const open_list_hamber = () => {
    let hamber_ger_menu = document.querySelector(".hamber_ger_menu");
    let hmaber_ger_menu_detail = document.querySelector(".hmaber_ger_menu_detail");
    let parent_whole = document.querySelector(".parent_whole"); 

    hamber_ger_menu.addEventListener("click", () => {
        hmaber_ger_menu_detail.style.display = "flex";  
        hmaber_ger_menu_detail.style.flexDirection = "column";  
        hmaber_ger_menu_detail.style.zIndex = "999"; 
        parent_whole.style.zIndex = "-10"; 
     
    });
}
const down_footer_res=async()=>{
    let down="";
        down =
        `
    <div id="accordion" class="w-100 ">
        <div class="card mt-2">
            <div class="card-header">
            <a class="btn" data-bs-toggle="collapse" href="#collapseQuickAccess">
                دسترسی سریع
            </a>
            </div>
            <div id="collapseQuickAccess" class="collapse " data-bs-parent="#accordion">
            <div class="card-body">
                <p class="text-white">بلاگ</p>
                <p class="text-white">خرید گوشی</p>
                <p class="text-white">گوشی ایفون</p>
                <p class="text-white">گوشی سامسونگ</p>
                <p class="text-white">گوشی شیایومی</p>
                <p class="text-white">گوشی پوکو</p>
                <p class="text-white">مقایسه گوشی</p>
                <p class="text-white">قیمت لب تاپ</p>
                <p class="text-white">هندزفری بلوتوثی</p>
                <p class="text-white">لب تاپ ایسوس</p>
            </div>
            </div>
        </div>

        <!-- Best-selling Products Accordion -->
        <div class="card mt-2">
            <div class="card-header">
            <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseBestSelling">
                پرفروش ترین محصولات
            </a>
            </div>
            <div id="collapseBestSelling" class="collapse" data-bs-parent="#accordion">
            <div class="card-body">
                <p class="text-white">بلاگ</p>
                <p class="text-white">خرید گوشی</p>
                <p class="text-white">گوشی ایفون</p>
                <p class="text-white">گوشی سامسونگ</p>
                <p class="text-white">گوشی شیایومی</p>
                <p class="text-white">گوشی پوکو</p>
                <p class="text-white">مقایسه گوشی</p>
                <p class="text-white">قیمت لب تاپ</p>
                <p class="text-white">هندزفری بلوتوثی</p>
                <p class="text-white">لب تاپ ایسوس</p>
            </div>
            </div>
        </div>

        <!-- About Us Accordion -->
        <div class="card bg-danger w-100 mt-2">
            <div class="card-header">
            <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseAboutUs">
                درباره ما
            </a>
            </div>
            <div id="collapseAboutUs" class="collapse" data-bs-parent="#accordion">
            <div class="card-body">
                <p class="text-white">بلاگ</p>
                <p class="text-white">خرید گوشی</p>
                <p class="text-white">گوشی ایفون</p>
                <p class="text-white">گوشی سامسونگ</p>
                <p class="text-white">گوشی شیایومی</p>
                <p class="text-white">گوشی پوکو</p>
                <p class="text-white">مقایسه گوشی</p>
            </div>
            </div>
        </div>
    </div>


        `

   document.querySelector(".down_res").innerHTML=down 
}

const slider_header_res=async()=>{
    let htmlslider="";
    let res=await axios.get("http://localhost:3004/swiper_res") 
   res.data.map((elem)=>{
    console.log(elem.imge);
    
    htmlslider+= `<div class="swiper-slide swiper-slide_res"> <img src="${elem.imge}" alt="${elem.alt}"></div>`
    })
    document.querySelector(".swiper-wrapper.swiper-wrapper_res").innerHTML=htmlslider;
   new Swiper(".mySwiper_res", {
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
      });
}
export default { close_list,open_list_hamber,down_footer_res,slider_header_res };
