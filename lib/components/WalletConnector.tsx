import React, { useState } from 'react';

/**
 * WalletConnector component provides a simple UI to connect a user's crypto wallet.
 * In a real implementation, integrate WalletConnect or MetaMask SDK to handle
 * chain-agnostic connections (EVM, Solana, Bitcoin, etc.)
 */
const WalletConnector: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const connectWallet = async () => {
    // TODO: integrate wallet connection logic here using WalletConnect or MetaMask.
    // For now, we mock a connected address.
    try {
      // Example using MetaMask:
      // const [address] = await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
      // setWalletAddress(address);
      setWalletAddress('0xDEADBEEF...');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl font-bold mb-2">Connect Crypto Wallet</h2>
      {walletAddress ? (
        <p>Connected: {walletAddress}</p>
      ) : (
        <button onClick={connectWallet} className="px-4 py-2 bg-blue-500 text-white rounded">
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default WalletConnector;
