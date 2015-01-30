copy the items from the peach repo w09/d05

sqlite3 metro.db < schema.sql

SELECT * FROM persons CROSS JOIN cities;

SELECT persons.name, cities.name FROM persons INNER JOIN cities ON persons.city_id = cities.id;

* this will show you what cities the person is from
* INNER JOIN will only show you ones that do have a city id


persons = id | name | city_id (1, Jason, 2)

cities = id | name (2, New York)



SELECT persons.name, cities.name FROM persons LEFT OUTER JOIN cities ON persons.city_id = cities.id;

* OUTER JOIN will show you all the people, even if they do not have a city_id.

