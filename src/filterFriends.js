const filterFriends = (friends) => {
  return friends.filter((friend) => friend.length === 4);
};

module.exports = filterFriends;
