import React from "react";
import { shallow } from "enzyme";
import PropertyModal from "../../components/PropertyModal"

const setup = () => {

  const property = {
    name: "Test",
    min_price: 120.00,
    address: {
      city: "CityTest",
      state: "StateTest",
      latitude: 45.00,
      logitude: 50.00
    },
    default_image: {
      "200x140": "",
      "520x280": "" 
    }
  }

  const enzymeWrapper = shallow(
    <PropertyModal
      property={ property } />
  );

  enzymeWrapper.setState({ showModal: true });

  return {
    enzymeWrapper
  };
};

describe("PropertyModal Element", () => {
  describe("render", () => {
    const { enzymeWrapper } = setup();

    it("Should render the 'Map' of PropertyModal", () => {
      const Map = enzymeWrapper.find("Map");
      
      expect(Map).toHaveLength(1);
    });

    it("Should render the 'b' of PropertyModal", () => {
      const b = enzymeWrapper.find("b");
      
      expect(b).toHaveLength(8);
    });

    it("Should render the 'textarea' of PropertyModal", () => {
      const textarea = enzymeWrapper.find("textarea");
      
      expect(textarea).toHaveLength(1);
    });

    it("Should render the 'button' of PropertyModal", () => {
      const button = enzymeWrapper.find("button");
      
      expect(button).toHaveLength(1);
    });
  });
});