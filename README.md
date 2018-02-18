
<p align="center">
<img src="http://www.eth-commerce.com/images/logo-big.png" width="280">
</p>

<h1 align="center">ETHcommerce</h1>

Peer to Peer (P2P) transactions between you and your customers.
This means that you pay ZERO FEES, all this powered by a lightweight (~30kb) and easy to integrate Javascript library

You can find usage examples [here](http://www.eth-commerce.com/example/) 

[Available on NPM](https://www.npmjs.com/package/eth-commerce)

## Installation

```
npm install eth-commerce --save
```

## Usage

```js
const ethCommerce = new EthCommerce();
ethCommerce.render(
    {
        targetElement: 'pay-button',
        type: 'PAY',
        amount: 10,
        currency: 'USD',
        address: '0x11A7Ca870700f284e4647E55DeD9040f0F86D4D4'
    }, (e)=>{
        console.log('error callback', e);
    },(tx)=>{
        console.log('success callback', tx);
    }
);
```

## Methods

### render(options, errorCallback, successCallback, tryMetamascara = false)

options, errorCallback and successCallback are required

Metamascara feature is experimental. It allows you to render the button without having metamask installed.
Learn more [here](https://github.com/MetaMask/mascara)

Renders a button based on the options and executes the corresponding callbacks after placing and confirm transaction

### getEtherPriceIn(currency)

Returns a promise with the current ethereum value in the corresponding currency.
Example values for currency are (USD, EUR, CNY, JPY, etc.)

### sendTransaction(account, address, amount)

returns a promise after sending a transaction from the available account in web3 (account) to address with the corresponding amount

### waitForConfirmation(tx, minConfirmations, interval)

Keeps polling the current block every ${interval} seconds until receiving ${minConfirmations}
Then executes the success callback

## TODO LIST:

- [ ] Add support for React Native
- [ ] Add tests
- [ ] Store the current state in localStorage to be able to restore it in case of page reload

