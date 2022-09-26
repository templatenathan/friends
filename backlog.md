As a user, I need any names that are not four letters to be removed, so that I can see my friends

✅
Given a list of no friends
When the list is filtered
Then the list remains empty

✅
Given a list of of one friend
When the list is filtered
Then the list has that one friend

Given a list of some friends and non-friends
When the list is filtered
Then the list has only friends
