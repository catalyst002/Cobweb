import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}



/* export function truncateAddress(address: string): string {
  if (address.length <= 8) {
    return address;
  }
  return `${address.slice(0, 4)}...${address.slice(-4)}`;
} */

export const truncateAddress = (address?: string) => {
  if (!address) return 'N/A'; // Early return with a placeholder or message indicating the address is not available
  // Continue with your truncation logic if address is defined
  const match = address.match(/^0x[a-fA-F0-9]{40}$/);
  if (match) {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  } else {
    // Handle the case where the input is not a valid Ethereum address
    return 'Invalid address';
  }
};
