[![DeepSource](https://deepsource.io/gh/chrisdl/nova-shuffle.svg/?label=active+issues&show_trend=true)](https://deepsource.io/gh/chrisdl/nova-shuffle/?ref=repository-badge)
[![Build Status](https://travis-ci.com/chrisdl/nova-shuffle.svg?branch=master)](https://travis-ci.com/chrisdl/nova-shuffle)

# Shuffle

Extension for nova.app that allows you to shuffle highlighted text/lines.

![usage](https://raw.githubusercontent.com/chrisdl/nova-shuffle/master/SHFL.gif)

# About

The shuffle being used is a [Fisher-Yates shuffle](https://bost.ocks.org/mike/shuffle/).

# Usage

Currently you can shuffle in 2 different ways:

  - Shuffle Lines: Shuffle multiple selected lines.
  - Shuffle Content: The lines are NOT shuffled but each character (not counting whitespace on the left) is shuffled for one or more selected lines.

# Future feature

  - [ ] TODO Shuffle Content: If you select an array by selecting it's start and end (signified by brackets or curly braces) following the `[x,y,z]` or `{x,y,z}` syntax. The space after the `,` is optional.

# How big can we go?

 - I tried shuffling lines on about 100k lines and it worked fine, although Nova definitely struggled with replacing that amount of text in one go. Aka the shuffling isn't really the bottleneck.
 - Shuffling content seemed to start complaining a bit on my computer for a file that was about 1.4MB (50k LoC of roughly 40 character length).

# New stewardship

I unfortunately no longer use Nova, if anyone wants to take over stewardship of this extension I would be happy to accomodate. I would suggest contacting me through LinkedIn https://www.linkedin.com/in/cdilorenzo/
