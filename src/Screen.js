import React from "react";
import { useSetLang, useTranslation } from "./context";

// eslint-disable-next-line
export default () => {
  const setLang = useSetLang();
  const hyperTranslate = useTranslation();
  return (
    <>
      <h1>{hyperTranslate("Hello!")}</h1>
      <button onClick={() => setLang("es")}>
        {hyperTranslate("Translate")}
      </button>
    </>
  );
};
