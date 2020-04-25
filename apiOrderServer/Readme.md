# pull images from Dockerfile

docker inspect --format='{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' mysql5 > './config/mysql-ip'
docker stop api_takeorder
docker rm api_takeorder
docker build -t api_takeorder --rm .
docker run --name api_takeorder -d -p 4000:4000 api_takeorder

## run docker from image mysql

docker run --name mysql5db -e MYSQL_ROOT_PASSWORD=mysql5password -d -p 3307:3306 mysql:5
