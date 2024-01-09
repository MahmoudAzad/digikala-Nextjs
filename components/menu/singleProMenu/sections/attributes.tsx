interface IAttributes {
  id: number;
  filter: string;
  isSpecifications: boolean;
  value: string;
}

interface Props {
  attributes: IAttributes[];
}
const Attributes: React.FC<Props> = ({ attributes }) => {
  return (
    <>
      <h2 className="pb-2 mb-5 w-20 md:border-b-4 border-red-600 ">مشخصات </h2>
      <div className="space-y-5 md:pr-56">
        {attributes?.map((property) => (
          <div key={property.id} className="flex items-center">
            <p className="text-xs md:text-sm text-gray-600 whitespace-nowrap basis-2/6 pb-5">
              {property.filter}
            </p>
            <p className="text-xs md:text-sm border-b pb-5 w-full basis-4/6">
              {property.value}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Attributes;
