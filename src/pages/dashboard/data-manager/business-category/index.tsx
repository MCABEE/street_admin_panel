import { useSearchParams } from "react-router-dom";
import ViewBusinessCategory from "./View";
import AddBusinessCategory from "./Add";

type PagesType = {
  [key: string]: () => JSX.Element;
};

const pages: PagesType = {
  view: ViewBusinessCategory,
  add: AddBusinessCategory,
};

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function BusinessCategory() {
  const [searchParam] = useSearchParams();
  const page = searchParam.get("page") || "view";
  const Component = pages[page];

  return (
    <section>
      <div className="mb-4">
        <h1>Business Category</h1>
        <p>{capitalizeFirstLetter(page)} Business Categories</p>
      </div>
      <Component />
    </section>
  );
}
