const slider_header=async()=>{
    let htmlslider="";
    let res=await axios.get("http://localhost:3004/swiper") 
   res.data.map((elem)=>{
    console.log(elem.imge);
    
    htmlslider+= `<div class="swiper-slide swiper-slide_1 "> <img src="${elem.imge}" alt="${elem.alt}"></div>`
    })
    document.querySelector(".swiper-wrapper").innerHTML=htmlslider;
     new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
      });
}

//////////////////////slider_two
 const slider_two = async () => {
    let htmlslider_2 = "";
    let res = await axios.get("http://localhost:3004/swiper_2");
    let data = res.data;
  
        data.map((elem) => {
            htmlslider_2 += `
            <div class="swiper-slide section-mein_two_swiper   w-15 d-flex justify-content-around flex-column align-items-center gap-2">
                <span class="d-flex flex-column justify-content-center align-items-center w-65">
                <img src="${elem.imge}" class="w-100 p-1"   alt=""></span>
                <p class="p_swiper_two">${elem.title}</p>
            </div>`;
        });
       

  
    
    document.querySelector(".swiper-wrapper.swiper-wrapper_2").innerHTML = htmlslider_2;

    new Swiper('.mySwiper_2', {
        slidesPerView: 6, 
        spaceBetween: 6,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next_2',
            prevEl: '.swiper-button-prev_2',
        },
    });
};



// ////////////////slider_tree
let initialTime = [1, 30, 45]; 
let timer = [
    initialTime[0], 
    initialTime[1], 
    initialTime[2], 
    initialTime[0] * 3600 + initialTime[1] * 60 + initialTime[2]
];


const starttime = (clockElement) => {
    timer[3]++; 
    timer[0] = Math.floor(timer[3] / 3600); 
    timer[1] = Math.floor(timer[3] / 60 - timer[0] * 60); 
    timer[2] = Math.floor(timer[3] - (timer[0] * 3600 + timer[1] * 60)); 
    
    let zero = add_zero(timer[0], timer[1], timer[2]);
    
    clockElement.innerHTML = zero;
};

const add_zero = (x, y, z) => {
    x = x < 10 ? '0' + x : x;
    y = y < 10 ? '0' + y : y;
    z = z < 10 ? '0' + z : z;
    return `${x}:${y}:${z}`;
};

const finaly_time_clock = () => {
    const clockElements = document.querySelectorAll('.clock');
    
    clockElements.forEach(clockElement => {
        let zero = add_zero(timer[0], timer[1], timer[2]);
        clockElement.innerHTML = zero;
        
        setInterval(() => starttime(clockElement), 1000);
    });
};

window.onload = finaly_time_clock;

const slider_tree = async () => {
    let htmlslider_3 = "";
    let res = await axios.get("http://localhost:3004/swiper_3");
    let data = res.data;

    data.forEach((elem) => {
        if (elem.p_title_time) {
      
            htmlslider_3 += `
                <div class="swiper-slide section-mein_three_swiper d-flex flex-row justify-content-center w-20 p-3 gap-2">
                    <div class="trees_part">
                        <div class="time d-flex justify-content-between">
                            <p class="p_title_time m-0">${elem.p_title_time || ''}</p>
                            <p class="clock m-0">00:00:00</p>
                        </div>
                        <div class="line_red"></div>
                        <div class="seconde_part">
                            <img src="${elem.imge}" alt="">
                            <div class="p_seconde_part text-end">
                                <a href="#">${elem.title}</a>
                            </div>
                        </div>
                        <div class="third_part">
                            <div class="discount">${elem.discount}</div>
                            <div class="qeimt">${elem.price}</div>
                        </div>
                        <div class="qeimt_line_through">${elem.qeimt_line_through}</div>
                    </div>
                </div>
            `;
        } else {
        
            htmlslider_3 += `
                <div class="swiper-slide section-mein_three_swiper d-flex flex-row justify-content-center w-20  p-3 gap-5 mt-5">
                    <div class="trees_part">
                        <div class="time d-flex justify-content-between">
                            <p class="p_title_time m-0"></p>
                            <p class=" m-0"></p>
                        </div>
                        <div class="seconde_part">
                            <img src="${elem.imge}" alt="">
                            <div class="p_seconde_part text-end">
                                <a href="#">${elem.title}</a>
                            </div>
                        </div>
                         <div class="third_part">
                            <div class="discount">${elem.discount}</div>
                            <div class="qeimt">${elem.price}</div>
                        </div>
                        <div class="qeimt_line_through">${elem.qeimt_line_through}</div>
                    </div>
                </div>
            `;
        }
    });

    document.querySelector(".swiper-wrapper_3").innerHTML = htmlslider_3;

    new Swiper('.mySwiper_3', {
        slidesPerView: 6, 
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next_3',
            prevEl: '.swiper-button-prev_3',
        },
    });
}


