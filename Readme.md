# All install

## web-order

cd ./web-order
rm -rf build
docker inspect --format='{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' api_takeorder > './config/api'
yarn build
docker stop web_takeorder
docker rm web_takeorder
docker build -t web_takeorder --rm .
docker run --name web_takeorder -d -p 80:3000 web_takeorder

## apiOrderServer

cd ..
cd ./apiOrderServer
docker inspect --format='{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' mysql5 > './config/mysql-ip'
docker stop api_takeorder
docker rm api_takeorder
docker build -t api_takeorder --rm .
docker run --name api_takeorder -d -p 4000:4000 api_takeorder

## softpos-pos-api

cd ..
cd ./softpos-pos-api
docker inspect --format='{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' mysql5 > './config/mysql-ip'
docker stop api_pos
docker rm api_pos
docker build -t api_pos --rm .
docker run --name api_pos -d -p 5000:5000 api_pos

## mysql5

docker run --name mysql5db -e MYSQL_ROOT_PASSWORD=mysql5password -d -p 3307:3306 mysql:5

## stop all docker

docker stop web_takeorder
docker stop api_takeorder
docker stop api_pos
docker rm web_takeorder
docker rm api_takeorder
docker rm api_pos
