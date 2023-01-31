#!/usr/bin/env bash

MY_DIR=$(dirname $(readlink -f "$0") | sed  "s/\/[^\/]*$//")
USER=$(whoami)

function getOperationalSystem() {
  case "$OSTYPE" in
  win*) echo "windows" ;;
  msys*) echo "windows" ;;
  *) echo "linux" ;;
  esac
}

OS=$(getOperationalSystem)
NODE_MODULES_DIR="$MY_DIR/node_modules"

echo "==============================================================================="
echo "=== Deployment ================================================================"
echo "=== SRC: $MY_DIR"
echo "=== OS: $OS"
echo "=== USER: $USER"
echo "=== Node Modules: $NODE_MODULES_DIR"
echo "==============================================================================="


## Clean of the node_modules
echo "=== node_modules"
if [ -d "$NODE_MODULES_DIR" ];
then
  echo "=== node_modules : clean"
  rm -rf "$NODE_MODULES_DIR/*"
fi

echo "=== node_modules : install"
npm i

echo "=== Node : Serve"
ng serve

## if you want to check with a watcher
# ng build --watch --configuration development