const slider_four = async () => {
    let htmlslider_4 = "";
    let res = await axios.get("http://localhost:3004/swiper_4");
    let data = res.data;

        data.forEach((elem) => {
            if(elem.p_title_time){
                htmlslider_4 += `
                <div class="swiper-slide w-20 d-flex justify-content-around align-items-center  section-mein_five_swiper p-3  gap-4 ">
                   <div class="threes_part d-flex flex-column justify-content-around">
                       <div class="time d-flex justify-content-between">
                           <p class="p_title_time m-0">${elem.p_title_time || ''}</p>
                           <p class="clock m-0">00:00:00</p>
                       </div>
                           <div class="line_red"></div>
                       <div class="first_part d-flex flex-column justify-content-center align-items-center">
                           <img src="${elem.imge}" class="w-75" alt="">
                               <div class="p_first_part text-end  ">
                                  <a href="#">${elem.title}</a>
                               </div>
                       </div>
                       <div class="seconde_part d-flex flex-row justify-content-end  ">
                         <div class="qeimt_five_swiper float-end">${elem.price}</div>
                                  
                       </div>
                   </div>
               </div>
               
               `

            }
            else {
        
                htmlslider_4 += `
                   <div class="swiper-slide w-20 d-flex justify-content-around align-items-center  section-mein_five_swiper p-3  gap-4 mt-4">
                   <div class="two_part d-flex flex-column justify-content-around">
                       <div class="first_part d-flex flex-column justify-content-center align-items-center">
                           <img src="${elem.imge}" class="w-75" alt="">
                               <div class="p_first_part text-end  ">
                                  <a href="#">${elem.title}</a>
                               </div>
                       </div>
                       <div class="seconde_part d-flex flex-row justify-content-end  ">
                         <div class="qeimt_five_swiper float-end">${elem.price}</div>
                                  
                       </div>
                   </div>
               </div>
                `;
            }
           
           
        });
    
    document.querySelector(".swiper-wrapper_4").innerHTML = htmlslider_4;
    new Swiper('.mySwiper_4', {
        slidesPerView: 5, 
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next_4',
            prevEl: '.swiper-button-prev_4',
        },
    });
    
}
const slider_five = async () => {
    let htmlslider_5 = "";
    let res = await axios.get("http://localhost:3004/swiper_5");
    let data = res.data;
        
        

        data.forEach((elem) => {
            htmlslider_5+= `
             <div class="section-mein_five_swiper  swiper-slide w-20 d-flex justify-content-around align-items-center p-3  gap-4 ">
                <div class="two_part d-flex flex-column justify-content-around">
                    <div class="first_part d-flex flex-column justify-content-center align-items-center">
                        <img src="${elem.imge}" class="w-75" alt="">
                            <div class="p_first_part text-end w-25 ">
                               <a href="#">${elem.title}</a>
                            </div>
                    </div>
                    <div class="seconde_part d-flex flex-row justify-content-end  ">
                      <div class="qeimt_five_swiper float-end">${elem.price}</div>
                               
                    </div>
                </div>
            </div>
            
            `
           
        });

    
    

    document.querySelector(".swiper-wrapper_5").innerHTML = htmlslider_5;

    new Swiper('.mySwiper_5', {
        slidesPerView: 5, 
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next_5',
            prevEl: '.swiper-button-prev_5',
        },
    });
}


