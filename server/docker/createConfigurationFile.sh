#!/bin/sh

set -e

cat /usr/src/app/configuration.template.json > /usr/src/app/configuration.json

#if link with mongo, waiting for it!!!
if [ ! -z "${MONGO_1_PORT_27017_TCP_ADDR}" ] && [ ! -z "${MONGO_1_PORT_27017_TCP_PORT}" ]; then
    echo -n "Waiting for mongodb" && \
    while ! nc -w 1 ${MONGO_1_PORT_27017_TCP_ADDR} ${MONGO_1_PORT_27017_TCP_PORT}
    do
        sleep 0.5
        echo -n .
    done
    echo " found!"
fi

PARAMETERS=$(printenv | awk -F "=" '{print $1}' |grep BADMINTON_BACKEND_PARAM_.*)
for name in $PARAMETERS; do
   eval value=\$$name
   sed -i "s|\${${name}}|${value}|g" /usr/src/app/configuration.json
done

echo "Configuration file ==> /usr/src/app/configuration.json"
echo ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
cat /usr/src/app/configuration.json
echo "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<"

node /usr/src/app/server.js