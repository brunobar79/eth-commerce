class EthCommerce {
  getImage(name) {
    switch (name) {
      case "ETHEREUM_ICON":
        return "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjI1NnB4IiBoZWlnaHQ9IjQxN3B4IiB2aWV3Qm94PSIwIDAgMjU2IDQxNyIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCI+Cgk8Zz4KCQk8cG9seWdvbiBmaWxsPSIjMzQzNDM0IiBwb2ludHM9IjEyNy45NjExIDAgMTI1LjE2NjEgOS41IDEyNS4xNjYxIDI4NS4xNjggMTI3Ljk2MTEgMjg3Ljk1OCAyNTUuOTIzMSAyMTIuMzIiLz4KCQk8cG9seWdvbiBmaWxsPSIjOEM4QzhDIiBwb2ludHM9IjEyNy45NjIgMCAwIDIxMi4zMiAxMjcuOTYyIDI4Ny45NTkgMTI3Ljk2MiAxNTQuMTU4Ii8+CgkJPHBvbHlnb24gZmlsbD0iIzNDM0MzQiIgcG9pbnRzPSIxMjcuOTYxMSAzMTIuMTg2NiAxMjYuMzg2MSAzMTQuMTA2NiAxMjYuMzg2MSA0MTIuMzA1NiAxMjcuOTYxMSA0MTYuOTA2NiAyNTUuOTk5MSAyMzYuNTg2NiIvPgoJCTxwb2x5Z29uIGZpbGw9IiM4QzhDOEMiIHBvaW50cz0iMTI3Ljk2MiA0MTYuOTA1MiAxMjcuOTYyIDMxMi4xODUyIDAgMjM2LjU4NTIiLz4KCQk8cG9seWdvbiBmaWxsPSIjMTQxNDE0IiBwb2ludHM9IjEyNy45NjExIDI4Ny45NTc3IDI1NS45MjExIDIxMi4zMjA3IDEyNy45NjExIDE1NC4xNTg3Ii8+CgkJPHBvbHlnb24gZmlsbD0iIzM5MzkzOSIgcG9pbnRzPSIwLjAwMDkgMjEyLjMyMDggMTI3Ljk2MDkgMjg3Ljk1NzggMTI3Ljk2MDkgMTU0LjE1ODgiLz4KCTwvZz4KPC9zdmc+";
      case "LOADING_ICON":
        return "data:image/gif;base64,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";
      case "SUCCESS_ICON":
        return "data:image/png;base64,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";
    }
  }

  //metamascara is currently broken, so we're defaulting to false for now...
  render(options, errorCallback, successCallback, tryMetamascara = false) {
    const { targetElement, amount, address, currency, custom, type } = options;

    this.errorCallback = errorCallback;
    this.successCallback = successCallback;

    window.addEventListener("load", _ => {
      // Checking if Web3 has been injected by the browser (Mist/MetaMask)
      if (typeof web3 !== "undefined") {
        // Use Mist/MetaMask's provider
        const provider = new Web3(web3.currentProvider);
        // Use the browser's ethereum provider
        provider.eth.getAccounts((err, accounts) => {
          this.renderButton({
            ...options,
            account: accounts[0]
          });
        });
      } else {
        //Fallback to metamascara
        if (tryMetamascara) {
          console.log("trying metamascara");
          this.injectMetamascara(options);
        } else {
          console.log("no web 3");
          this.renderNoWeb3(targetElement);
          this.errorCallback({ error: "no web3 detected" });
        }
      }
    });
  }

  injectMetamascara(options) {
    const metamascara = document.createElement("script");
    metamascara.type = "text/javascript";
    metamascara.src = "https://wallet.metamask.io/metamascara.js";
    const ref = document.querySelector("script");
    ref.parentNode.insertBefore(metamascara, ref);
    metamascara.addEventListener("load", _ => {
      console.log("metamascara injected");

      const ethJsScript = document.createElement("script");
      ethJsScript.type = "text/javascript";
      ethJsScript.src =
        "https://cdn.jsdelivr.net/npm/ethjs@0.3.0/dist/ethjs.min.js";
      const ref = document.querySelector("script");
      ref.parentNode.insertBefore(ethJsScript, ref);
      ethJsScript.addEventListener("load", __ => {
        console.log("ethJS injected");
        const provider = metamask.createDefaultProvider();
        const eth = new Eth(provider);
        eth.accounts((err, accounts) => {
          this.renderButton({
            ...options,
            account: accounts[0]
          });
        });
      });

      this.render(options, this.successCallback, this.errorCallback, false);
    });
  }

  renderNoWeb3(targetElement) {
    this.renderStyles();

    const div = document.createElement("div");
    div.classList.add("eth-web3-missing-wrapper");

    const p = document.createElement("p");
    p.classList.add("eth-web3-missing");
    const str =
      'Looks like your browser does not support dApps. Install <a  target="_blank" href="https://metamask.io">metamask.io</a> or try visiting this website from a mobile app like <a target="_blank" href="https://www.cipherbrowser.com/">Cypher</a>, <a target="_blank" href="http://www.toshi.org/">Toshi</a> or <a target="_blank" href="https://status.im/">Status</a>';
    p.innerHTML = str;
    div.appendChild(p);

    document.getElementById(targetElement).appendChild(div);
  }

  getEtherPriceIn(currency) {
    return new Promise((resolve, reject) => {
      fetch(
        `https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=${currency}&sign=true`,
        {
          method: "POST",
          mode: "cors"
        }
      )
        .then(response => response.json())
        .then(data => {
          console.log("GOT ETH PRICE", data);
          resolve(data[currency]);
        })
        .catch(e => {
          reject(e);
        });
    });
  }

  renderButton(options) {
    this.renderStyles();

    const {
      account,
      targetElement,
      amount,
      address,
      currency,
      custom,
      type,
      label
    } = options;

    const a = document.createElement("a");
    a.classList.add("eth-btn");

    const iconWrapper = document.createElement("span");
    iconWrapper.classList.add("eth-icon-wrapper");

    const img = document.createElement("img");
    img.src = this.getImage("ETHEREUM_ICON");
    img.id = "eth-icon-svg";

    const span = document.createElement("span");
    span.id = "eth-btn-text";

    iconWrapper.appendChild(img);
    a.appendChild(iconWrapper);
    a.appendChild(span);

    let input = null,
      select = null;

    switch (type) {
      case "PAY":
        span.textContent = "Pay with Ethereum";
        break;
      case "BUY":
        span.textContent = "Buy with Ethereum";
        break;
      case "CUSTOM":
        span.textContent = label;
        break;
      default:
        console.warn("EthCommerce: missing parameter type");
    }

    a.addEventListener("click", e => {
      e.preventDefault();
      if (!this.loading) {
        this.loading = true;

        document.getElementById("eth-icon-svg").src = this.getImage(
          "LOADING_ICON"
        );
        this.getEtherPriceIn(currency)
          .then(price => {
            let amountIntETH = parseFloat(amount / price);
            const amountToReceive = web3.toWei(amountIntETH, "ether");

            this.sendTransaction(account, address, amountToReceive)
              .then(tx => {
                document.getElementById("eth-btn-text").textContent =
                  "Waiting for confirmation";
                this.waitForConfirmation(tx);
              })
              .catch(e => {
                console.log("Error sending transaction", e);

                document.getElementById("eth-icon-svg").src = this.getImage(
                  "ETHEREUM_ICON"
                );
                document.getElementById("eth-btn-text").textContent =
                  "Pay with Ethereum";

                this.errorCallback(e);
                this.loading = false;
              });
          })
          .catch(e => {
            console.log("Error getting ETH price", e);

            document.getElementById("eth-icon-svg").src = this.getImage(
              "ETHEREUM_ICON"
            );
            document.getElementById("eth-btn-text").textContent =
              "Pay with Ethereum";

            this.errorCallback(e);
            this.loading = false;
          });
      }
    });

    document.getElementById(targetElement).appendChild(a);
  }

  renderStyles() {
    const style = document.createElement("style");
    style.innerHTML =
      ".eth-btn {" +
      "margin: 25px 0px;" +
      "width: 80%;" +
      "min-width: 220px;" +
      "max-width: 220px;" +
      "height: 42px;" +
      "background-color: #fcfcfc;" +
      "border-radius: 2px;" +
      "box-shadow: 0 3px 4px 0 rgba(0, 0, 0, .2);" +
      "cursor: pointer;" +
      "cursor: hand;" +
      "align-self: center;" +
      "user-select: none;" +
      "transition: all 400ms ease 0s;" +
      "display: flex;" +
      "}" +
      ".eth-btn .eth-icon-wrapper {" +
      "position: absolute;" +
      "margin-top: 1px;" +
      "margin-left: 1px;" +
      "width: 40px;" +
      "height: 40px;" +
      "border-radius: 2px;" +
      "user-select: none" +
      "}" +
      ".eth-btn #eth-icon-svg {" +
      "position: absolute;" +
      "margin-top: 11px;" +
      "margin-left: 11px;" +
      "width: 18px;" +
      "height: 18px;" +
      "user-select: none" +
      "}" +
      ".eth-btn #eth-btn-text {" +
      "float: right;" +
      "margin: 11px 14px 40px 40px;" +
      "color: #757575;" +
      "font-size: 15px;" +
      "letter-spacing: .2px;" +
      "font-family: Helvetica Neue, Arial;" +
      "user-select: none" +
      "}" +
      ".eth-btn:hover {" +
      "box-shadow: 0 3px 8px rgba(117, 117, 117, .5);" +
      "user-select: none;" +
      "}" +
      ".eth-web3-missing-wrapper {" +
      "min-width: 290px;" +
      "}" +
      ".eth-web3-missing {	" +
      "font-size: 13px;" +
      "color: #999;" +
      "line-height: 20px;" +
      "max-width: 320px;" +
      "display: block" +
      "}" +
      ".eth-web3-missing a{	" +
      "color: #FF0000;" +
      "}" +
      ".eth-btn:active {" +
      "box-shadow: 0 1px 1px #757575;" +
      "background: #F8F8F8;" +
      "color: #fff;" +
      "user-select: none;" +
      "}";

    const ref = document.querySelector("script");
    ref.parentNode.insertBefore(style, ref);
  }

  waitForConfirmation(tx) {
    const MIN_CONFIRMATIONS = 5,
      INTERVAL = 3;
    let txBlockNumber = null,
      confirmations = 0,
      start_time = Date.now();

    let checkConfirmations = setInterval(_ => {
      web3.eth.getTransaction(tx, (error, result) => {
        if (!error) {
          txBlockNumber = result.blockNumber;
          if (txBlockNumber) {
            web3.eth.getBlockNumber((error, currentBlockNumber) => {
              if (!error) {
                const confirmations = currentBlockNumber - txBlockNumber;
                console.log(confirmations, "confirmations");
                if (confirmations >= MIN_CONFIRMATIONS) {
                  const delta = (Date.now() - start_time) / 1000;
                  console.log(`Transaction took ${delta} seconds to confirm`);
                  clearInterval(checkConfirmations);

                  document.getElementById("eth-btn-text").textContent =
                    "Thank you!";
                  document.getElementById("eth-icon-svg").src = this.getImage(
                    "SUCCESS_ICON"
                  );

                  this.successCallback(result);
                }
              } else {
                this.errorCallback(error);
              }
            });
          } else {
            console.log("block height: pending");
          }
        } else {
          this.errorCallback(error);
        }
      });
    }, INTERVAL * 1000);
  }

  sendTransaction(account, address, amount) {
    let tData = { from: account, to: address, value: amount };
    console.log("About to send tx data:", tData);
    return new Promise((resolve, reject) => {
      web3.eth.estimateGas(tData, (error, gas) => {
        if (!error) {
          web3.eth.getGasPrice((error, gasPrice) => {
            if (error) {
              reject(error);
            } else {
              web3.eth.sendTransaction(
                { ...tData, gas: gas, gasPrice: gasPrice * 5 },
                (error, txID) => {
                  if (error) {
                    reject(error);
                  } else {
                    console.log("Submitted tx", txID);
                    resolve(txID);
                  }
                }
              );
            }
          });
        } else {
          reject(error);
        }
      });
    });
  }
}
