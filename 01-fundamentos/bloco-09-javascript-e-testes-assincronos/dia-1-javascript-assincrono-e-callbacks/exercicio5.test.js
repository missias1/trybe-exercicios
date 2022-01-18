const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

test('testa a função toUpperCase ', (done)=> {
uppercase('test', (str)=> {
  try{
    expect(str).toBe('TEST')
    done()
  }
  catch (error){
    done(error) 
  }
});
})