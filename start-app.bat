echo "start web application"

call pm2 delete all
cd ./apiOrderServer
call pm2 start ./bin/www --name api-order-server -i 2
cd ../
cd ./softpos-pos-api
call pm2 start bin/www --name softpos-pos-api -i 2
cd ../
cd ./web-apps
call pm2 start server.js --name web-apps