//////////////////table

const table_price_1=async()=>{
   let table_price="";
    let res=await axios.get("http://localhost:3004/table_price_1") 
    let data=res.data
    data.map((elem)=>{
    console.log(elem.imge);
   
        table_price+= `
            <li class="w-30  p-4  list-unstyled" >
                <div class="d-flex justify-content-around  ">
                    <h3 class="d-flex " style="font-size: 15px;">
                           
                        <span class="span_table_price_1" style="font-weight: bold; font-size: 18px;">${elem.title}</span>
                         
                    </h3>
                </div>
            </li>
    
        
    `


    })
    document.querySelector(".section_1>ul").innerHTML=table_price;
}




const table_price_2=async()=>{
    let table_price="";
     let res=await axios.get("http://localhost:3004/table_price_2") 
     let data=res.data
     data.map((elem)=>{
     console.log(elem.imge);
    
         table_price+= `
            
            <li class="w-30  p-4 rounded-3 list-unstyled" style="background-color: #FFF5F6; border: 1px solid #ffadb5;">
                <div class=" d-flex justify-content-around">
                    <span class="span_table_price_1"  style="font-weight: bold; font-size: 18px;"  >${elem.title}</span>
                </div>
            </li>
         
     `
 
 
     })
     document.querySelector(".section_2>ul").innerHTML=table_price;
 }








 const slider_six = async () => {
    let htmlslider_6 = "";
    let res = await axios.get("http://localhost:3004/slider_6");
    let data = res.data;

         data.forEach((elem) => {
            htmlslider_6+= `
                    <div class="swiper-slide w-20 d-flex justify-content-around align-items-center section-mein_six_swiper  d-flex  justify-content-around flex-column align-items-center gap-2">
                        <img src="${elem.imge}" class="w-50" alt="">
                    </div>
                <div class="line_2"></div>
            
            `
           
        });

    document.querySelector(".swiper-wrapper_6").innerHTML = htmlslider_6;
  


    new Swiper('.mySwiper_6', {
        slidesPerView: 5, 
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next_6',
            prevEl: '.swiper-button-prev_6',
        },
    });

} 




const slider_seven = async () => {
    let htmlslider_7 = "";
    let res = await axios.get("http://localhost:3004/swiper_7");
    let data = res.data;
        data.forEach((elem) => {
            htmlslider_7  += `
            <div class="swiper-slide w-20 d-flex justify-content-around align-items-center section-mein_seven_swiper p-3  gap-4 ">
                <div class="two_part d-flex flex-column justify-content-around">
                
                    <div class="first_part d-flex flex-column justify-content-center align-items-center">
                        <img src="${elem.imge}" class="w-75" alt="">
                            <div class="p_first_part text-end  ">
                               <a href="#">${elem.title}</a>
                            </div>
                    </div>
                    <div class="seconde_part d-flex flex-row justify-content-end  ">
                      <div class="qeimt_five_swiper float-end">${elem.price}</div>
                               
                    </div>
                </div>
            </div>
            
            `
            
           
        });
    document.querySelector(".swiper-wrapper_7").innerHTML = htmlslider_7;

    new Swiper('.mySwiper_7', {
        slidesPerView: 4.5, 
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next_7',
            prevEl: '.swiper-button-prev_7',
        },
    });
}






