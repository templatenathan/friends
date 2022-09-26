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

describe("when both friends and non-friend are passed", () => {
  it("the return value should have only friends", () => {
    expect(
      filterFriends(["Ivan", "Kate", "Betty", "Boat", "Peter"])
    ).toStrictEqual(["Ivan", "Kate", "Boat"]);
  });
});
