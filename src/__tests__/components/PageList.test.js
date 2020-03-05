import React from "react";
import { shallow } from "enzyme";
import PageList from "../../components/PageList"
import util from "../../util/util"

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

describe("PageList Element", () => {
  describe("render", () => {
    const { enzymeWrapper } = setup();

    it("Should render the 'div' of PageList", () => {
      const div = enzymeWrapper.find("div");
      
      expect(div).toHaveLength(1);
    });
    
    it("Should render the 'Page' of PageList", () => {
      const Page = enzymeWrapper.find("Page");
      const arrayPages = util.mountArrayPages(currentPage, totalPages);
      
      expect(Page).toHaveLength(arrayPages.length);
    })
  });
});