# System Benchmark for NodeJS

Checks:
- Reading huge text files
- Writing huge text files
- Text encoding
- Text decoding
- Password hashing
- Password hash comprasion
- Image resize/blur
- Image generation
- Reading images
- Writing images
- Training XOR for Brain.js
- Training XOR for TensorFlow

Libraries used:
- fs
- brain.js
- @tensorflow/tfjs-node
- sharp
- bcrypt
- crypto

YouTube: [Air M1 (2020) vs Pro i5 (2019)](https://youtu.be/bZf77GLioV0)

## Here we go!
### Install dependencies
```bash
npm i
```

## Benchmark

### Full
Full test.
```bash
npm run full
```

### Only specific load 
How fast is your server with big text files, images, ML and encryption?
```bash
npm run loadtest
```

### Only load with requests Web-server
How fast is your server can response to queries?
```bash
npm run queries
```
