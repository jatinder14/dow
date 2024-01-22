#!/bin/bash

UNUSED=$(depcheck --json | jq -r '.dependencies | keys | .[]')

if [ -n "$UNUSED" ]; then
  npm uninstall --save $UNUSED
  echo "Unused dependencies removed: $UNUSED"
else
  echo "No unused dependencies found."
fi
