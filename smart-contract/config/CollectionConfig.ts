import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'MakeShitHappen',
  tokenName: 'MakeShitHappen',
  tokenSymbol: 'MSH',
  hiddenMetadataUri: 'ipfs://__CID__/hidden.json',
  maxSupply: 10000,
  whitelistSale: {
    price: 0,
    maxMintAmountPerTx: 10,
  },
  preSale: {
    price: 0,
    maxMintAmountPerTx: 10,
  },
  publicSale: {
    price: 0.003,
    maxMintAmountPerTx: 10,
  },
  contractAddress: '0x941C393f27b4C05168401af07DDA60D4DeC90Dcf',
  marketplaceIdentifier: 'make-shit-happen',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
