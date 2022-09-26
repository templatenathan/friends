const filterFriends = require("../src/filterFriends");

describe("when the list is empty", () => {
  it("the return value should be empty", () => {
    expect(filterFriends([])).toStrictEqual([]);
  });
});

describe("when one friend is passed", () => {
  it("the return value should have that one friend", () => {
    expect(filterFriends(["Ivan"])).toStrictEqual(["Ivan"]);
  });
});
