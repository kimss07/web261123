// renderCards 내부 카드 템플릿 예시(<p class="year"> 다음 줄에 버튼 추가)
// <p class="year">${m.year}</p>
// <button class="like" type="button">♥</button>

// renderCards 맨 끝부분에 추가
updateLikeCount();

const boardEl = document.querySelector(".board");
if (list.length === 0) {
  boardEl.classList.add("is-empty");
} else {
  boardEl.classList.remove("is-empty");
}
// (나) 검색과 정렬을 한 번에 처리하는 함수(단계 3)
function getView() {
  const keyword = document.getElementById("q").value.trim().toLowerCase();
  const found = movies.filter((m) => m.title.toLowerCase().includes(keyword));
  const key = document.getElementById("sort").value;
  return sortBy(found, key, key !== "title");
}

// (가) 검색창 입력 이벤트: 글자를 칠 때마다 검색 + 정렬 결과로 다시 그리기(단계 1, 3)
document.getElementById("q").addEventListener("input", () => {
  renderCards(getView());
});

// 정렬 선택 상자 변경 이벤트: 괄호 없이 applySort 함수 참조 전달(단계 2, 3)
document.getElementById("sort").addEventListener("change", applySort);

// 찜 개수 갱신 함수(단계 5)
function updateLikeCount() {
  document.getElementById("likeCount").textContent =
    document.querySelectorAll(".liked").length;
}

// 단계 7 요구사항: 일반 함수(function)와 화살표 함수(=>)의 this 차이 주석
// 1) 일반 함수(function (e)) 리스너에서 this는 이벤트가 등록된 요소(.board)를 가리킵니다.
// 2) 화살표 함수((e) =>)에서는 상위 스코프의 this를 물려받으므로 .board가 아닐 수 있으며, 실제 클릭된 버튼은 e.target으로 확인합니다.
document.querySelector(".board").addEventListener("click", (e) => {
  if (e.target.classList.contains("like")) {
    e.target.classList.toggle("liked");
    updateLikeCount();
  }
});

// 단계 8: 검색창에서 Escape 키를 누르면 검색어 초기화 후 전체/정렬 목록 다시 그리기
document.getElementById("q").addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    e.target.value = "";
    renderCards(getView());
  }
});