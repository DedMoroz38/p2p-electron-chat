# p2p-electron-chat

An Electron P2P-chat application with a power of Go

### Install

```bash
$ yarn
```

### Development

```bash
$ yarn app
```

### Test

Start the app
```bash
# This will automatically create a new host on the network
$ yarn app
```

In a separate terminal go to /libs/ and run:
```bash
# This will create another peer on the network
$ ./main
```

Based on the peer id, the one with a greater id will connect to the second. Go to https://github.com/DedMoroz38/Go-p2p-network to find more about the network setup.