import React from "react";
import App from "./App";
import { shallow, mount, render } from "enzyme";

import Comments from "./Comments";

describe("<Comments />", () => {
  it("render without crashing", () => {
    const comments = {
      1: {
        comment: "test1"
      },
      2: {
        comment: "test2"
      }
    };
    const wrapper = shallow(<Comments comments={comments} />);
    expect(wrapper.length).toBe(1);
    console.log(wrapper.find("Comment").length);
    expect(wrapper.find("Comment").length).toBe(2);
  });
});
