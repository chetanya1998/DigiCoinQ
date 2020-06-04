import Web3 from 'web3';

let web3;
//to check browser is having metamask or not
//typeof window is a js function which checks the code is running on server or browser
if (typeof window !== 'undefined' && typeof window.web3 !=='undefined'){
  //we are in the browser  & metamask is running.
  web3 = new Web3(window.web3.currentProvider);


}else{
  //user is not having metamask on the browser
  const provider =new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/40b34e71b2da4e86a73a045b7e5569cf'
  );
  web3 = new Web3(provider);
}

export default web3;
