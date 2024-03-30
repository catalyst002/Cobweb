# Cobweb.social: A Social platform

Cobweb is an dApp developed for the Spiderhack hackathon. It stands at the intersection of a shares platform and a decentralized voting system, leveraging the power of the Spiderhack blockchain to usher in a novel form of governance and ownership distribution. Cobweb is an enhanced fork of friend.tech, with added functionalities powered by Spiderchain.

## Video Demo

Watch a detailed demonstration of Cobweb on YouTube: [Watch Demo](https://www.youtube.com/watch?v=uYFf-wcxNm0)

## Getting Started with Cobweb

To explore Cobweb, you can directly access the application or set it up locally on your system. Here are the ways to get started:

### Access the Live Application

- **Application URL**: [Visit Cobweb](https://cobweb-social.vercel.app/)
- **Smart Contract Address**: [0xe3502f370a09876B41687f6a0E61a695d4b97123](https://blockscout.botanixlabs.dev/address/0xe3502f370a09876B41687f6a0E61a695d4b97123)

### Local Setup

Follow these steps to run Cobweb on your local machine:

1. **Clone the Repository**:
`git clone https://github.com/catalyst002/Cobweb.git`
2. **Navigate to the Directory**:
`cd Cobweb`
3. **Set Up Supabase Client Secret**: Create a `.env` file in the root directory with your Supabase development credentials. Optionally, set up a Supabase project with a `subjects` table that includes a `roomId` column. VITE_SUPABASE_ANON_KEY=
VITE_SUPABASE_PROJECT_URL=
4. **Install Dependencies**:
`yarn install`
5. **Start the Frontend Development Server**: 
`yarn dev`
6. **Open a New Terminal Session for the Chat Server**:
`cd server && yarn install`
7. **Start the Chat Server**:
`yarn start`
8. **Deploy the Smart Contract**: 
`node deployer.mjs`
9. **Access the Application**: Open `http://localhost:5173/` in your browser.
## Initial Setup for Development Testing
Before you can test Cobweb, ensure the development network (testnet) is running. Follow these steps to set up the testnet:
1. **Start the local testnet**: In a new terminal, run:
`anvil --fork-url https://node.botanixlabs.dev`
2. **Begin Testing**: With the fork operational, you're ready to test using different Chrome user profiles to simulate various subjects and holders.
