console.log('aaa');
process.stdout.write('bbb');

process.stdin.on('data',function(data){
    console.log(data.toString());
});