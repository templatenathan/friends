const filterFriends = require("../src/filterFriends");

describe("when the list is empty", () => {
  it("the return value should be empty ", () => {
    expect(filterFriends([])).toStrictEqual([]);
  });
});
