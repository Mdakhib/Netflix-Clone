export default function selectionFilter({ series, films }) {
  return {
    series: [
      {
        title: "Docummentaries",
        data: series.filter((item) => item.genre === "documnetaries"),
      },
      {
        title: "Comedies",
        data: series.filter((item) => item.genre === "comedies"),
      },
      {
        title: "Children",
        data: series.filter((item) => item.genre === "children"),
      },
      {
        title: "Crime",
        data: series.filter((item) => item.genre === "crime"),
      },
      {
        title: "Feel Good",
        data: series.filter((item) => item.genre === "feel-good"),
      },
    ],
    films: [
      {
        title: "Drama",
        data: films.filter((item) => item.genre === "drama"),
      },
      {
        title: "Thriller",
        data: films.filter((item) => item.genre === "thriller"),
      },
      {
        title: "Children",
        data: films.filter((item) => item.genre === "children"),
      },
      {
        title: "Suspense",
        data: films.filter((item) => item.genre === "suspence"),
      },
      {
        title: "Romanace",
        data: films.filter((item) => item.genre === "romance"),
      },
    ],
  };
}