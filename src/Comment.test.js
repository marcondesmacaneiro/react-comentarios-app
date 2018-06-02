import React from "react";
import App from "./App";
import { shallow, mount, render } from "enzyme";

import Comment from "./Comment";

describe("<Comment />", () => {
  const comment = {
    comment: "test"
  };
  it("render without crashing", () => {
    const wrapper = shallow(<Comment comment={comment} />);
    expect(wrapper.length).toBe(1);
    expect(wrapper.is(".card")).toBe(true);
    console.log(wrapper.text());
    expect(wrapper.text()).toBe(comment.comment);
  });
});
