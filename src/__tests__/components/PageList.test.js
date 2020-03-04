import React from "react";
import { shallow } from "enzyme";
import PageList from "../../components/PageList"

const currentPage = 1;
const totalPages = 20;

const setup = () => {
  const enzymeWrapper = shallow(
    <PageList
      currentPage={ currentPage }
      totalPages={ totalPages } />
  );

  return {
    enzymeWrapper
  };
};

describe("Page Element", () => {
  describe("render", () => {
    const { enzymeWrapper } = setup();

    it("Should render the 'div' of PageList", () => {
      const div = enzymeWrapper.find("div");
      
      expect(div).toHaveLength(1);
    });
  });
});