// data.js : 내 영화 5편 + 박스오피스 TOP 5 / 김성수(2651010)

// ===== Part A : 10칸짜리 배열 4개 =====
const titles = [
  "스파이더맨: 브랜드 뉴 데이",
  "스파이더맨: 홈커밍",
  "어메이징 스파이더맨",
  "스파이더맨: 뉴 유니버스",
  "스파이더맨: 노 웨이 홈",
  "군체",
  "마이클",
  "백룸",
  "와일드 씽",
  "싱 스트리트"
];

const ratings = [
  8.4,
  7.3,
  6.7,
  8.4,
  7.9,
  8.2,
  8.5,
  7.0,
  6.2,
  7.9
];

const years = [
  2026,
  2017,
  2012,
  2018,
  2021,
  2026,
  2026,
  2026,
  2026,
  2016
];

const audiences = [
  0,
  0,
  0,
  0,
  0,
  5212855,
  1589035,
  5212855,
  869723,
  589440
];

// ===== Part B : 영화 객체 10건 배열 (Part A와 같은 순서, 같은 값) =====
const movies = [
  {
    title: "스파이더맨: 브랜드 뉴 데이",
    year: 2026,
    date: "2026-07-29",
    rating: 8.4,
    audience: 0,
    poster: "/mt6uZzy7DAsncHlGGzMsyNgLR6v.jpg",
    type: "mine",
    rank: null
  },
  {
    title: "스파이더맨: 홈커밍",
    year: 2017,
    date: "2017-07-05",
    rating: 7.3,
    audience: 0,
    poster: "/hjki9weYYVABvkpZbX5jBOmKXXv.jpg",
    type: "mine",
    rank: null
  },
  {
    title: "어메이징 스파이더맨",
    year: 2012,
    date: "2012-06-28",
    rating: 6.7,
    audience: 0,
    poster: "/a1Kup5VnmxjAHnsT3Sz7RtrC9UU.jpg",
    type: "mine",
    rank: null
  },
  {
    title: "스파이더맨: 뉴 유니버스",
    year: 2018,
    date: "2018-12-06",
    rating: 8.4,
    audience: 0,
    poster: "/d9V6Q9vpVpmaca7vwSUbCajtDb3.jpg",
    type: "mine",
    rank: null
  },
  {
    title: "스파이더맨: 노 웨이 홈",
    year: 2021,
    date: "2021-12-15",
    rating: 7.9,
    audience: 0,
    poster: "/fvqoI9r1GU2EFkc0xjZ6dKCuDVR.jpg",
    type: "mine",
    rank: null
  },
  {
    title: "군체",
    year: 2026,
    date: "2026-05-21",
    rating: 8.2,
    audience: 5212855,
    poster: "/hDPGsJxo8xX0OyqcMB8xI3RdaF3.jpg",
    type: "boxoffice",
    rank: 1
  },
  {
    title: "마이클",
    year: 2026,
    date: "2026-04-22",
    rating: 8.5,
    audience: 1589035,
    poster: "/piMZqtd0gGS7OgkhDwiQ7vVViBQ.jpg",
    type: "boxoffice",
    rank: 2
  },
  {
    title: "백룸",
    year: 2026,
    date: "2026-05-27",
    rating: 7.0,
    audience: 5212855,
    poster: "/tcqLtpb8EUDqbct2YFl8ZGNfP2p.jpg",
    type: "boxoffice",
    rank: 3
  },
  {
    title: "와일드 씽",
    year: 2026,
    date: "2026-06-03",
    rating: 6.2,
    audience: 869723,
    poster: "/s4IUDzLZJb4CosgEXcmouY32Jfg.jpg",
    type: "boxoffice",
    rank: 4
  },
  {
    title: "싱 스트리트",
    year: 2016,
    date: "2016-03-11",
    rating: 7.9,
    audience: 589440,
    poster: "/kUYfLv9V5mKPb2lJadzgOI67AFt.jpg",
    type: "boxoffice",
    rank: 5
  }
];