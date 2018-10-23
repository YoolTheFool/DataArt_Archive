# DataArt_Archive
## With Ilana

In our time, where data is flooding every computational device (including our brain), we fight for making meaning out of those cold datasets. The numbers are piling-up and we drown in decimal points and boolean phrases. This assignment held an opportuninty to explore and work with an archive or with a story. 

In that matter - refugees data(numbers,statistics,geospatial,etc) could sometime feel more common than the refugees themselves. We decided to create an archive that contains the stories, i.e. text about the journey, the turmoils and the salvation. 
Our aim is to try and find what message is hiding beneath the hood of these stories. And we will try to bring in word-counts to our aid (and back to numbers again).

## The Concept
A word-count comparison between two words along the years 2015-2018.

## The process
In general, we used Python to scrape the text and analyze it, and used Javascript and p5 to create the sketch.

To create this corpus of stories, we went to the UNHCR (The UN Refugee Agency) website, which holds a lot of data regarding all persons-of-concern on this planet. But for us, we had to find the stories and the text, and scrape it into a txt file or JSON "mold". [UNHCR](http://www.unhcr.org/en-us/stories.html)

In a Python script, we used BeautifulSoup library to scrape the Stories webpages and put them in a JSON file of stories divided to years (a 2.3 MB txt file !!)
[Web Scraping - BeautifulSoup](https://github.com/YoolTheFool/DataArt_Archive/blob/master/web_scrape_data_art_json.ipynb)

Then, we used Spacy to do NLP and created a new JSON file with most common nouns per year, and their word-counts.
[Word counting with Spacy](https://github.com/YoolTheFool/DataArt_Archive/blob/master/word_count.ipynb)
Now, that we had a manageble JSON file to work with, we were able to take it to p5 and represent the comparisson in an interactive way.

All that's left to do is write two words (nouns) and see what the numbers has to say.

https://yoolthefool.github.io/DataArt_Archive/
