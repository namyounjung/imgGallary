/*
  사용자가 이미지 썸네일을 클릭하는 이벤트가 발생하면
  이미지의 주소를 찾아서 메인 사진을 교체하고 fade-in 클래스를 추가합니다.
  */

  const imgEls = document.querySelectorAll(".imgs img"); // [{}, {}]
imgEls.forEach(function(el){
  el.addEventListener("click", clickThumbnail);
});

function clickThumbnail(){
  const mainImgEl = document.querySelector(".main-img img");
  mainImgEl.setAttribute("src", this.src);

}