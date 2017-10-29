# AriseCoin-Core

AriseCoin is a next generation crypto-currency and decentralized application platform, written entirely in JavaScript. For more information please refer to our website: https://arisecoin.com.

The initial coin offering is up at https://ico.arisecoin.com

We are still in beta testing for the blockchain, so use at your own risk and contribute how you want. We love developers who love contributing to the AriseCoin project. All developers who contribute solutions to working issues are rewarded with AriseCoin.

## Install, Upgrade etc...
You need to provision a linux (ubuntu tested) server (digital ocean, vultur or other).

Then use the excellent EasyCoin script
```
cd
wget https://arisecoin.com/easycoin.sh
bash easycoin.sh
```

For developers, please read below in section "Developer Installation"

## Details

This is a combined fork from Lisk and ARK with the following features and additions:
- There are no sidechains in the AriseCoin fork, we have removed this features
- We have made it easy to launch your own private or public blockchain with easy JS task launchers
- There was no need for a custom-node version and took ARK's direction in removing it.
- There is no AriseCoin-Core UI. We saw this as a major security threat, as did ARK. Removed for now. Will consider adding later.
- Changed many constants, including block rewards and other things. AriseCoin is evenly distributed to AriseCoin holders based on the daily platform gains of AriseBank accounts.
- Used ARK's PBFT forging solution with forging a new block.
- Highly deterministic wallet structure (BIP32), like Bitcoin instead of the native Lisk protocol.
- Using ARK's round management (removed mem_round, reward block fees to forger)
- Uses ARK's smart bridge system and 64-bit vendorfield.
- Uses ARK's peer management memory strategy for network efficiency.
- Uses ARK's transaction management for better broadcasting and better network efficiency.
- Uses ARK's relay node structure.
- Implemented expiring AriseCoins that are minted daily by AriseBank account gains. Uses the Linux Chrony package for network syncing and expiration policies.

### Planned features:
Coming soon

### Performance
Performance data coming soon


## Developer Installation

Install essentials:

```
sudo apt-get update
sudo apt-get install -y curl build-essential python git
```

Install PostgreSQL (min version: 9.5.2)

```
sudo apt-get install -y postgresql postgresql-contrib
sudo -u postgres createuser --createdb --password $USER
createdb arisecoin_test
```

Install Node.js (tested with version 6.9.2, but any recent LTS release should do):

```
sudo apt-get install -y nodejs
sudo npm install -g n
sudo n 6.9.2
```

Install grunt-cli (globally):

```
sudo npm install grunt-cli -g
```

Clone this repository
```
git clone https://github.com/arisebank/arisecoin-node.git
cd arisecoin-node
```

Install node modules:
```
npm install libpq secp256k1
npm install
```

## Launch
To launch AriseCoin on testnet:
```
createdb arisecoin_testnet
node run start:testnet
```

To launch AriseCoin on devnet:
```
createdb arisecoin_devnet
node run start:devnet
```

To launch AriseCoin on mainnet:
```
createdb arisecoin_mainnet
node run start:mainnet
```

**NOTE:** The **port**, **address**, **genesis block** and **config-path** can be overridden by providing the relevant command switch:
```
node app.js -p [port] -a [address] -c [config-path] -g [genesisBlock-path]
```
This allow you to run several different networks, or your own private chain


## Launch your own private or public chain
Generate a genesisBlock.json + a default config.json containing all passphrases of genesis delegates
```
node tasks/createGenesisBlock.js
```
You can find generated files in tasks/
- genesisBlock.json
- config.json
- delegatesPassphrases.json (containing details about the genesis delegates)
- genesisPassphrase.json (containing the details of account having all premined AriseCoin)

Obviously you can hack away tasks/createGenesisBlock.js for your own custom use.

You can the start with your own chain on a single node (all delegates will forge on your single node) using:
```
createdb arisecoin_newchain
npm run start:newchain
```

Then you can distribute the config.json (without the delegates secrets inside, and with custom peers settings) to peers to let them join your chain


## Tests
Load git submodule [arise-js](https://github.com/arisebank/arise-js):
```
git submodule init
git submodule update
```

You should run using test configurations

```
npm run start:test
```

Run the test suite:

```
npm test
```

Run individual tests:

```
npm test -- test/api/accounts.js
npm test -- test/api/transactions.js
```

**NOTE:** The master passphrase for this test genesis block is as follows:

```
the password for the test block will be added later
```


## Authors
- Jared Rice Sr. <jared@arisebank.com>
- Abdo Farag <abdo@arisebank.com>
- FX Thoorens <fx.thoorens@ark.io>
- Boris Povod <boris@crypti.me>
- Pavel Nekrasov <landgraf.paul@gmail.com>
- Sebastian Stupurac <stupurac.sebastian@gmail.com>
- Oliver Beddows <oliver@lisk.io>

## License

The MIT License (MIT)

Copyright (c) 2016-2017 Arise Foundation, LLC.
Copyright (c) 2016 ARK
Copyright (c) 2016 Lisk
Copyright (c) 2014-2015 Crypti

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:  

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
