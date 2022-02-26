// we can select element by many ways 
// 1. document.querySelector 2. document.getElementById

// there are many classes to select as active, for that we use document.querySelectorAll;
// document.querySelectorAll; puts all the panels in a nodelist(kindoff array)

const panels = document.querySelectorAll('.panel')
console.log(panels);
panels.forEach((panel) => {
    // console.log(panel)
//   panel.addEventListner('click', () =>{
//       removeActiveClasses()
//       panel.classlist.add('active')
//   })
    panel.addEventListener('click', ()=> {
        console.log("FUCK YOU");
        removeActiveClasses();
        panel.classList.add("active");
    });
});

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove("active");
    })
}

// for each panel we added an event listner on each of panels so that we click on any panels then it will expand(active class will get activated)