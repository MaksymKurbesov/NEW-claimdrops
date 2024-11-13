export const identifyCryptoWallet = (text) => {
  // Регулярные выражения для каждого типа кошельков
  const ethereumRegex = /^0x[a-fA-F0-9]{40}$/; // Ethereum (42 символа, 0x-префикс)
  const solanaRegex = /^[1-9A-HJ-NP-Za-km-z]{43,44}$/; // Solana (43-44 символа, буквенно-цифровой)
  const starknetRegex = /^0x[a-fA-F0-9]{40,64}$/; // StarkNet (40-64 символа, 0x-префикс)
  const aptosRegex = /^[a-fA-F0-9]{66}$/; // Aptos (66 символов, буквенно-цифровой)
  const cosmosRegex = /^cosmos1[0-9a-z]{38,43}$/; // Cosmos (начинается с cosmos1, 39-44 символа)
  const bitcoinRegex = /^(1|3|bc1)[A-HJ-NP-Za-km-z1-9]{25,42}$/; // Bitcoin (26-42 символа, определённые префиксы)
  const isCryptoWallet =
    ethereumRegex.test(text) ||
    solanaRegex.test(text) ||
    starknetRegex.test(text) ||
    aptosRegex.test(text) ||
    cosmosRegex.test(text) ||
    bitcoinRegex.test(text);

  // Если не соответствует ни одному из форматов
  return isCryptoWallet;
};