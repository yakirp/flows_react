import React from "react";
import { render } from "@testing-library/react";

import Base from "./Base";

describe("Base", () => {
    test("renders the Base component", () => {
        render(<Base apiKey="asdsdsa" projectId="j324krj3k53" userId="3454354" userGroupId="5regrg54t5"/>);
    });
});