import { AssetController } from '../controllers/AssetController.js';
export const AssetUtil = {
    getWalletImage(wallet) {
        if (wallet?.image_url) {
            return wallet?.image_url;
        }
        if (wallet?.image_id) {
            return AssetController.state.walletImages[wallet.image_id];
        }
        return undefined;
    },
    getNetworkImage(network) {
        if (network?.imageUrl) {
            return network?.imageUrl;
        }
        if (network?.imageId) {
            return AssetController.state.networkImages[network.imageId];
        }
        return undefined;
    },
    getConnectorImage(connector) {
        if (connector?.imageUrl) {
            return connector.imageUrl;
        }
        if (connector?.imageId) {
            return AssetController.state.connectorImages[connector.imageId];
        }
        return undefined;
    }
};
//# sourceMappingURL=AssetUtil.js.map