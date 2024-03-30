import { ConnectorController } from '@web3modal/core';
export function markWalletsAsInstalled(wallets) {
    const { connectors } = ConnectorController.state;
    const installedConnectors = connectors
        .filter(c => c.type === 'ANNOUNCED')
        .reduce((acum, val) => {
        if (!val.info?.rdns) {
            return acum;
        }
        acum[val.info.rdns] = true;
        return acum;
    }, {});
    const walletsWithInstalled = wallets.map(wallet => ({
        ...wallet,
        installed: Boolean(wallet.rdns) && Boolean(installedConnectors[wallet.rdns ?? ''])
    }));
    const sortedWallets = walletsWithInstalled.sort((a, b) => Number(b.installed) - Number(a.installed));
    return sortedWallets;
}
//# sourceMappingURL=markWalletsAsInstalled.js.map