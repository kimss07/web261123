// app.js : 검색, 정렬, 찜(이벤트 위임), 빈 결과, Escape 처리 / 김성수(2651010)

// posterUrl : 포스터 경로, 이미지 크기 ⇒ TMDB 이미지 주소 문자열
function posterUrl(path, size) {
  if (!path) {
    return "https://via.placeholder.com/342x513?text=No+Poster";
  }
  return `https://image.tmdb.org/t/p/${size}${path}`;
}

// sortBy : 영화 배열, 정렬 키, 내림차순 여부 ⇒ 정렬된 새 배열(원본 불변)
function sortBy(list, key, desc) {
  const sign = desc ? -1 : 1;
  return [...list].sort((a, b) => {
    if (typeof a[key] === "string") {
      return a[key].localeCompare(b[key]) * sign;
    }
    return (a[key] - b[key]) * sign;
  });
}

// updateLikeCount : 현재 화면의 찜(.like.liked) 개수를 #likeCount에 반영
function updateLikeCount() {
  const count = document.querySelectorAll(".like.liked").length;
  document.getElementById("likeCount").textContent = count;
}

// renderCards : 영화 배열 ⇒ 보드 카드 렌더링 및 개수·찜·빈 결과 상태 갱신
function renderCards(list) {
  const board = document.getElementById("board");
  const countEl = document.getElementById("count");

  board.innerHTML = list
    .map(
      (m) => `
      <article class="card">
        <img src="${posterUrl(m.poster, "w342")}" alt="${m.title} 포스터">
        <p class="title">${m.title}</p>
        <p class="year">${m.year}</p>
        <button class="like" type="button">♥</button>
      </article>
    `
    )
    .join("");

  countEl.textContent = `${list.length}편`;
  updateLikeCount();

  if (list.length === 0) {
    board.classList.add("is-empty");
  } else {
    board.classList.remove("is-empty");
  }
}

// getView : 없음 ⇒ 검색어로 거른 뒤 선택 상자 기준으로 정렬한 새 배열
function getView() {
  const keyword = document.getElementById("q").value.trim().toLowerCase();
  const found = movies.filter((m) => m.title.toLowerCase().includes(keyword));
  const key = document.getElementById("sort").value;
  return sortBy(found, key, key !== "title");
}

// applySort : 선택 상자 기준으로 검색+정렬 뷰 다시 그리기
function applySort() {
  renderCards(getView());
}

// 초기 화면 렌더링
renderCards(getView());

// 검색창 입력 이벤트 (단계 1 & 단계 3)
document.getElementById("q").addEventListener("input", () => {
  renderCards(getView());
});

// 정렬 선택 상자 변경 이벤트 (단계 2 & 단계 3)
document.getElementById("sort").addEventListener("change", applySort);

// 일반 함수 리스너에서는 this가 이벤트가 바인딩된 요소(.board)를 가리키지만,
// 화살표 함수 리스너에서는 상위 스코프의 this를 유지하므로 실제 누른 요소는 e.target으로 확인합니다.
document.querySelector(".board").addEventListener("click", (e) => {
  if (e.target.classList.contains("like")) {
    e.target.classList.toggle("liked");
    updateLikeCount();
  }
});

// Escape 키로 검색창 초기화 후 전체 목록 다시 그리기 (단계 8)
document.getElementById("q").addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    e.target.value = "";
    renderCards(getView());
  }
});