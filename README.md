# FINAL PROJECT -- a new idea was chosen; cancelled idea is at the bottom

## Public ethereum address to receive nft certificate
0x0443ADD1CE12EeBD52DC7faebF3Bc96D91da18e1
## A senryū/haiku NFT
A [senryū](https://en.wikipedia.org/wiki/Senry%C5%AB) is a genre of poem prevalent in Japan and other parts of the world, often confused with [haiku](https://en.wikipedia.org/wiki/Haiku).

The difference is that senryū tend to be about human foibles while haiku tend to be about nature, and senryū are often cynical or darkly humorous while haiku are more serious. Unlike haiku, senryū do not have to include a kireji (cutting word), and do not generally include a kigo, or a word about the four seasons.

My idea is to build an app where amateur poets or even anyone can get creative with their senryū/haiku, storing it in an NFT. If they are out of ideas, it is totally okay! You can use one generated from the app. I chose senryū to represent both haiku/senryū in the project directory structure as senryū is a broader category.

The app will actually check whether your poem follows the rule for haiku/senryū -- three lines where each has syllables of 5, 7, 5, respectively.
The generated haiku/senryū will also follow the rule.

It does not use IPFS url as it creates an [on-chain nft](https://medium.com/coinmonks/how-to-create-on-chain-nfts-with-solidity-1e20ff9dd87e)

It is currently deployed [here](https://consensys-final.herokuapp.com/)  (it's working!)

The screencast is uploaded on [youtube](https://www.youtube.com/watch?v=CAgZe8yoOgc)

Thus, the learning goal is:
- To explore NLG (Natural Language Generation) libraries in JS and to use it in a simple project.
- To understand what an NFT is and how that can be used for an NLG project.
- To create an On-chain NFT

## Directory Structure
### backend
- `./contracts` : contains the NFT contract
- `./migrations` : contains deployment scripts.
- `./test` : contains unit tests
### frontend
- `./client/src`
  - `src/components` : contains app components used (process/generate a senryū)
  - `src/contracts` : contains migrated contracts from the backend
  - `src/data` : contains the grammar used to generate senryū
  - `src/state` : contains the redux reducer
  - `src/store` : contains the redux store
  - etc.

## how to locally run

### NULLA.start
create `.env` file, and specify keys 
Make sure you have some test eth on ropsten
```
MNEMONIC=<your metamask mnemonic>
INFURA_API_KEY=<your infura api key>
```
### I.backend
1. run `yarn install` in the project directory
2. run `yarn test` to run the unit tests
3. run `truffle migrate --network ropsten`

### II.frontend
1. run `yarn install` in the `/client` directory
2. run `yarn start` (have metamask ready)
3. the client will run in localhost `3000`
### III. the app
1.
    - on `Generate one`, click the button to generate a haiku/senryū
  or
    - on `Type your own`, type in your very own haiku/senryū
2. click `click to mint` button to mint your NFT

# IDEA BELOW IS CANCELLED
# CANCELLED IDEA OF FINAL PROJECT
## Blockchain-based document storage and access system -- CANCELLED (as I found an almost exact example from the web; did not want to copy.)

The idea mainly sparks from the concept of digital signatures and the fact that blockchain can be a distributed, decentralized database.

- Users will submit their documents to the Blockchain system.
- Any other user or systems can access them from the Blockchain with the required permissions from the user.
- This system if implemented would lead to secure, paperless, and quick transactions and would be convenient to the users.
- We can put a version control system too
- But I want to implement a Proof of Concept of it, scaled down given the constraints on time.
- Only assuming up to 2 users, a basic gui etc.