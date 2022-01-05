let { decodeConstructorArgs, encodeConstructorArgs } = require('./index.js');

const ENCODE = true;

/**
 * ENCODE
 */

let inputs = [
  {
    'name': 'addresses',
    'type': 'address[]',
    'data': ['0xffffffffffffffffffffffffffffffffffffffff', '0xF1E48f13768bD8114A530070b43257a63f24bb12']
  },
  {
    'name': 'bytes32s',
    'type': 'bytes32[]',
    'data': ['0xffffffffffffffffffffffffffffffffffffffff', '0xF1E48f13768bD8114A530070b43257a63f24bb12', '0xcccccccccccccccccccccccccccccccccccccccc']
  },
  {
    'name': 'bytes4s',
    'type': 'bytes4[]',
    'data': ['0xff', '0xF1E48f13']
  },
  {
    'name': 'strings',
    'type': 'string[]',
    'data': ['0xaa', '0xbb', '0xcc', '0xdd']
  },
  {
    'name': 'bytes',
    'type': 'bytes',
    'data': ['0xaa', '0xbb', '0xcc', '0xdd']
  }
];

function splitWords256(bytecode) {
  let words = [];
  for(let i = 0; i < bytecode.length / 64; i++) {
    words.push(bytecode.substring(64 * i, 64 * (i + 1)));
  }
  return words;
}


if (ENCODE) {
  const result = encodeConstructorArgs(inputs);
  console.log('encodeConstructorArgs result', result);
  const words = splitWords256(result);
  console.log('words', words);
}

