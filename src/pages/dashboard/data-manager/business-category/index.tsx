import { useParams } from "react-router-dom";
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
  const { page } = useParams();
  const Component = pages[page as keyof PagesType];

  return (
    <section>
      <div className="mb-4">
        <h1>Business Category</h1>
        <p>{capitalizeFirstLetter(page as string)} Business Categories</p>
      </div>
      <Component />
    </section>
  );
}
