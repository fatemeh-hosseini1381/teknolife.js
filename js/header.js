
let search=document.querySelector(".search")
let open_search=document.querySelector(".open_search")
const open=()=>{
    search.addEventListener("click",()=>{
        open_search.classList.toggle("display")
       })
       
}
const getMenuData = async () => {
    const response = await axios.get("http://localhost:3004/menu"); 
    let menu_bar = "";
    let data = response.data;

    data.map((elem) => {
        let submenuHtml = "";
        if (elem.sub_menu && elem.sub_menu.length > 0) {
            elem.sub_menu.map(subItem => {
               
                let sub_submenuHtml = "";
                if (subItem.sub_sub_menu && subItem.sub_sub_menu.length > 0) {
                    subItem.sub_sub_menu.map(subSubItem => {
                        sub_submenuHtml += `
                        <a href="#">${subSubItem.name}</a>`;
                    });
                }
                submenuHtml += `
                <div class="sub_li d-flex justify-content-start w-100 gap-3  p-2 ">
                    <img src="${subItem.imge}" alt="">
                    <p class="mt-3">${subItem.name}</p>
                    <div class="subsub_menu rounded-bottom-5 ">
                        
                        ${sub_submenuHtml}
                    </div>
                </div>`;
            });
        }

        menu_bar += `
        <li class="maine_li m-auto p-1"> 
            <a href="#" class="">${elem.name}</a> 
            <div class="sub-menu bg-white z-3 d-none position-absolute d-flex justify-content-between rounded-5 gap-3 w-50 mt-1">
                <div class="left_sub  d-flex flex-column justify-content-around align-items-center gap-1  rounded-5 ">
                    ${submenuHtml} 
                </div>
              
            </div>
        </li>`;
    });

    document.querySelector(".ul-header").innerHTML = menu_bar;

    
};
export default{open,getMenuData}
