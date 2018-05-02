import runServer from './application';

const port = 3000;

runServer().listen(port, () => {
  console.log('Example blog listn on port 3000');
});
