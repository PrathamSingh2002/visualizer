function Bar(prop) {
  
  return (
      <div className="bar" id={prop.id} style={{width:`${Math.min(50,800/prop.len)}px`,backgroundColor:'red',height:`${prop.ht}vh`}}></div>
  );
}
export default Bar;
