import { IAaveConfiguration, eTaraxaNetwork } from "../../helpers/types";
import { AaveMarket } from "../aave/index";
import { strategyWTARA, strategyUSDT, strategyUSDC } from "./reservesConfigs";

export const TaraxaMarket: IAaveConfiguration = {
  ...AaveMarket,
  ProviderId: 38,
  WrappedNativeTokenSymbol: "WTARA",
  MarketId: "Taraxa Taralend Market",
  ATokenNamePrefix: "Taraxa",
  StableDebtTokenNamePrefix: "Taraxa",
  VariableDebtTokenNamePrefix: "Taraxa",
  SymbolPrefix: "Tara",
  ReservesConfig: {
    WTARA: strategyWTARA,
    USDT: strategyUSDT,
    USDC: strategyUSDC,
  },
  ReserveAssets: {
    [eTaraxaNetwork.testnet]: {
      WTARA: "0x80430bEBAF5AfA9317f9b6562504f38A7adB507f",
      USDT: "0xb80a5D49EA383Aa7b62CFa0363F1bb53CE9EffE3",
      USDC: "0x7554e9F1c97E3e4c963AEc8d22D0307ed89C7AF5",
    },
  },
  // EModes: {
  //   StableEMode: {
  //     id: "1",
  //     ltv: "9700",
  //     liquidationThreshold: "9750",
  //     liquidationBonus: "10100",
  //     label: "Stablecoins",
  //     assets: ["USDC", "USDT"],
  //   },
  // },
  // ChainlinkAggregator: {
  // },
};

export default TaraxaMarket;