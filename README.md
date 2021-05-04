# pokemon-generator
Generates a random number of pokemon (non-exclusive!) given a user input.
Started out as a simple Udemy project meant to generate all 151 pokemon sprites in order (1 to 151) and I ended up taking it way further!

# what i learned (updated 5/4/21)
-- Working with client side form validation, I learned how to restrict user input using a regular expression
-- In addition to restricting user input, I learned how to restrict character input (preventing users from entering any number below 1 and any number above 151). I'm *very sure* this is a crude implemenation, I will revise this later.
-- I learned (painfully) how Firefox's SpiderMonkey and Chrome's V8 process javascript differently and how to tackle these problems
-- Using template literals and the `Math` methods, I learned how to randomly pull images from a source (very simply, mind you. It only generates 1-151 and pulls the images from their filenames; aptly named `1.png` to `151.png`)
-- Learned how to call functions more efficiently using HTML attributes
-- Further polished my ability to write and implement functions
-- Learned how to implement keyboard functions (Such as the backspace and enter key)
-- How to use Git! This is an ongoing process for me as I only wish to host projects I believe are worth something to others. I got *a lot* of Git experience during this which makes me super happy!

# challenges
<h3>limit()</h3>
I think my first really challenging task was to implement the limit() function; In total the limit() function took roughly an hour to really wrap my head around. A big part of this challenge was due to not understanding how various HTML tag attributes (namely `oninput` and `onclick`) were really `necessary` for this kind of project. Once I figured that out, it was smooth sailing.

<h3>regex</h3>
I'm putting this here because it wasn't so much challenging as it was a *very important lesson* for me to learn. I am very interested in form validation - both client and server side - and so this was something that - when I figured it out over the span of 30 minutes - became very critical for me to try and remember. 

<h3>HTML form</h3>
I've worked with very simple forms, buttons and labels before, but this was an entirely new concept to me. I think in the future I will take more time working specifically on the form, as this time around I was so enthralled in the Javascript code. The big challenge for this one was learning how the attributes, tag and functions all worked together. Initially, I was clubbing togehter the function calls in one attribute (`onclick`) - this obviously presented issues (which I knew at the time but had very little understanding of why). Eventually after reading the MDN documentation, and some direction from a friend, I figured out the appropriate attributes to include and where to include the functions. I do think there is a far more efficient way of implementing these function calls, but I will experiment in a later project

# sloppiness
In my opinion, this code is very sloppy. I was focused on how much I could implement and/or fix given a set time limit. Now that I have learned so much from this project, I feel so much more confident that I could recreate this in far less time. I understand the concepts - and that is the most important part for me. I have a *strong desire* to write *readable, efficient, pretty* code.
