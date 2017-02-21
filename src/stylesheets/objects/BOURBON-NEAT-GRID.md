# CSS Float Based Grid System - Bourbon Neat 1.8.0

Bourbon Neat 1.8.0 (http://neat.bourbon.io/) is the float based grid system used by Pugin and is implemented via its Node package.

For all information on implementation and usage see:

1. Github repo which shows you all base grid settings, functions and mixins contained within the Bourbon Neat distribution - https://github.com/thoughtbot/neat/tree/master/app/assets/stylesheets. Each file also contain lots of useful inline comments about what it does, how to implement it and how to change it.  

2. Website docs which provide a general overview of usage and implementation - http://thoughtbot.github.io/neat-docs/latest/. These online docs, while useful, should be read in conjunction with the files within the Github repo.

3. Website examples which provide a basic visual reference for implementing common Neat grid configurations - http://neat.bourbon.io/examples/.

------------------------------------------------------------------------------------------------------------------------------------

# Need to EDIT Pugin's custom grid?

1. Base page dimensions, grid settings and breakpoints are declared in the `objects/grid-settings.scss` file

2. Basic layouts can be declared and updated in the `objects/grid-layouts.scss` file

------------------------------------------------------------------------------------------------------------------------------------

# Common features of Bourbon Neat you are likely to use

1. Media Breakpoints - 'functions/new-breakpoint.scss'

Construct a new media breakpoint in Neat - any created should be added to the `objects/grid-settings.scss` file.
Github location: https://github.com/thoughtbot/neat/blob/master/app/assets/stylesheets/functions/_new-breakpoint.scss

2. Omega Gutter Removal - 'grid/omega.scss'

Remove the gutter margin from any column or element - there are number of available options to target the element you wish to change.
Github location: https://github.com/thoughtbot/neat/blob/master/app/assets/stylesheets/grid/_omega.scss

3. Outer Container - 'grid/outer-container.scss'

Handles the declaration and construction of the outer container used to home your row/column layouts.
Github location: https://github.com/thoughtbot/neat/blob/master/app/assets/stylesheets/grid/_outer-container.scss

4. Padding - 'grid/pad.scss'

Simply add padding to any element.
Github location: https://github.com/thoughtbot/neat/blob/master/app/assets/stylesheets/grid/_pad.scss

5. Rows - 'grid/row.scss'

Set an element as a row of columns in the grid layout. Floats are cleared and display property is set. Rows can't be nested.
Github location: https://github.com/thoughtbot/neat/blob/master/app/assets/stylesheets/grid/_row.scss

6. Shift (Moving an element by 'x' columns) - 'grid/shift.scss'

Move an element horizontally by a number of columns. Positive argument values shift the element to the active layout direction (left or right), while negative ones shift it to the opposite direction (left or right).
Github location: https://github.com/thoughtbot/neat/blob/master/app/assets/stylesheets/grid/_shift.scss

7. Clear Fix - 'mixins/clearfix.scss'

Standard, convenient mixin for clearing the float on an element.
Github location: https://github.com/thoughtbot/neat/blob/master/app/assets/stylesheets/mixins/_clearfix.scss

8. Base Bourbon Neat Grid Settings - 'settings/grid.scss'

*These settings should not be edited and used as a reference only*
This file declares all the base Bourbon Neat grid settings including max and min grid widths, column widths, gutter widths and flow direction.
Github location: https://github.com/thoughtbot/neat/blob/master/app/assets/stylesheets/settings/_grid.scss
