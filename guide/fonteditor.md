# The font editor tool

## Overview

The SDK offers several ways of displaying fonts. For basic fonts there's the option to use TTF fonts.
However if you need styling which goes beond a color and an outline then you can use the font editor.

With the font editor you can create fonts with gradients, outlines, embossing, alpha gradiens, shadows, etc..

The font editor generates three different types of bitmaps: color, font and outline. Each type has one or
more bitmaps depending on the size of the font. If the characters don't fit in a 1024 by 1024 pixel bitmap then
the editor will keep creating bitmaps until all have a bitmap to be placed on.

Color fonts have all information needed to render and the color can't be changed once they will be rendered 
exactly as generated by the tool. These fonts can have all the fance effects in them like gradients, outline,
alpha gradients, etc..

The composite font bitmap are created both for the outline and the font itself. Composite font bitmaps are
rendered white and a color is applied by setting the `strokeStyle` for the outline and the `fillStyle` for the
font on the context.

All loading of the bitmaps is handled by the SDK, you only have to create the font you like and use it from
your javascript code.

## Creating a bitmap font

## Using a bitmap font

<img src="./assets/fonteditor/font-main-screen.png"></img>
<img src="./assets/fonteditor/font-editor.png"></img>
<img src="./assets/fonteditor/font-settings.png"></img>
<img src="./assets/fonteditor/font-created.png"></img>
<img src="./assets/fonteditor/font-menu.png"></img>
