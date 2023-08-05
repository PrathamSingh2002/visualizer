function Bar(prop) {
  
  return (
      <div className="bar" id={prop.id} style={{width:`${Math.max(20,Math.min(50,800/prop.len))}%`,backgroundColor:'red',height:`${prop.ht}%`}}></div>
  );
}
export default Bar;
