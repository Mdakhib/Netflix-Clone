import React from "react";
import { useContent } from "../hooks";
import selectionFilter from "../utiles/selection-filter";
import { BrowseContainer } from "../containers/browse";

export default function Browse() {
  //we need the series and the films
  const { series } = useContent("series");
  const { films } = useContent("films");

  //we need the slides
  const slides = selectionFilter({ series, films });
  //pass it to the browse container

  return <BrowseContainer slides={slides} />;
}
