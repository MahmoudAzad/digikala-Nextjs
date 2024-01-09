import { NextPage } from "next";
import SearchFilterBox from "@/components/box/searchFilterBox";

interface IParams {
  slug: string;
}

const SearchPage: NextPage<{ params: IParams }> = async ({ params }) => {
  return (
    <>
      <div>
        <SearchFilterBox slug={params.slug} />
      </div>
    </>
  );
};

export default SearchPage;
