#!/bin/bash

## ssh
chmod 600 $(ls ~/.ssh/id* | grep -Po '^(?!.*\\.pub).+$')

# config local GPG for signing
git config --global --unset gpg.program
git config --global commit.gpgsign false

# install NPM packages
echo ""
echo "Installing packages..."
pnpm i