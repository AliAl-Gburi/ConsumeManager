import csv

with open("adjusted.tsv", "r", encoding="utf8") as file:
    tsv_file = csv.reader(file, delimiter="\t")
    with open("sc.sql", "w", encoding="utf8") as sql:
        sql.write('CREATE SCHEMA IF NOT EXISTS content;\n')
        sql.write('\n')
        sql.write('CREATE TABLE IF NOT EXISTS movies (\n')
        sql.write('\t id serial PRIMARY KEY,\n')
        sql.write('\t imdb VARCHAR(10) UNIQUE NOT NULL,\n')
        sql.write('\t name VARCHAR(255),\n')
        sql.write('\t year integer,\n')
        sql.write('\t duration integer,\n')
        sql.write('\t genres varchar(255),\n')
        sql.write(');')
        sql.write('\n')
        for line in tsv_file:
            name = ''
            if "'" in line[2]:
                name = line[2].replace("'", "''")
            else:
                name = line[2]
            sql.write(f"INSERT INTO content.movies(imdb, name, year, duration, genres) VALUES ('{line[0]}', '{name}', {line[5]}, {line[7]}, '{line[8]}'); \n")
