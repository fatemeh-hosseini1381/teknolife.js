const mid_footer =async()=>{
    let mid="";
        mid=
        `
            <div class="d-flex flex-column w-25">
                <div class="d-flex  justify-content-around">
                    <label for="" class="fw-bold text-white">تلفن:</label>
                    <p class="text-white">021 - 91077500 _ 021 - 91077500</p>
                </div>
                <div class="d-flex  justify-content-around w-75 ">
                    <label for="" class="fw-bold text-white">ایمیل:</label>
                    <p class="text-white">teknolife@gmail</p>
                </div>
                
            </div>
            <div class="mid-footer-2 col-md-3  bg-white d-flex justify-content-around align-items-center p-1 rounded-4">
                <p class="mt-2 fw-bold">شبکه های مجازی</p>
                <img src="./imge/static_instagram.svg"  style="width: 12%; height: 47%;" alt="">
                <img src="./imge/static_telegram.svg"  style="width: 12%; height: 47%;" alt="">
                <img src="./imge/static_aparat.svg" style="width: 12%; height: 47%;" alt="">
                <img src="./imge/static_youtube.svg" style="width: 12%; height: 47%;" alt="">


            </div>
        `
   
    document.querySelector(".mid_footer").innerHTML=mid;
}


const down_footer=async()=>{
    let down="";
        down =
        `
             <nav class="d-flex flex-column justify-content-around ">
                <strong class="text-white">دسترسی سریع</strong>
               <div class=" d-flex flex-column mt-3">
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
            </nav>
            <nav>
                <strong class="text-white">پرفروش ترین محصولات</strong>
                <div class=" d-flex flex-column mt-3">
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
            </nav>
            <nav>
                <strong class="text-white">درباره ما</strong>
                <div class=" d-flex flex-column mt-3">
                    <p class="text-white">بلاگ</p>
                    <p class="text-white">خرید گوشی</p>
                    <p class="text-white">گوشی ایفون</p>
                    <p class="text-white">گوشی سامسونگ</p>
                    <p class="text-white">گوشی شیایومی</p>
                    <p class="text-white">گوشی پوکو</p>
                    <p class="text-white">مقایسه گوشی</p>
                
               </div> 
            </nav>
        `

   document.querySelector(".down").innerHTML=down 
}


function scrollToTop() {
let scrollTop=document.querySelector(".scroll_top")
scrollTop.addEventListener("click",()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})
}


export default {mid_footer,down_footer,scrollToTop}