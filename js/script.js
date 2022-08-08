/*==================================typing animation ====================================*/
var typed = new Typed(".typing", {
    strings: ["", "Desarrollador web full-stack junior"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})
/*==================================ASIDE ====================================*/
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll('.section'),
      totalSection = allSection.length;
      for(let i=0; i<totalNavList; i++)
      {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function() 
        {
             removeBackSection();
            for (let j = 0; j <totalNavList; j++)
            {   
                if (navList[j].querySelector("a").classList.contains("active")) {
                    addBackSection(j);
                    //allSection[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSection(this);
            if (window.innerWidth < 1200) {
                asideSectionTogglerBtn();
            }
        })
      }
      function removeBackSection() {
        for (let i = 0; i < totalSection; i++) 
        {
            allSection[i].classList.remove('back-section');
        }
      }
      function addBackSection(num)
      {
        allSection[num].classList.add("back-section");
      }
      function showSection(element) {
            for (let i = 0; i < totalSection; i++) 
            {
                allSection[i].classList.remove('active');
            }
         const target= element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add('active')
    
    }
    function updateNav(element)
     {
        for (let i =0; i<totalNavList; i++)
         {
            navList[i].querySelector("a").classList.remove("active");
            const target= element.getAttribute("href").split("#")[1];
            if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) 
            {
                navList[i].querySelector("a").classList.add("active");
            }
        }
    }
    document.querySelector(".hire-me").addEventListener("click", function() {
       const sectionIndex = this.getAttribute("data-section-index");
       //console.log(sectionIndex)
        showSection(this);
        updateNav(this);
        addBackSection(sectionIndex);
    })
    const navTogglerBtn = document.querySelector(".nav-toggler"),
        aside = document.querySelector(".aside");
        navTogglerBtn.addEventListener("click", () => 
        {
            asideSectionTogglerBtn();
        })
        function asideSectionTogglerBtn() {
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");
            for (let i = 0; i < totalSection; i++) {
                allSection[i].classList.toggle("open");
                
            }
        }


/*==================================validation Form====================================*/

const btnAccion = document.getElementById("btnAccion");
btnAccion.addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const mail = document.getElementById("mail").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    if (name == "" || mail == "" || phone == "" || message == "") {
      Swal.fire("Oops...", "Todos los campos con * son obligatorios", "warning");
      }else {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Mensaje enviado con exito, en breve te responderé',
            showConfirmButton: false,
            timer: 1500
          })
    }
  });


/*==================================Work popup====================================*/
document.addEventListener("click", (e)=>{
    if(e.target.classList.contains("work-button")){
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})
function togglePortfolioPopup() {
    document.querySelector(".portfolio-popup").classList.toggle("open");
}
document.querySelector(".portfolio-popup-close").addEventListener("click", togglePortfolioPopup)

function  portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(".work-img").src;
    document.querySelector(".portfolio-popup-subtitle span").innerHTML = portfolioItem.querySelector(".work-title").innerHTML;
    document.querySelector(".portfolio-popup-body").innerHTML = portfolioItem.querySelector(".portfolio-item-datails").innerHTML;
}