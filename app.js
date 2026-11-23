// app.js : 영화 보드 렌더링, 검색, 정렬, 찜(이벤트 위임) / 김성수(2651010) / 12주차

const posterUrl = (path, size = "w342") => {
    if (!path) return "";
    if (path.startsWith("http")) return path;
    return `https://image.tmdb.org/t/p/${size}${path}`;
};

const yearsSince = dateStr => {
    const currentYear = new Date().getFullYear();
    const releaseYear = new Date(dateStr).getFullYear();
    return currentYear - releaseYear;
};

// 선택 상자(#sort) 값에 따라 정렬된 새 배열 반환(원본 movies 유지)
function sortBy(list, key, descending = false) {
    const copy = [...list];
    copy.sort((a, b) => {
        let comparison = 0;
        if (key === "rating") {
            comparison = a.rating - b.rating;
        } else if (key === "year") {
            comparison = a.year - b.year;
        } else {
            comparison = String(a.title).localeCompare(String(b.title), "ko");
        }
        return descending ? -comparison : comparison;
    });
    return copy;
}

// 5단계: 현재 화면에 표시된 찜(.liked) 개수를 #likeCount에 반영
function updateLikeCount() {
    const likeCountEl = document.getElementById("likeCount");
    if (!likeCountEl) return;
    likeCountEl.textContent = document.querySelectorAll(".liked").length;
}

// 영화 카드 목록을 #board에 그리기
function renderCards(list) {
    const board = document.getElementById("board");
    const countEl = document.getElementById("count");
    if (!board) return;

    if (countEl) {
        countEl.textContent = `${list.length}편`;
    }

    board.innerHTML = list.map(m => `
        <article class="card">
            <img class="poster" src="${posterUrl(m.poster, "w342")}" alt="${m.title}">
            <span class="badge">${m.rating}</span>
            <div class="info">
                <h3>${m.title}</h3>
                <p class="year">${m.date || m.year}</p>
                <button class="like" type="button">♥</button>
            </div>
        </article>
    `).join("");

    // 5단계: 다시 그릴 때도 찜 개수 동기화
    updateLikeCount();

    // 6단계: 결과가 0건이면 .board에 is-empty 클래스 추가
    if (list.length === 0) {
        board.classList.add("is-empty");
    } else {
        board.classList.remove("is-empty");
    }
}

// (나) 단계 3: 검색어로 거른 뒤 선택 상자(#sort) 기준으로 정렬한 새 배열 반환
function getView() {
    const keyword = document.getElementById("q").value.trim().toLowerCase();
    const found = movies.filter(m => m.title.toLowerCase().includes(keyword));
    const key = document.getElementById("sort").value;
    return sortBy(found, key, key !== "title");
}

// 단계 2 & 3: 정렬 변경 시 검색 결과도 유지하며 다시 그리기
function applySort() {
    renderCards(getView());
}

// 최초 렌더링
renderCards(getView());

// (가) 단계 1 & 3: 검색창 입력 시마다 검색 + 정렬 결과로 다시 그리기
document.getElementById("q").addEventListener("input", () => {
    renderCards(getView());
});

// 단계 2: 정렬 선택 상자 change 이벤트 연결(괄호 없이 함수 전달)
document.getElementById("sort").addEventListener("change", applySort);

// 단계 7: 일반 함수(function)의 this는 리스너가 등록된 요소(.board)를 가리키지만, 화살표 함수(=>)의 this는 상위 스코프를 따르므로
// 클릭된 요소는 두 방식 모두 e.target으로 확인합니다.
document.querySelector(".board").addEventListener("click", (e) => {
    if (e.target.classList.contains("like")) {
        e.target.classList.toggle("liked");
        updateLikeCount();
    }
});

// 단계 8: 검색창에서 Escape 키를 누르면 검색어를 비우고 전체/정렬 목록 다시 그리기
document.getElementById("q").addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        e.target.value = "";
        renderCards(getView());
    }
});