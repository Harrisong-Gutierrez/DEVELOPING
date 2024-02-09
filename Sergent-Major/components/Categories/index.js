import PropTypes from "prop-types";
import Category from "./components/Category";
import { categories } from "@/constants/dataList";
import { v4 } from "uuid";

export const Categories = ({ title }) => {
  const renderCategory = () => {
    return categories.map((category) => {
      return (
        <div>
          <Category
            key={v4()}
            text={category.text}
            alt={category.alt}
            width={category.width}
            height={category.height}
            src={category.src}
          />
        </div>
      );
    });
  };

  return (
    <section className="Categories">
      <h2 className="Categories-title">{title}</h2>
      <div className="Categories-content">{renderCategory()}</div>
    </section>
  );
};

Categories.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Categories;
