
const title = document.querySelector("#title");
const cssClicked = "clicked";
const cssMouseOver = "mouseover";

function handleResize(){
    console.log("Wow! window resizing!");
}

function handleClick(){
    //title css변경하기 
    

    if(!title.classList.contains(cssClicked)){
        title.classList.remove(cssMouseOver);
        title.classList.add(cssClicked);
    } else{
        title.classList.remove(cssClicked);
    }
}

function handleOver(){
    //toggle이용하여 css변경하기
    title.classList.remove(cssClicked,cssMouseOver);
    title.classList.toggle("mouseover");
}
//이벤트리스너 테스트
function init(){
    //윈도우사이즈변경
    window.addEventListener("resize",handleResize);
    title.addEventListener("click",handleClick);
    title.addEventListener("mouseover",handleOver) ;   
}

init();


