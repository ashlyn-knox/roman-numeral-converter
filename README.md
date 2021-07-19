# README

A simple tool for converting between roman and arabic numerals.

Initially built with html, scss, vanilla js. After reaching stage 3, this will be refactored as a react app and then used as a place to experiment with styling.

## UI Layout and Functionality

### Stage 1

- Header: no top bar, have a simple title with a logo
  - centered
- conversion tool inside a box, centered on page
- label heading states which direction you are converting, default as arabic to roman
- submit button to convert
- output in large centered text under input

### Stage 2

- No submit button, automatically start outputting the values, use async await

### Stage 3

- no button to switch input values
- detect whether numerals or arabic numbers are being entered and convert them
- **NOTE**: _I was thinking having 2 input fields and the user going between these, but that seems unnecessary due to the type of content_

## JavaScript TODO

- Create JS interaction on page
- Separate JS that assigns to html from functions for app
