# Cobweb.social
The project I've developed for this Spiderhack hackathon is a decentralized application (dApp) built on the Spiderhack blockchain, named "Cobweb." It's a blend of a shares platform and a decentralized voting system that leverages blockchain technology to create a new form of governance and ownership distribution.
This project is a forkde from friend.tech with upgraded functionality powered by Spiderchain. 

# Video Demo

link: https://www.youtube.com/watch?v=uYFf-wcxNm0



## Getting Started
To test app you can proceed by the link: https://cobweb-social.vercel.app/  
Smart contract address: [0xe3502f370a09876B41687f6a0E61a695d4b97123](https://blockscout.botanixlabs.dev/address/0xe3502f370a09876B41687f6a0E61a695d4b97123)

Or build it local

To get the application running, follow these steps:

1. Clone the repository: `git clone https://github.com/catalyst002/react.git`
2. Navigate into the directory: `cd react`
3. setup supabase client secret : create a .env file with the following content (development credentials).You could also create a fresh project with table `subjects` and column as `roomId` in supabase

```
VITE_SUPABASE_ANON_KEY=
VITE_SUPABASE_PROJECT_URL=
```

4. Install the dependencies: `yarn install`
5. Start the frontend development server: `yarn dev`
6. Open a new terminal session
7. Install the dependencies for the chat server: `cd server && yarn install`
8. Start the chat server: `yarn start`
9. Run deployer.mjs `node deployer.mjs` to deploy contract
10. Open the application in your browser: `http://localhost:5173/`
    


## Setup

Before getting into testing the application you need to spin up the devnet. This applications uses devnet to interact with the smart contract. To spin up the devnet, follow these steps:

In a new terminal session run the command:

1. `anvil --fork-url https://node.botanixlabs.dev`
2. Once the fork is up and running start testing
3. For testing we'll be using chrome user 1 as subject 1 and chrome user 2 as holder of this subject



