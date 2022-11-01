from base64 import encode
import csv

with open("data.tsv", "r" , encoding="utf8") as file:
    tsv_file = csv.reader(file, delimiter="\t")
    with open("adjusted.tsv", "w", encoding="utf8", newline='') as wf:
        writer = csv.writer(wf, delimiter="\t")
        for line in tsv_file:
            if line[1] == 'movie' and line[7] != "\\N" and line[5] != "\\N" and line[2] != "\\N":
                writer.writerow(line)
    
        