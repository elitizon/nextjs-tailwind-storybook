import React from "react"
import { render, screen } from "@testing-library/react"
import renderer from "react-test-renderer"
import { Hero } from "."

test("renders correctly", () => {
  const tree = renderer.create(<Hero title="Some Text" />).toJSON()
  expect(tree).toMatchSnapshot()
})
