The 7-1 Pattern

Based off the 7-1 pattern from Hugo Giraudel, we use a slightly modified version as I chose to omit the "themes" directory since we generally use one theme per site. Here's how you might set up a directory along with some examples of files that would be in each folder.

base/
_reset.scss
_typography.scss

components/
_buttons.scss
_navigation.scss
_gallery.scss

layout/
_header.scss
_grid.scss
_footer.scss

pages/
_home.scss
_about.scss
_contact.scss

themes/
_theme.scss
_admin.scss

helpers/ (or utilities/)
_variables.scss
_functions.scss
_mixins.scss

vendors/
_jquery-ui.scss

main.scss


1. The base folder holds boilerplate content. It defines some standard styles for commonly used HTML elements.

2. The components folder holds all your micro layout files. Your styles for buttons and navigation and similar page components.

3. Your macro layout files go in the layouts folder. Styles for major sections of the layout like a header or footer and styles for a grid system would belong here.

4. If you have styles specific to individual pages on your site, you can place them in the pages folder. For example it’s not uncommon for the home page of your site to require page specific styles that no other page receives.

5. The themes folder holds files that create project specific themes. For example one section of your site might use a color scheme with primary colors, while another section builds a color scheme based on neutrals and earth tones.

6. The helpers or utilities folder holds Sass tools, helper files, variables, and config files. These files won’t compile any CSS on their own.

7. Finally the vendors folder holds 3rd party code and the main.scss file uses @import statements to include the other files.
