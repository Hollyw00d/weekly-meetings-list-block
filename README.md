# Weekly Meetings List Block (WordPress Plugin)

## Summary (TLDR)

- Add a block to show a table of on-going weekly meetings. Some examples could be for a book club, 12 Step group, meditation group, or another type of religious studies group.
- Block includes will output an HTML table that includes drop-down filters like **Show All Days of Week**, **Show All Cities**, etc.
- Screenshot of block on live page (zoomed out):
  ![Weekly Meetings List Block on live page](images/weekly-meetings-list-block-screenshot.png)
- See block on live page (see **Seattle Area Support Groups** heading inside table which is a part of the block):
  [https://mjwpprod.wpenginepowered.com/weekly-meetings-block-wordpress-plugin/](https://mjwpprod.wpenginepowered.com/weekly-meetings-block-wordpress-plugin/)

## Longer Introduction

The Weekly Meetings Block blocks include:

- Filter drop-downs (like **Show All Days of Week** which includes a select tag)
- A **Reset** button
- A **Print Meeting Schedule** button that only works on the live page on a large screen (laptop or desktop)
- This plugin is still being worked on and some features are not done (like styles)

## Web Developer Information

### Installation

1. Fork or downwload the code from this GitHub repo
2. In your terminal:
   - Go into the **weekly-meetings-list-block** folder (like `cd weekly-meetings-list-block`) and install npm packages by doing:  
     `npm i`
   - Build the plugin by running:
     `npm run build`
   - Output the zipped plugin inside the **weekly-meetings-list-block** folder by running:
     `npm run plugin-zip`
3. Now you will see a zipped file named **weekly-meetings-list-block.zip**
4. Log into the WP Admin for your WordPress website and install the **weekly-meetings-list-block.zip** plugin manually ([see manual plugin install steps here](https://quadlayers.com/install-wordpress-plugin-manually/))
5. Starter code below to add 3 duplicate **Weekly Meetings List Block** blocks that you can be inserted using the Code Editor ([see **Using The Code Editor To Edit The Entire Post Or Page** in this documentation page for details](https://www.boldgrid.com/support/wordpress-tutorials/how-to-use-the-code-editor-in-the-gutenberg-editor/))

### More Plugin Details

This plugin was built using:

- Gutenberg Blocks
- React
- Vanilla JavaScript (JavaScript with no frameworks or libraries)
- SCSS
- HTML
- PHP
