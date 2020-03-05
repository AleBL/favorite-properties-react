import React from "react";
import { shallow } from "enzyme";
import Property from "../../components/Property"

const setup = () => {

  const property = {
    name: "Test",
    min_price: 120.00,
    address: {
      city: "CityTest",
      state: "StateTest"
    },
    default_image: {
      "200x140": "",
      "520x280": "" 
    }
  }

  const enzymeWrapper = shallow(
    <Property
      property={ property } />
  );

  return {
    enzymeWrapper
  };
};

describe("Property Element", () => {
  describe("render", () => {
    const { enzymeWrapper } = setup();

    it("Should render the 'div' of Property", () => {
      const div = enzymeWrapper.find("div");
      
      expect(div).toHaveLength(3);
    });

    it("Should render the 'b' of Property", () => {
      const b = enzymeWrapper.find("b");
      
      expect(b).toHaveLength(3);
    });

    it("Should render the 'button' of Property", () => {
      const button = enzymeWrapper.find("button");
      
      expect(button).toHaveLength(1);
    });

    it("Should render the 'PropertyModal' of Property", () => {
      const propertyModal = enzymeWrapper.find("PropertyModal");
      
      expect(propertyModal).toHaveLength(1);
    });
  });
});