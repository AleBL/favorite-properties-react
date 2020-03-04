import React from "react";
import { shallow } from "enzyme";
import Page from "../../components/Page"

const currentPage = 1;
const pageNumber = 2;
const totalPages = 20;

const setup = () => {
  const enzymeWrapper = shallow(
    <Page
      pageNumber={ pageNumber }
      currentPage={ currentPage }
      totalPages={ totalPages }
    />
  );

  return {
    enzymeWrapper
  };
};

describe("Page Element", () => {
  describe("render", () => {
    const { enzymeWrapper } = setup();

    it("Should render the 'button' of Page", () => {
      const button = enzymeWrapper.find("button");
      expect(button).toHaveLength(1);
    });
  });
});