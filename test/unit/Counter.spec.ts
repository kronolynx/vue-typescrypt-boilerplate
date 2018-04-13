import { shallow } from "@vue/test-utils"
import Counter from "../../src/renderer/components/sections/Counter.vue"

describe("Counter.vue", () => {
  it("increments count when button is clicked", () => {
    const wrapper = shallow(Counter)
    wrapper.find("button").trigger("click")
    expect(wrapper.find("div").text()).toMatch("1")
  })
})