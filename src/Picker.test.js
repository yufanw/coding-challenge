import React from "react";
import enzyme, { shallow } from "enzyme";
import Picker from "./Picker";
import EnzymeAdapter from "enzyme-adapter-react-16";

enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultAvatars = [
  { src: "assets/avatar1.png", label: "Avatar 1", id: 1 },
  { src: "assets/avatar2.png", label: "Avatar 2", id: 2 },
  { src: "assets/avatar3.png", label: "Avatar 3", id: 3 },
  { src: "assets/avatar4.png", label: "Avatar 4", id: 4 },
  { src: "assets/avatar5.png", label: "Avatar 5", id: 5 },
  { src: "assets/avatar6.png", label: "Avatar 6", id: 6 }
];

it("should render with default state", () => {
  const wrapper = shallow(<Picker />);
  expect(wrapper.state("selected")).toEqual(defaultAvatars[0]);
  expect(wrapper.state("open")).toBe(false);
});

it("should set open state to true when avatar is clicked", () => {
  const wrapper = shallow(<Picker />);
  expect(wrapper.state("open")).toEqual(false);
  wrapper.find(".selected").simulate("click");
  expect(wrapper.state("open")).toEqual(true);
});
