import csv

with open("title.ratings.tsv/data.tsv", "r", encoding="utf8") as file:
    tsv_file = csv.reader(file, delimiter="\t")
    with open("ratings.sql", "w", encoding="utf8") as ratings:
        for line in tsv_file:
            ratings.write(f"UPDATE content.movies SET rating = {line[1]}, nvotes = {line[2]}  WHERE imdb = '{line[0]}'; \n")
