let browser = document.querySelector("iframe");
let inputSearch = document.querySelector("#url_text");
let frame = window.frames["frameTab"];
let tab = 1;
let browserWindow = frame.location.replace("www.thereal.com/index.html");

//Close 
document.querySelectorAll(".dot")[0].addEventListener("click", e => {
    if(tab == 1){
    	browserWindow = frame.location.replace("about:blank");
    	inputSearch.value = "";
	    tab = 0;
	}
});

//New 
document.querySelectorAll(".dot")[1].addEventListener("click", e => {
    if(tab == 0){
    	browserWindow = frame.location.assign("./newPage.html");
	    tab = 1;
    }
});

//Search 
inputSearch.addEventListener("keyup", e => {
    const key = e.keyCode;

   	//Verification URL
    if(key == 13){
		let size = inputSearch.value.length;	
    	if(inputSearch.value.slice(0,3) == "www" && (inputSearch.value.slice(size-4,size) == ".com")){
	    	browserWindow = frame.location.replace("./"+inputSearch.value+"/index.html");
	    }
	    else if(inputSearch.value.slice(0,3) == "www" && inputSearch.value.slice(size-5,size) == ".com/"){
	    	browserWindow = frame.location.replace("./"+inputSearch.value+"index.html");
    	}
    	else{
	    	browserWindow = frame.location.replace("./"+inputSearch.value);
    	}
    }
});

//Properties
document.querySelectorAll("div")[5].addEventListener("click", e => {
	alert("Largura x Comprimento do frame: "
		+browser.scrollWidth+"x"+browser.scrollHeight
		+"\n\nSistema Operacional: "+navigator.platform);
});