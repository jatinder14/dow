// using hashrouter
import { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AddProposal } from './components/pages/AddProposal';
import Home from './Home';
import { Navbar } from './components/Navbar';
import { ViewProposal } from './components/pages/ViewProposal';
//wagmi intergration
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5/react'

// 1. Get projectId
const projectId = 'e4d052da8319bccbc5548ec3b6956a54'

// 2. Set chains
const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
}

const bnb = {
  chainId: 56,
  name: 'Binance Smart Chain',
  currency: 'BNB',
  explorerUrl: 'https://bscscan.com',
  rpcUrl: 'https://bsc.drpc.org/'
}


// 3. Create modal
const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'https://mywebsite.com',
  icons: ['https://avatars.mywebsite.com/']
}

// createWeb3Modal({
//   ethersConfig: defaultConfig({ metadata }),
//   chains: [mainnet],
//   projectId
// })
createWeb3Modal({
  ethersConfig: defaultConfig({
    metadata,
    defaultChainId: 1,
    enableEIP6963: true,
    enableInjected: true,
    enableCoinbase: true,
    rpcUrl: '...' // used for the Coinbase SDK
  }),
  chains: [mainnet, bnb],
  projectId
})


export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addproposal" element={<AddProposal />} />
          <Route path="/viewproposal" element={<ViewProposal />} />
        </Routes>
      </Router>
    </>
  );
}
//React App

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/addproposal" element={<AddProposal />} />
//           <Route path="/viewproposal" element={<ViewProposal />} />
//         </Routes>
//       </Router>
//     </>
//   );
// }
