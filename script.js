hljs.highlightAll();

function openCD(){
    document.querySelector('main').style.display = "none";
    document.querySelector('aside').style.display = "block";
    document.querySelector('.open-cd').style.opacity = 0.3;
    document.querySelector('.open-cd').style.pointerEvents = "none";
}

function hideCD(){
    document.querySelector('main').style.display = "block";
    document.querySelector('aside').style.display = "none";
    document.querySelector('.open-cd').style.opacity = 1;
    document.querySelector('.open-cd').style.pointerEvents = "unset";
}

document.addEventListener('mouseup', function (e) { 
    var con = document.querySelector('aside');
    var extbtn = document.querySelector('aside div');
    if(!con.contains(e.target) && !extbtn.contains(e.target)) hideCD();
});
function txAdjust(el){
    el.style.height="1px";
    el.style.height=(el.scrollHeight<200)?(el.scrollHeight)+"px":(200)+"px";
}

document.querySelector('form').onsubmit = function(e){
    e.preventDefault();
    var im = document.querySelector('.bdls-input'), ftext = '', content = '', container = document.querySelector('.container');
    if(!im.checkValidity()){
        im.reportValidity();
    }else {
        document.querySelector('.fbtn > div > svg').style.stroke = "#916060";
        im.setAttribute('disabled', true);

        ftext = String(im.value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
        ftext = ftext.replace(/```([^`]*?)```/g, '<pre><code>$1</code></pre>');
        ftext = ftext.replace(/`(.*?)`/g, '<code>$1</code>');
        content = `<div class="content"><p>${ftext}</p></div>`
        container.innerHTML += content;
        im.removeAttribute('disabled');
        document.querySelector('.fbtn > div > svg').style.stroke = "white";
        hljs.highlightAll();
        im.value = '';
        txAdjust(im);
    }
}