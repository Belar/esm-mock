import { expect } from "chai";

import { mainMethod } from "../src/main.js";
import { someMethod } from "../src/nested/someModule.js";

describe("main", () => {
  it("calls fake someMethod", () => {
    const result = mainMethod();

    expect(result).to.equal("Fake");
    expect(someMethod.called).to.equal(true);
  });
});
