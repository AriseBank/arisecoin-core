'use strict';

var arisejs = require('arisejs');

function Crypto(scope){
	this.scope = scope;
	this.network = scope.config.network;
}

Crypto.prototype.makeKeypair = function (seed) {
	return arisejs.crypto.getKeys(seed, this.network);
};

Crypto.prototype.sign = function (hash, keypair) {
	return keypair.sign(hash).toDER().toString("hex");
};

Crypto.prototype.verify = function (hash, signatureBuffer, publicKeyBuffer) {
	try {
		var ecsignature = arisejs.ECSignature.fromDER(signatureBuffer);
		var ecpair = arisejs.ECPair.fromPublicKeyBuffer(publicKeyBuffer, this.network);
		return ecpair.verify(hash, ecsignature);
	} catch (error){
		return false;
	}
};

module.exports = Crypto;
