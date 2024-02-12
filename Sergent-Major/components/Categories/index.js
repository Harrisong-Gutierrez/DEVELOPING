import React from 'react';
import PropTypes from "prop-types";
import Category from "./components/Category";
import { categories } from "@/constants/dataList";
import { v4 as uuidv4 } from "uuid";

export const Categories = ({ title }) => {
  return (
    <section className="Categories">
      <h2 className="Categories-title">{title}</h2>
      <div className="Categories-content">
        {categories.map(category => (
          <div key={uuidv4()}>
            <Category
              text={category.text}
              alt={category.alt}
              width={category.width}
              height={category.height}
              src={category.src}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

Categories.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Categories;