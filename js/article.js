const test_1 = async () => {
    try {
        let articles_all = "";
        let res = await axios.get("http://localhost:3004/article");
        let data = res.data;
        data.map((elem) => {
            articles_all += `
                <h6>${elem.title_h}</h6>
                <p>
                   ${elem.title_p}
                    <strong>${elem.blod_p}</strong>
                   ${elem.title_p}
                </p>
            `;
        });
        document.querySelector(".article").innerHTML = articles_all;
    } catch (error) {
        console.error("An error occurred:", error);
    }
};


const open_close_article = () => {
    const toggleButton = document.getElementById('toggleButton');
    const text = document.querySelector('.article');
    toggleButton.addEventListener('click', function() {
        if (text.classList.contains('text-article_height')) {
            text.classList.remove('text-article_height');
            toggleButton.innerHTML = `
                <p class="text-center text-primary mt-2">نمایش بیشتر</p>
                <img src="./imge/chevron (1).png" style="width: 14%; height: 2%;" alt="">
            `;
            text.style.filter=' blur(1px)'
        } else {
            text.classList.add('text-article_height');
            toggleButton.innerHTML = `
                <p class="text-center text-primary mt-2">نمایش کمتر</p>
                <img src="./imge/chevron (1).png" style="width: 14%; height: 2%;" alt="">
            `;
         
            text.style.filter=' blur(0px)'
        }
    });
};



export default {test_1,open_close_article};