---
description: "In order to be able to create polls on your discord server, you need to set up
  a voting channel to which the polls will be sent."
---

# Custom vote channel
In order to be able to create polls on your discord server, you need to set up a voting channel to which the polls will be sent.

To set a custom voting command, use the command:

```
/settings poll-channel {channel}
```

For a channel to be successfully set up, you must meet the following conditions:

* The user must have ADMINISTRATOR privileges.
* It must be a text channel.
* The bot must have permission to send messages in this channel.

If a bot does not meet a condition, the vote will not be created!