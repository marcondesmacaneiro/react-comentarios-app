import React from "react";
import App from "./App";

import { shallow, mount, render } from "enzyme";

describe("<App/>", () => {
  const base = { syncState: jest.fn() };
  it("renders without crashing", () => {
    const wrapper = shallow(<App base={base} />);
    expect(wrapper.length).toBe(1);
  });
  it("should have .container class", () => {
    const wrapper = shallow(<App base={base} />);
    expect(wrapper.is(".container")).toBe(true);
  });

  it("shows Comments", () => {
    const wrapper = shallow(<App base={base} />);
    expect(wrapper.find("Comments").length).toBe(1);
  });

  it("shows NewComment", () => {
    const wrapper = shallow(<App base={base} />);
    expect(wrapper.find("NewComment").length).toBe(1);
  });

  it("adds a new comment to state when postNewComment is called", () => {
    const wrapper = mount(<App base={base} />);
    wrapper.instance().postNewComment({ comment: "test" });
    wrapper.instance().postNewComment({ comment: "test" });
    wrapper.instance().postNewComment({ comment: "test" });
    //console.log(wrapper.instance().state);
    const comments = Object.keys(3);
  });

  /**
  it("outputs the <App />", () => {
    const wrapperShallow = shallow(<App />);
    const wrapperMount = mount(<App />);
    const wrapperRender = render(<App />);

    console.log(wrapperRender.html());
  });
   */
});
