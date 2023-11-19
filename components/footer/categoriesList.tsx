import { IFooterCategories } from "@/types/footer";

interface Props {
  categories: IFooterCategories[];
}

const CategoriesList: React.FC<Props> = ({ categories }) => {
  return (
    <>
      {categories?.map((category, index) => (
        <div key={index}>
          <h2 className="font-bold mb-2 text-sm lg:text-lg">{category.name}</h2>
          {category.subCategory.map((sub, index) => (
            <p
              className="text-gray-600 text-xs lg:text-sm py-2 cursor-pointer"
              key={index}
            >
              {sub.name}
            </p>
          ))}
        </div>
      ))}
    </>
  );
};

export default CategoriesList;
