#!/bin/bash

DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
SLACK_PREFIX="<@store-team> " ENVIRONMENT=aws_stage SECONDARY_ROLE=store exec "$DIR/deploy.sh" "$@"
