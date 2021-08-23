//----다시 쓰기 버튼---//
function recheck(){
    let reply = confirm("정말 지우고 다시 쓰겠습니까?")
    if (reply == true){
        document.querySelector('form').reset()
        const previewImage = document.getElementById("preview-image");
        previewImage.src="./docs/Image/grey.png";
    }
    else{
        return;
    }
}
//--저장하기 버튼--//
function announce(){
    alert("죄송합니다. 아직 지원되지 않는 기능입니다.");
}

//--파일 첨부 시 이미지 미리보기--//
//http://yoonbumtae.com/?p=3304
function readImage(input) {
    if (input.files && input.files[0])
    {
        const reader = new FileReader();

        reader.onload = e => {
            const previewImage = document.getElementById("preview-image");
            previewImage.src = e.target.result;
        }
        reader.readAsDataURL(input.files[0]);
    }
}

const inputImage = document.getElementById("book-image")
inputImage.addEventListener("change", e => {
    readImage(e.target)
})


// //---생활 코딩 이고잉 내용---//
// var Links ={
//     setColor : function(color){
//         $('a').css('color', color);

//         // var alist = document.querySelectorAll('a');
//         // var i = 0;
//         // while(i<alist.length){
//         //     alist[i].style.color = color;
//         //     i=i+1;
//         // }
//         }
// }
// var Body = {
//     setColor : function(color){
//         //document.querySelector('body').style.color = color;
//         $('body').css('color', color);
//     },
//     setBackgroundColor: function(color) {
//         //document.querySelector('body').style.backgroundColor = color
//         $('body').css('backgroundColor', color);
//     }
// }
    
// function nightDayHandler(self){
//     var target = document.querySelector('body');
//     if(self.value == 'night'){
//         Body.setBackgroundColor('black');
//         Body.setColor('white');
//         self.value = 'day'
//         Links.setColor('powderblue');
//     }else{
//         Body.setBackgroundColor('white');
//         Body.setColor('black');
//         self.value = 'night';
//         Links.setColor('black');
//     }
// }