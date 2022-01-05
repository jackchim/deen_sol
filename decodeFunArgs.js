let { decodeConstructorArgs, decodeFunctionArgs } = require('./index.js');

const DECODE = true;

let abiMock = {
  'abi': [
    {
        "inputs":[
            {
                "internalType":"address",
                "name":"_tokenPaired",
                "type":"address"
            },
            {
                "internalType":"uint256",
                "name":"_amountIn",
                "type":"uint256"
            },
            {
                "internalType":"address",
                "name":"_tknToBuy",
                "type":"address"
            },
            {
                "internalType":"uint256",
                "name":"_amountOutMin",
                "type":"uint256"
            }
        ],
        "name":"configureSnipe",
        "outputs":[
            {
                "internalType":"bool",
                "name":"success",
                "type":"bool"
            }
        ],
        "stateMutability":"nonpayable",
        "type":"function"
    }
  ]
};
let bytecodeMock = '72cf0d5800000000000000000000000036ae10a4d16311959b607ee98bc4a8a653a33b1f00000000000000000000000000000000000000000000000000038d7ea4c6800000000000000000000000000053e562b9b7e5e94b81f10e96ee70ad06df3d265700000000000000000000000000000000000000000000000000038d7ea4c68000';

/* console.log(abiMock)
 * console.log(bytecodeMock) */
if (DECODE) {
  let result = decodeFunctionArgs(abiMock.abi, bytecodeMock);
  console.log('decodeFunctionArgs result', result);
}
