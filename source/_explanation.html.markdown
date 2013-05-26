This chart was [originally designed][original] by my brother, Ben McCrea, for a [challenge][] sponsored by the [Information is Beautiful Awards][iab]. Ben allowed me to use his design for this interactive [D3][] demo.

Since this was my first foray into D3, I wanted to experiment with some different features of the library. The checkboxes I added, while a bit ugly and superfluous, demonstrate interactivity through adding and removing points from a dataset and a staggered transition.

The legend is an example of how HTML and SVG can work together. The text and background of the legend would have been possible with SVG, but much more work to style correctly. HTML is the right tool for this job, so I only used SVG for the symbols (dots) in the legend.

The custom axes were a challenge. To match the design, I couldn't use D3's built-in axis support. Using ticks on the scale, though, I was able to control exactly how the tick marks and labels were styled and positioned.

This demo took me about a week to produce, working a couple hours each night. It was built with [Middleman][] and [D3][]. It is hosted on [Github Pages][], deployed with my [middleman-gh-pages][] gem. The demo source is available [here][source].

[original]: http://infobawards.s3.amazonaws.com/NAVIGATING-THE-UNIVERSE-OF-CINEMATIC-OPINION_Ben-McCrea.png
[challenge]: http://www.informationisbeautifulawards.com/2012/02/hollywood-visualisation-challenge-design-shortlist/
[iab]: http://www.informationisbeautifulawards.com
[source]: https://github.com/adamlogic/cinematic_opinion
[middleman]: http://middlemanapp.com
[d3]: http://d3js.org
[middleman-gh-pages]: https://github.com/neo/middleman-gh-pages
[github pages]: http://pages.github.com
