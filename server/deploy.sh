#!/bin/bash

echo "deploy openapi.dir"

cd ~/build/openapi.dir
git pull
cd ui
#npm update
#npm run build
cd build
DIR="$(pwd)"
cd ~/build/openapi.dir/server
SERVER_DIR="$(pwd)"
 
cd /var/www/html/releases
NOW="$(date +'%Y-%m-%d-%H-%M')"
sudo mkdir ${NOW}
cd ${NOW}
sudo cp -rf ${DIR}/* ./
cd ../
sudo ln -s ${NOW} prod

cd /var/www/apps/openapi
sudo cp -rf ${SERVER_DIR}/* ./

