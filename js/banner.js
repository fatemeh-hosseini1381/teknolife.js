
const banner_1 =async()=>{
    let banner_one="";
    let res=await axios.get("http://localhost:3004/banner")
    res.data.map((elem)=>{
        banner_one+=`
             <img src="${elem.imge}" alt="${elem.alt}">
        `
    })
    document.querySelector(".banner").innerHTML=banner_one
}
const banner_2 =async()=>{
    let banner_two="";
    let res=await axios.get("http://localhost:3004/banner_2")
    res.data.map((elem)=>{
        banner_two+=`
            <div class="img_title_maine d-flex justify-content-between mt-2 w-100" >
               <div class="img_title d-flex flex-column justify-content-around align-items-center">
                    <img src="${elem.imge}" alt="" >
                    <p>${elem.title}</p>
               </div>

            </div>
        `
    })
    document.querySelector(".banner_2 ").innerHTML=banner_two
}


const banner_3 =async()=>{
    let banner_three="";
    let res=await axios.get("http://localhost:3004/banner_3")
    res.data.map((elem)=>{
        banner_three=`
             <img src="${elem.imge}" alt="${elem.alt}">
        `
    })
    document.querySelector(".banner_3 ").innerHTML=banner_three
}
const banner_4 =async()=>{
    let banner_four="";
    let res=await axios.get("http://localhost:3004/banner_4")
    res.data.map((elem)=>{
        banner_four+=`
            <div class="img_title_maine d-flex justify-content-between mt-2 w-100" >
               <div class="img_title d-flex flex-column justify-content-around align-items-center">
                    <img src="${elem.imge}" alt="" >
                    <p>${elem.title}</p>
               </div>

            </div>
        `
    })
    document.querySelector(".banner_4 ").innerHTML=banner_four
}

const banner_5 =async()=>{
    let banner_five="";
    let res=await axios.get("http://localhost:3004/banner_5")
    res.data.map((elem)=>{
        banner_five+=`
            <div class="d-flex justify-content-around align-items-center">
                <img src="${elem.imge}" alt="">
            </div> 
        `
    })
    document.querySelector(".banner_5 ").innerHTML=banner_five
}
const banner_6 =async()=>{
    let banner_six="";
    let res=await axios.get("http://localhost:3004/banner_6")
    res.data.map((elem)=>{
        banner_six+=`
            <div class="img_title_maine d-flex justify-content-between mt-2 w-100" >
               <div class="img_title d-flex flex-column justify-content-around align-items-center">
                    <img src="${elem.imge}" alt="" >
                    <p>${elem.title}</p>
               </div>

            </div>
           
        `
    })
    document.querySelector(".banner_6 ").innerHTML=banner_six
}
const banner_7 =async()=>{
    let banner_seven="";
    let res=await axios.get("http://localhost:3004/banner_7")
    res.data.map((elem)=>{
        banner_seven+=`
            <div class="img_title_maine d-flex justify-content-around align-items-center mt-2 w-25" >
               <div class="img_title d-flex flex-column justify-content-around align-items-center">
                    <img src="${elem.imge}" alt="" >
                    <p>${elem.title}</p>
               </div>

            </div>
           
        `
    })
    document.querySelector(".banner_7").innerHTML=banner_seven
}
const banner_8 =async()=>{
    let banner_eight="";
    let res=await axios.get("http://localhost:3004/banner_8")
    res.data.map((elem)=>{
        banner_eight+=`
            <div class="d-flex justify-content-around align-items-center">
                <img src="${elem.imge}" alt="">
            </div> 
        `
    })
    document.querySelector(".banner_8 ").innerHTML=banner_eight
}


const banner_9 =async()=>{
    let banner_nine="";
    let res=await axios.get("http://localhost:3004/banner_9")
    res.data.map((elem)=>{
        banner_nine+=`
            <div class="d-flex justify-content-around align-items-center">
                <img src="${elem.imge}" alt="">
            </div> 
        `
    })
    document.querySelector(".banner_9").innerHTML=banner_nine
}


export default {banner_1,banner_2,banner_3,banner_4,banner_5,banner_6,banner_7,banner_8,banner_9}