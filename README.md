# Smart contracts for Fantom Artion Marketplace

besu --data-path=data public-key export-address --to=data/node1Address

Current Test Network in production:
NODE 1: 
besu --data-path=data --genesis-file=../genesis.json --network-id 1337 --rpc-http-enabled --rpc-http-api=ETH,NET,CLIQUE,WEB3 --host-allowlist=* --rpc-http-cors-origins=all --rpc-http-port=8545 --rpc-http-host=0.0.0.0 --p2p-enabled=true --min-gas-price=0 --discovery-enabled=true

besu --data-path=data --genesis-file=../genesis.json --bootnodes=enode://8ebdb70e7d1e156cfb32df0fd2024c78bfe3497946b2328068f8210d808551b6945e356dba8ddc7c7c4f6cb6dc5882de4fce88515c5045c7709f79b3e2cee0ac@127.0.0.1:30303 --network-id 1337 --p2p-port=30304 --rpc-http-enabled --rpc-http-api=ETH,NET,CLIQUE --host-allowlist=* --rpc-http-cors-origins=* --rpc-http-port=8546 --rpc-http-host=0.0.0.0 --p2p-enabled=true --discovery-enabled=true

besu --data-path=data --genesis-file=../genesis.json --bootnodes=enode://8ebdb70e7d1e156cfb32df0fd2024c78bfe3497946b2328068f8210d808551b6945e356dba8ddc7c7c4f6cb6dc5882de4fce88515c5045c7709f79b3e2cee0ac@127.0.0.1:30303 --network-id 1337 --p2p-port=30305 --rpc-http-enabled --rpc-http-api=ETH,NET,CLIQUE,WEB3 --host-allowlist=* --rpc-http-cors-origins=* --rpc-http-port=8547 --rpc-http-host=0.0.0.0 --p2p-enabled=true --discovery-enabled=true

curl http://3.38.125.193:8545/ \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"method":"eth_blockNumber","params":[],"id":1,"jsonrpc":"2.0"}'

NEW DP DEPLOYMENT:
DP_TOKEN_ADDRESS=0xD7D34Bc25E1139987e2318d49eEFfc272472fc09

#####

network:  besutestnet
Deployer's address:  0x2C686C46D3622d60CCAbEfb757158c8904312871
FantomArtion deployed at 0xe046f3A2031e891371cd3448a6D5ECB59cD85a12
FantomArtion - IP NFT - deployed at 0xa2b2EFCA3D3cCF59F0ace81a9D6Ea668b8d9a3eE
FantomArtion - Personal NFT - deployed at 0x7557aEe43b1baf0E5F41c8bb13FdD2eb71eDc54e
FantomArtion - Merchandise NFT - deployed at 0x78E727C21608554E289B7A59bFe9D20368a7A70b
ProxyAdmin deployed to: 0x4732708fe49168d90049d19c80B74E111242dB1A
FantomMarketplace deployed to: 0xf8f7d86D85f7006a3f85E003B565F333b947d14e
Marketplace Proxy deployed at  0x34De671bd97F47c4710D92C7DFb8cc9a53CbE1cB
Marketplace Proxy initialized
FantomBundleMarketplace deployed to: 0x3B3b20F3aC86eFc327F5761CF40dEA1BaC32134C
Bundle Marketplace Proxy deployed at  0xB5352AF7E9001D7BDE9FcC29Fd2395f316EE8D4F
Bundle Marketplace Proxy initialized
FantomAuction deployed to: 0xDe4Ad2bF29d12694cCEF72A961Cb527db11c261c
Auction Proxy deployed at  0x21856E9712639aFd994f5F7991f4A7507B1EA89a
Auction Proxy initialized
FantomNFTFactory deployed to: 0xf998eaeaf29F65A0EF04a054d086cd7CfE11cc96
FantomNFTFactoryPrivate deployed to: 0x09beC6E6B60edde250A1aF666224C0880d9C69C1
FantomNFTTradable deployed to: 0xdD0166b18abEcca7aF9AF3F7f6C00933Cd53b2a8
FantomNFTTradablePrivate deployed to: 0xC58B287e1BbA75DEc1114c3806C2584a2fC1cD8f
FantomTokenRegistry deployed to 0x7514BF1EB450fbD1f218DB4a091bfF62dcF23bce
FantomAddressRegistry deployed to 0x229EfdEA775d658C923f27A7FF7Cc81630C4F38F
FantomPriceFeed deployed to 0x8fE4871D958ccE068264003249D97abAb7406399
FantomArtTradable deployed to: 0x12b7a4D26a5376604BD82A55Cf6B2fE738152230
FantomArtTradablePrivate deployed to: 0xE1a5dcB5E5096bC308537bFA7FAF473c2Eaa6ace
FantomArtFactory deployed to: 0xC01b8cd8490FCD1063640D23f9ec77a1baE42Ea3
FantomArtFactoryPrivate deployed to: 0xAdF1d9F4fd0a6bfC0DbdED66dd81bE81e0b0F728

#####