const home_page=async()=>{
    let home="";
     let res=await axios.get("http://localhost:3004/lavazm_khanegi_home") 
     let data=res.data
     console.log(data);
     
     data.map((elem)=>{
     console.log(elem.imge);
    
         home+= `
            
          
            <div class="w-25 d-flex align-content-center justify-content-center p-4 ">
                <div class="div_img bg-gray rounded-4 p-2">
                 <img src="${elem.imge}" class="" alt="">
                </div>
            </div>
        `
 
 
     })
     document.querySelector(".maine_content>div").innerHTML=home;
 }



 const slider_eight = async () => {
    let htmlslider_8 = "";
    let res = await axios.get("http://localhost:3004/swiper_8");
    let data = res.data;
        data.forEach((elem) => {
            htmlslider_8 += `
             <div class="swiper-slide w-20 d-flex justify-content-around align-items-center  section-mein_eight_swiper p-3  gap-4 ">
                <div class="two_part d-flex flex-column justify-content-around">
                    <div class="first_part d-flex flex-column justify-content-center align-items-center">
                        <img src="${elem.imge}" class="w-75" alt="">
                        <div class="p_first_part text-end  ">
                            <a href="#">${elem.title}</a>
                        </div>
                    </div>
                    <div class="seconde_part d-flex flex-row justify-content-end ">
                      <div class="qeimt_five_swiper float-end">${elem.price}</div>
                               
                    </div>
                </div>
            </div>
            
            `
           
        });
    document.querySelector(".swiper-wrapper_8").innerHTML = htmlslider_8;
    new Swiper('.mySwiper_8', {
        slidesPerView: 4.5, 
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next_8',
            prevEl: '.swiper-button-prev_8',
        },
    });
    
}






////////////////////////////////////////////
const slider_nine = async () => {
    let htmlslider_9 = "";
    let res = await axios.get("http://localhost:3004/swiper_9");
    let data = res.data;

    data.forEach((elem) => {
        htmlslider_9 += `
   
                <div class="swiper-slide section-mein_nine_swiper d-flex flex-row justify-content-center w-20 p-3 gap-2">
                    <div class="trees_part">
                        <div class="time d-flex justify-content-between">
                            <p class="p_title_time m-0">${elem.p_title_time}</p>
                            <p class="clock m-0">00:00:00</p>
                        </div>
                        <div class="line_red"></div>
                        <div class="seconde_part">
                            <img src="${elem.imge}" alt="">
                            <div class="p_seconde_part text-end">
                                <a href="#">${elem.title}</a>
                            </div>
                        </div>
                        <div class="third_part">
                            <div class="discount">${elem.discount}</div>
                            <div class="qeimt">${elem.price}</div>
                        </div>
                        <div class="qeimt_line_through">${elem.qeimt_line_through}</div>
                    </div>
                </div>
            `;
    });

    document.querySelector(".swiper-wrapper_9").innerHTML = htmlslider_9;

    new Swiper('.mySwiper_9', {
        slidesPerView: 4.5, 
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next_9',
            prevEl: '.swiper-button-prev_9',
        },
    });
}


//////////////////////////
const slider_ten = async () => {
    let htmlslider_10 = "";
    let res = await axios.get("http://localhost:3004/swiper_10");
    let data = res.data;

    let slider_content = "";

    data.forEach((elem) => {
        slider_content += `
            <div class="swiper-slide w-20 section-mein_ten_swiper p-3 gap-2">
                <div>
                    <img src="${elem.imge}" class="w-100"  alt="">
                    <p class="fw-bold p-4 h6 rounded-bottom">${elem.title}</p>
                </div>
            </div>`;
    });

    htmlslider_10 = slider_content;

    document.querySelector(".swiper-wrapper_10").innerHTML = htmlslider_10;
    new Swiper('.mySwiper_10', {
        slidesPerView: 5,
        spaceBetween: 20,
        loop: false ,
        navigation: {
            nextEl: '.swiper-button-next_10',
            prevEl: '.swiper-button-prev_10',
        },
       
    });
}


// ////////////////slider_foure




export default {slider_header,slider_two,starttime,finaly_time_clock,slider_tree,slider_four,slider_five,table_price_1,table_price_2,slider_six,slider_seven,home_page,slider_eight,slider_nine,slider_ten};

