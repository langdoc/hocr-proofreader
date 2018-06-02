This is Niko Partanen's fork of [hocr-proofread](https://github.com/not-implemented/hocr-proofreader). After comparing various editors out there, this seems like one that functions the best and is most maintainable, and further experimentation is now carried out to see how well it suits to proofreading some books on Uralic languages spokene in Russia. Since the books are rather large, the setup will be customized so that reading one book will work nicely.

hOCR-Proofreader
================

Web based JavaScript GUI library for proofreading/editing hOCR.

Features:

- Two view concept: Original layout vs. hOCR text – linked together (i.e. hovering words etc. on both sides)
- Original layout can be switched between the original image and the text rendered from hOCR at the same positions –
  really powerful to find OCR errors
- Pure JavaScript without dependencies just using current browser features
- Embeddable in other projects

Online-Demo: http://www.not-implemented.de/hocr-proofreader/


TODO
----

- Full editor features (currently it's just a "contentEditable = true") ... there is a lot of work to do
- Handling bounding-boxes on word/line/paragraph merge/split correctly
- ...
