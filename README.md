![alt text](https://preview.ibb.co/mBZ3YR/arisecoin_core.png "AriseCoin header")

# AriseCoin-Core
You earn, while they gain.
The world, makes money go round.

With the release of the world's first cryptocurrency bank, many new possibilities 
become realities. AriseCoin is one of them. With the launch of today's ICO, we 
not only launch the largest ICO ever, we release the first blockchain built on 
wealth creation for everyone.

### What Is AriseCoin?
AriseCoin is a new digital currency that enables the global economic system the 
world has been waiting for. This new economic system combines the best features 
of capitalism and socialism, while removing their defects. It's capitalism without 
the inequality, and socialism without the lack of opportunity. With AriseCoin™, 
the rich can still get richer, and the poor are raised from poverty without taxing 
anyone. Everyone benefits from a combination of their personal wealth and the 
growth and circulation of the global economy. We call this new form of economic 
system "circulism," because it's all about circulation.

### Why AriseCoin?
AriseCoin works directly with the AriseBank platform. In fact, they both work 
in concert with one another. AriseCoin is minted daily, based on the total daily
gains from all AriseBank bank accounts. Those minted AriseCoins are then automatically 
distributed to AriseCoin wallet holders around the world, creating truly organic 
circulation, while also creating wealth distribution to everyone who's a part of 
the AriseCoin community.


## Install, Upgrade etc...
You need to provision a linux (ubuntu tested) server (digital ocean, vultur or other).


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

Install AriseCoin-Core Dependencies 

```
sudo apt-get update
sudo apt-get install -y curl build-essential python git postgresql postgresql-contrib libpq-dev postgresql-server-dev-9.5
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
nvm install 6.9.2
nvm use 6.9.2
```

Install AriseCoin:

```
sudo -u postgres createuser --createdb --password $USER
createdb arisecoin_mainnet
git clone http://labs.arisebank.com/aco/arisecoin-core.git
cd arisecoin-core
sudo npm install grunt-cli forever -g
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

To launch AriseCoin on mainnet (Forever):
```
createdb arisecoin_mainnet
forever node start app.js
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

