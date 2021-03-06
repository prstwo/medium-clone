
let btnAdd=document.querySelector(".button-add-section");

/*this function get dimension of the page in order to set the left value of emlement with class .button-add-section  */
function getDimension(){
    let winWidth=window.innerWidth;
    let postContainerWidth=document.querySelector(".new-post-container").offsetWidth;
    btnAdd.style.left=((winWidth-postContainerWidth)/2)+"px";
}
getDimension();

function loadThumbnail(thumbnail){
    let thc = document.querySelector(".select-thumbnail-container");
    let thumbnailElement = document.createElement('img');
    thumbnailElement.style.maxWidth="100%";
    thumbnailElement.style.height="auto";
    thumbnailElement.style.marginBottom="16px";
    thumbnailElement.style.marginTop="10px";
    thumbnailElement.style.cursor="pointer";
    thumbnailElement.setAttribute("contenteditable","true");
    thumbnailElement.setAttribute("onclick","deleteMedia(this)");
    thumbnailElement.setAttribute("tabindex","1");
        /*add a img tag after the current p element */
        thc.parentNode.insertBefore(thumbnailElement,thc.nextSibling );
    thumbnailElement.src = URL.createObjectURL(thumbnail.target.files[0]);
    thumbnailElement.onload = function() {
    URL.revokeObjectURL(thumbnailElement.src) 
    } 
}

function countWords(){
    function numbers(){
        if(getWords.length>60){
            return 2.5
        }
        else return 1
    };
    let nums=0;
    let getWords=document.querySelectorAll('.new-post-passage');
    for(var i=0;i<getWords.length;i++){
       nums+= getWords[i].innerHTML.split(/\S+/g).length;
    }
    let awpm=200;
    let awps=awpm/60;
    let ws=nums/awps;
    let wm=ws/60;
    document.getElementById('post-words').innerHTML= `${wm} Min`;
}

function nextElem(er){
    er.addEventListener("keydown",(e)=>{      
        if(e.keyCode===13){
            er.nextElementSibling.focus();
                    } 
               })
            }
function nextElem3(ka){
    /*get the distance of the current element from top of the window:*/
    let getHeight2=window.pageYOffset + ka.getBoundingClientRect().top;
    btnAdd.style.display="block";
    /*apply the height of the current element from top of the page as the 
        css top property:*/ 
    btnAdd.style.display="inline-block";
    btnAdd.style.top=`${getHeight2}px`;
    document.getElementById('txt').id="";
    ka.id='txt';   

    ka.addEventListener("keydown", (e1)=>
    {
        
        if(e1.shiftKey){
            if( e1.keyCode===13)
            document.execCommand('insertHTML', false, '<br/>');
            return false;
        }
     
        if(e1.keyCode===13){
            /*create a global p element:*/
            if(ka.nextElementSibling){
                ka.nextElementSibling.focus();
            }
          
            else{
                let pElement= document.createElement("p");
                pElement.setAttribute("class", "new-post-passage");
                pElement.setAttribute("contenteditable", "true");
                pElement.setAttribute("onfocus", "nextElem3(this)");
                document.querySelector(".new-post-container").appendChild(pElement).focus();  
            }          
        } 
        if(e1.keyCode===8 && ka.innerHTML==="" || ka.innerHTML==="<br>" && e1.keyCode===8 ){
            ka.previousElementSibling.id="txt";  
            ka.remove();       
            document.getElementById("txt").focus();     
        }
       if(e1.keyCode===46 && ka.innerHTML==="" || ka.innerHTML==="<br>" && e1.keyCode===46){
            ka.previousElementSibling.id="txt";  
            ka.remove();         
            document.getElementById("txt").focus();     

        }   
    })
}

function nextElem2(k1){
     /*get the distance of the current element from top of the window:*/
     let getHeight1=window.pageYOffset + k1.getBoundingClientRect().top;
     btnAdd.style.display="inline-block";
     /*apply the height of the current element from top of the page as the 
         css top property:*/ 
     btnAdd.style.display="block";
     btnAdd.style.top=`${getHeight1}px`;
     document.getElementById('txt').id="";
     k1.id='txt';
    k1.addEventListener("keydown", (e)=>
    {
       if(e.shiftKey){
            if( e.keyCode===13)
            document.execCommand('insertHTML', false, '<br/>');
            return false;
        }
       

        if(e.keyCode===13){
            //create a global p element:
            if(k1.nextElementSibling){
                k1.nextElementSibling.focus();

            }
            else{
                let pElement= document.createElement("p");
                pElement.setAttribute("contenteditable", "true");
                pElement.setAttribute("class", "new-post-passage");
                pElement.setAttribute("onfocus", "nextElem3(this)");
                document.querySelector(".new-post-container").appendChild(pElement).focus();  

            }          
        } 
        
    })
}

