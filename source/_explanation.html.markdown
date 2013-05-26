This chart was [originally designed][original] by my brother, Ben McCrea, for a [challenge][] sponsored by the [Information is Beautiful Awards][iab]. Ben allowed me to use his design for this interactive [D3][] demo.

Since this was my first foray into D3, I wanted to experiment with some different features of the library. The checkboxes I added, while a bit ugly and superfluous, demonstrate interactivity through adding and removing points from a dataset and a staggered transition.

The legend is an example of how HTML and SVG can work together. The text and background of the legend would have been possible with SVG, but much more work to style correctly. HTML is the right tool for this job, so I only used SVG for the symbols (dots) in the legend.

The custom axes were a challenge. To match the design, I couldn't use D3's built-in axis support. Using ticks on the scale, though, I was able to control exactly how the tick marks and labels were styled and positioned.
