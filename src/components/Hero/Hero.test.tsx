import React from "react"
import renderer from "react-test-renderer"
import { Hero } from "."

test("renders correctly", () => {
  const tree = renderer.create(<Hero title="Some Text" />).toJSON()
  expect(tree).toMatchSnapshot()
})
