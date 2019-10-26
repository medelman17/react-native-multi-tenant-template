#!/usr/bin/env bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
DIR=$DIR/..
if [ "$1" != "" ]; then
	tenant=$1
else
	tenant="lessor"
fi

echo $tenant