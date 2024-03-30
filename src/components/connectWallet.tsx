import { ReactElement } from 'react';

import { Button } from '@/components/ui/button';
import useConnect from '@/lib/hooks/useConnect';
import { ArrowRight } from 'lucide-react';
import logo from './svglogo.svg';
import { useNavigate } from 'react-router-dom';

function ConnectWallet(): ReactElement {
  const { connect, balance, disconnect, isConnected } =
    useConnect();
  const navigate = useNavigate();

 

  return (
    <div className="mt-4 flex flex-col items-center space-y-2">
      {isConnected ? (
        <>
          <div>
            {balance && (
              <span className="flex flex-row items-center gap-2 font-bold">
                Balance: {parseInt(balance.toString(), 16) / 1e18} BTC
              </span>
            )}
          </div>
          <div className="flex flex justify-center w-full">
            <Button
              onClick={() => {
                disconnect()
              }}
              variant="link"
              className="h-auto p-0 text-base"
            >
              logout
              <ArrowRight size={15} className="ml-1" />
            </Button>
          </div>
        </>
      ) : (
        <Button
          onClick={connect}
          variant="link"
          className="h-auto p-0 text-base"
        >
          Connect your wallet
          <ArrowRight size={15} className="ml-1" />
        </Button>
      )}
    </div>
  );

}

export default ConnectWallet;
