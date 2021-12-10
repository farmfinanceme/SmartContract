/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { RewardPool, RewardPoolInterface } from "../RewardPool";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_mainToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "RewardDistributed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "WithdrawRequested",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PAUSER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "distributeReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getBalanceOfRewardPool",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "lastWithdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mainToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "requestWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stakeAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "withdraws",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isWithdrawn",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052682086ac35105260000060045534801561001d57600080fd5b50604051620011e4380380620011e483398101604081905261003e9161014d565b6001805460ff19168155600255600580546001600160a01b0319166001600160a01b0383161790556100716000336100a1565b61009b7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a336100a1565b5061017b565b6100ab82826100af565b5050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff166100ab576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556101093390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60006020828403121561015e578081fd5b81516001600160a01b0381168114610174578182fd5b9392505050565b611059806200018b6000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c8063624d7b72116100a257806391d148541161007157806391d14854146102b7578063a217fddf146102ca578063d547741f146102d2578063e63ab1e9146102e5578063f0e258361461030c57600080fd5b8063624d7b7214610269578063745400c9146102895780638456cb591461029c57806385107367146102a457600080fd5b80633f4ba83a116100e95780633f4ba83a1461019c5780633fc15f15146101a457806343bcc29b146101cf57806355466c37146101e25780635c975abb1461025e57600080fd5b806301ffc9a71461011b578063248a9ca3146101435780632f2ff15d1461017457806336568abe14610189575b600080fd5b61012e610129366004610e34565b610314565b60405190151581526020015b60405180910390f35b610166610151366004610df1565b60009081526020819052604090206001015490565b60405190815260200161013a565b610187610182366004610e09565b61034b565b005b610187610197366004610e09565b610376565b6101876103f9565b6005546101b7906001600160a01b031681565b6040516001600160a01b03909116815260200161013a565b6101876101dd366004610e74565b61042f565b61022c6101f0366004610df1565b6007602052600090815260409020805460018201546002830154600384015460049094015492936001600160a01b039092169290919060ff1685565b604080519586526001600160a01b0390941660208601529284019190915260608301521515608082015260a00161013a565b60015460ff1661012e565b610166610277366004610db7565b60086020526000908152604090205481565b610187610297366004610df1565b61069c565b610187610848565b6006546101b7906001600160a01b031681565b61012e6102c5366004610e09565b61087b565b610166600081565b6101876102e0366004610e09565b6108a4565b6101667f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81565b6101666108ca565b60006001600160e01b03198216637965db0b60e01b148061034557506301ffc9a760e01b6001600160e01b03198316145b92915050565b6000828152602081905260409020600101546103678133610958565b61037183836109bc565b505050565b6001600160a01b03811633146103eb5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6103f58282610a40565b5050565b7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a6104248133610958565b61042c610aa5565b50565b60015460ff16156104525760405162461bcd60e51b81526004016103e290610f2e565b600061045e8133610958565b6002805414156104b05760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016103e2565b600280556001600160a01b0382166000908152600860205260408120546104d79042610faf565b6000858152600760205260409020600201549091506201518082116104fb57600080fd5b600454811161050957600080fd5b60026206978083111561051e5750600c610566565b620546008311156105315750600c610566565b6203f48083111561054457506016610566565b6202a30083111561055757506020610566565b620151808311156105665750602a5b600061057d60646105778585610b38565b90610b4b565b9050600061058b8483610b57565b90506105956108ca565b81116105a057600080fd5b60055460405163a9059cbb60e01b81526001600160a01b038981166004830152602482018490529091169063a9059cbb90604401602060405180830381600087803b1580156105ee57600080fd5b505af1158015610602573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106269190610dd1565b50600088815260076020908152604091829020600401805460ff1916600117905581518a815233918101919091529081018290524260608201527f602ab809fa82d3a742a4f9a33cdd154988d8b0f578ee4dc91de3dc412bf026b99060800160405180910390a150506001600255505050505050565b60015460ff16156106bf5760405162461bcd60e51b81526004016103e290610f2e565b6002805414156107115760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016103e2565b600280553360009081526008602052604090205462015180906107349042610faf565b1161073e57600080fd5b600454811161074c57600080fd5b600061075760035490565b6040805160a08101825282815233602080830182815283850188815242606080870182815260006080808a018281528c8352600789528b83209a518b55965160018b0180546001600160a01b0319166001600160a01b03909216919091179055945160028a01559051600389015593516004909701805460ff1916971515979097179096558483526008845291869020829055855187815292830193909352938101879052918201929092529192507fdb2996feda86e47ca5f67853152092a6550eed65751f9e2d37b2b8daa4258e65910160405180910390a161083f600380546001019055565b50506001600255565b7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a6108738133610958565b61042c610b63565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b6000828152602081905260409020600101546108c08133610958565b6103718383610a40565b6000806108d78133610958565b6005546040516370a0823160e01b81523060048201526001600160a01b03909116906370a082319060240160206040518083038186803b15801561091a57600080fd5b505afa15801561092e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109529190610e5c565b91505090565b610962828261087b565b6103f55761097a816001600160a01b03166014610bb9565b610985836020610bb9565b604051602001610996929190610e86565b60408051601f198184030181529082905262461bcd60e51b82526103e291600401610efb565b6109c6828261087b565b6103f5576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556109fc3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b610a4a828261087b565b156103f5576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60015460ff16610aee5760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b60448201526064016103e2565b6001805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6000610b448284610f90565b9392505050565b6000610b448284610f70565b6000610b448284610faf565b60015460ff1615610b865760405162461bcd60e51b81526004016103e290610f2e565b6001805460ff1916811790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25833610b1b565b60606000610bc8836002610f90565b610bd3906002610f58565b67ffffffffffffffff811115610bf957634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610c23576020820181803683370190505b509050600360fc1b81600081518110610c4c57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610c8957634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a9053506000610cad846002610f90565b610cb8906001610f58565b90505b6001811115610d4c576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110610cfa57634e487b7160e01b600052603260045260246000fd5b1a60f81b828281518110610d1e57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060049490941c93610d4581610ff6565b9050610cbb565b508315610b445760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016103e2565b80356001600160a01b0381168114610db257600080fd5b919050565b600060208284031215610dc8578081fd5b610b4482610d9b565b600060208284031215610de2578081fd5b81518015158114610b44578182fd5b600060208284031215610e02578081fd5b5035919050565b60008060408385031215610e1b578081fd5b82359150610e2b60208401610d9b565b90509250929050565b600060208284031215610e45578081fd5b81356001600160e01b031981168114610b44578182fd5b600060208284031215610e6d578081fd5b5051919050565b60008060408385031215610e1b578182fd5b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351610ebe816017850160208801610fc6565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351610eef816028840160208801610fc6565b01602801949350505050565b6020815260008251806020840152610f1a816040850160208701610fc6565b601f01601f19169190910160400192915050565b60208082526010908201526f14185d5cd8589b194e881c185d5cd95960821b604082015260600190565b60008219821115610f6b57610f6b61100d565b500190565b600082610f8b57634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615610faa57610faa61100d565b500290565b600082821015610fc157610fc161100d565b500390565b60005b83811015610fe1578181015183820152602001610fc9565b83811115610ff0576000848401525b50505050565b6000816110055761100561100d565b506000190190565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220c181981d3987f710111e2f83ea7ea885ec3175724ee5e8f036a55e9db88512bb64736f6c63430008040033";

export class RewardPool__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _mainToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RewardPool> {
    return super.deploy(_mainToken, overrides || {}) as Promise<RewardPool>;
  }
  getDeployTransaction(
    _mainToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_mainToken, overrides || {});
  }
  attach(address: string): RewardPool {
    return super.attach(address) as RewardPool;
  }
  connect(signer: Signer): RewardPool__factory {
    return super.connect(signer) as RewardPool__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RewardPoolInterface {
    return new utils.Interface(_abi) as RewardPoolInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RewardPool {
    return new Contract(address, _abi, signerOrProvider) as RewardPool;
  }
}