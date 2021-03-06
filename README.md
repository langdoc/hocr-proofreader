This is Niko Partanen's fork of [hocr-proofreader](https://github.com/not-implemented/hocr-proofreader). After comparing various editors out there, this seems like one that functions the best and is most maintainable, and further experimentation is now carried out to see how well it suits to proofreading some books on Uralic languages spoken in Russia. Since the books are rather large, the setup will be customized so that reading one book will work nicely.

**Note:** The editor is set up to work with hOCR files that contain multiple pages. One way to get those out from Tesseract is to run it on a text file that had paths to individual pages:

    tesseract pagelist.txt book -l kpv hocr

I assume multi-page TIFF would return similar file.

The way I'm currently testing it looks like this:

![](https://imgur.com/3s5e4ZJ.png)

Save-button just saves the edited XML into a file.

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
