const tabs = document.querySelectorAll('.tab_btn');
const all_content = document.querySelectorAll('#mission__section .container .content_box .content');

tabs.forEach((tab, index)=>{
    tab.addEventListener('click', (e)=>{
        tabs.forEach(tab=>{tab.classList.remove('active')})
        tab.classList.add("active");

        var line = document.querySelectorAll('.content_bg');
        line.forEach((line)=>{
            line.style.width = e.target.offsetWidth + "px";
            line.style.left= e.target.offsetLeft + 'px'; 

            all_content.forEach(content=>{content.classList.remove('active')});
            all_content[index].classList.add('active');
        })
    })
})

// block text 
function validateNumber(input) {
    input.value = input.value.replace(/\D/g, '');
  }


  const openBtn = document.querySelectorAll("header nav .open__nav-btn");
  const closeBtn = document.querySelectorAll("header nav .close__nav-btn");
  const navList = document.querySelectorAll("header nav ul");

  openBtn.forEach(function (openMenu) {
    openMenu.addEventListener('click', function () {
        navList.forEach(function (navItem) {
            navItem.classList.add("show");
            document.body.style.overflow = "hidden"
        });
    });
});

closeBtn.forEach(function (closeMenu) {
    closeMenu.addEventListener('click', function () {
        navList.forEach(function (navItem) {
            navItem.classList.remove("show");
            document.body.style.overflow = "auto"
        });
    });
});
