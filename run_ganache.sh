#!/bin/bash
export USER_ADDRESS=0xFc25b7BE2945Dd578799D15EC5834Baf34BA28e1
export API_KEY=_______________

ganache-cli \
--fork $API_KEY \
--unlock $USER_ADDRESS \
--networkId 80001