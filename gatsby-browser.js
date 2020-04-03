import React from "react"
import { FilterProvider } from "./src/context/filter-context"

export const wrapRootElement = ({ element }) => (
  <FilterProvider>{element}</FilterProvider>
)