function toggleAddMedia(){
    if(document.querySelector(".add-media-section").style.display=="none"){
        document.querySelector(".add-media-section").style.display="flex"
    }
    else{
        document.querySelector(".add-media-section").style.display="none";
    }
}


function loadImage(img){
    document.querySelector(".add-media-section").style.display="none";
    var txt = document.getElementById('txt');
    /*create a img tag in order to put uploaded img into it */
    var imageElement = document.createElement('img');
    imageElement.style.maxWidth="100%";
    imageElement.style.height="auto";   
    imageElement.style.marginBottom="21px";
    imageElement.style.cursor="pointer";
    imageElement.setAttribute("contenteditable","true");
    imageElement.setAttribute("tabindex","1");
    imageElement.setAttribute("onclick","deleteMedia(this)");
    /*add a img tag after the current p element */
    txt.parentNode.insertBefore(imageElement,txt.nextSibling );
    let pElement= document.createElement("p");
    pElement.setAttribute("contenteditable", "true");
    pElement.setAttribute("class", "new-post-passage");
    pElement.setAttribute("onfocus", "nextElem3(this)");
    imageElement.parentNode.insertBefore(pElement,imageElement.nextSibling );
    imageElement.src = URL.createObjectURL(img.target.files[0]);
    imageElement.onload = function() {
    URL.revokeObjectURL(imageElement.src) 
    }
}

function loadVideo(video){
    document.querySelector(".add-media-section").style.display="none";
    var txt = document.getElementById('txt');
    /*create a video tag in order to put uploaded video into it */
    var videoElement = document.createElement('video');
    videoElement.style.maxWidth="100%";
    videoElement.style.height="auto";
    videoElement.style.marginBottom="21px";
    videoElement.style.cursor="pointer";
    videoElement.setAttribute("contenteditable","true");
    videoElement.setAttribute("onclick","deleteMedia(this)");
    videoElement.setAttribute("controls","on");
    videoElement.setAttribute("tabindex","1");
        /*add a video tag after the current p element */
    txt.parentNode.insertBefore(videoElement,txt.nextSibling );
    let pElement= document.createElement("p");
    pElement.setAttribute("contenteditable", "true");
    pElement.setAttribute("class", "new-post-passage");
    pElement.setAttribute("onfocus", "nextElem3(this)");
    videoElement.parentNode.insertBefore(pElement,videoElement.nextSibling );
    videoElement.src = URL.createObjectURL(video.target.files[0]);
    videoElement.onload = function() {
    URL.revokeObjectURL(videoElement.src) 
    } 
}
function deleteMedia(media){ 
    media.addEventListener("keydown", (e4)=>{
        console.log('kecode==8');
        if(e4.keyCode===8 || e4.keyCode===46){
                        /*media.previousElementSibling.focus();
                        document.getElementById("txt").focus();   */
         media.remove();          
        }
  })

}

document.querySelector('.save-btn').addEventListener("click", ()=>
{
    let getSaveSpan=document.getElementById("save-post-txt");
  getSaveSpan.style.color="green";
  getSaveSpan.style.transition="transform .5s ease-in-out";
  getSaveSpan.style.transform="scale(1.3)"
  setTimeout(function(){
    getSaveSpan.style.transform="scale(1)";
  },500)
  
  getSaveSpan.innerHTML=" saved";
}
)

function makeBold(){
   /* let selected = txt.innerHTML.slice(txt.selectionStart, txt.selectionEnd);
    txt.setRangeText(`<strong>${selected}</strong>`);*/
    /*var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }*/
    document.execCommand('bold');
    document.querySelector(".add-media-section").style.display="none";
}

function makeItalic(){
     document.execCommand('italic');
     document.querySelector(".add-media-section").style.display="none";
 }

 function makeTitle(){
    let txt = document.getElementById('txt');
    let hElement= document.createElement("h3");
    hElement.setAttribute("contenteditable", "true");
    hElement.setAttribute("class", "new-post-h3");
    hElement.setAttribute("onfocus", "nextElem3(this)");
    /*hElement.querySelector(".new-post-container").appendChild(hElement).focus();  */
    txt.parentNode.insertBefore(hElement,txt.nextSibling );
    hElement.focus;
    document.querySelector(".add-media-section").style.display="none";
}

let getcontent=document.querySelector(".new-post-container").innerHTML;
