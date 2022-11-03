//https://eth-goerli.g.alchemy.com/v2/XdXxcHEf7emv5PE0ZEj45xgA5uQkLLVM

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks:{
    goerli:{
      url: 'https://eth-goerli.g.alchemy.com/v2/XdXxcHEf7emv5PE0ZEj45xgA5uQkLLVM',
      accounts: ['bdaf3a4a6c23e7e8b171f5ba054965439e2134f3882f07f4e7b73a4337e3c16c']
    }
  }
}