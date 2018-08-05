#!/bin/bash

ERRORFILE="err.log"

while getopts f:e: option
do
  case "${option}" in
    f) FILEIN=${OPTARG};;
    e) ERRORFILE=${OPTARG};;
  esac
done
if [ -z $FILEIN ]; then
  node ./src/index.js 2> $ERRORFILE
else
  node ./src/index.js < $FILEIN 2> $ERRORFILE
fi