/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var mass = [];
  var count = 0;
  for(let i = 0;i<preferences.length;i++){
    if( preferences[i]!==preferences[preferences[i]-1] ||
    preferences[preferences[i]-1]!==preferences[preferences[preferences[i]-1]-1] ||
    preferences[preferences[preferences[i]-1]-1] !==preferences[i] ){

      mass = preferences[preferences[preferences[i]-1]-1];
      console.log('mass: '+mass)
      console.log(preferences[i])
      if((mass-1)==i){
        count++;
        delete preferences[i];
        delete preferences[preferences[i]-1];
        delete preferences[preferences[preferences[i]-1]-1];
      }
      console.log('count: '+ count)
      
  }
  }
  return count;
};
