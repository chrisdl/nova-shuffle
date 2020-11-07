# Shuffle

Extension for nova.app that allows you to shuffle highlighted text.

![usage](https://raw.githubusercontent.com/chrisdl/nova-sort/master/usage.png)

# About

The shuffle being used is a Fisher-Yates (insert link).

# Usage

Currently you can shuffle in 3 different ways:

  - Shuffle multiple selected lines in the editor.
  - Shuffle Content: Each character is shuffled with every other character highlighted.
  - Shuffle Content Shuffle an array by selecting it's start and end (signified by brackets) following the `[x, y, z]` syntax. The space after the `,` is optional.
  
# How big can we go?

 - [ ] TODO TEST

Nova shuffle can shuffle about 10 000 characters before it really starts to struggle. Said another way, if you have a text file that is about 3MB you will start feeling a slowdown for the Content command. While the Lines command will start to slow down if shuffling more than 3000 lines.

## Shuffling lines
  - 3000 --> 2s
  - 6000 --> 5s
  - 15000 --> 20s
