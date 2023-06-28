module.exports = function (a) {
    console.log('================');
    console.log(a);
    console.log('================');
    return `export default '${a.replace(/\n/g,'')}'`;
  };
  