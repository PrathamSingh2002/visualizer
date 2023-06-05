import logo from './logo.svg';
import './App.css';
import './bar'
import { useEffect, useState } from 'react';
import Bar from './bar';

function App() {
  const[arr,carr]=useState([])
  const[l,cl]=useState(10)
  const slider=document.getElementById('slider')
  function slide(){
    cl(parseInt(slider.value))

  }
  function reset(){
    carr([])
    for(let i=0;i<l;i++){
      carr((a)=>[...a,Math.floor(Math.random()*80)])
    }
  }
  function resetcolor(){
    const el=document.getElementsByClassName('bar')
    for(let i=0;i<l;i++){
      el[i].style.backgroundColor='red'
    }  
  }
  useEffect(()=>{
    reset()
  },[l])
  
  function delay(ms){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        },ms);
    })
  }
  async function place(j,ht){
    var a=document.getElementById(`${j}`)
    a.style.height=`${ht}vh` 
    await delay(50) 
  }
  async function swap(j,i){
    var t=arr[j]
    arr[j]=arr[i]
    arr[i]=t
    delay(50)
    var a=document.getElementById(`${j}`)
    var b=document.getElementById(`${i}`)
    a.style.height=`${arr[j]}vh`
    b.style.height=`${arr[i]}vh`
  }
  async function comp(j,i){
    var a=document.getElementById(`${j}`)
    var b=document.getElementById(`${i}`)
    a.style.backgroundColor="blue"
    b.style.backgroundColor="blue"
    await delay(50)
    a.style.backgroundColor="red"
    b.style.backgroundColor="red"
  }
  async function merge(i,j,m){
    let left=[]
    let right=[]
    for(let k=0;k<m-i+1;k++){
      left.push(arr[i+k])
    }
    for(let k=0;k<j-m;k++){
      right.push(arr[m+k+1])
    }
    let a=0
    let b=0
    let c=i
    while(a<m-i+1 && b<j-m){
      await comp(i+a,m+b+1)
      if(left[a]<right[b]){
        arr[c]=left[a]
        a++
      }
      else{
        arr[c]=right[b]
        b++
      }
      await place(c,arr[c])
      c++
    }
    while(a<m-i+1){
      arr[c]=left[a]
      a++;
      await place(c,arr[c])
      c++
    }
    while(b<j-m){
      arr[c]=right[b]
      b++;
      await place(c,arr[c])
      c++
    }
    for(let k=i;k<=j;k++){
      document.getElementById(`${k}`).style.backgroundColor='green'
    }
  } 
  async function ms(i,j){
    if(i<j){
      let m=Math.floor((i+j)/2)
      await ms(i,m)
      await ms(m+1,j)
      await merge(i,j,m)
    }
  } 
  async function bbs(){
    for(let i=0;i<l;i++){
      for(let j=0;j<l-1-i;j++){
        await comp(j,j+1)
        if(arr[j]>arr[j+1]){
          await swap(j,j+1)
        }
      }
      document.getElementById(`${l-1-i}`).style.backgroundColor='green'
    }
  } 
  async function ss(){
    let x
    let e
    for(let i=0;i<l;i++){
      x=arr[i]
      e=i
      for(let j=i;j<l;j++){
        await comp(e,j)
        if(arr[j]<x){
          x=arr[j]
          e=j
        }
      }
      await swap(i,e)
      document.getElementById(`${i}`).style.backgroundColor='green'
    }
  }
  async function rs(){
      await count(1)
      await count(10)
  }
  async function count(p){
    const temp=new Array(10).fill(0)
    const c=[]
    for(let i=0;i<l;i++){
      temp[Math.floor(arr[i]/p)%10]++
      c.push(arr[i])
    }
    for(let i=1;i<10;i++){
      temp[i]+=temp[i-1]
    }
    for(let i=l-1;i>=0;i--){
      temp[Math.floor(c[i]/p)%10]--
      arr[temp[Math.floor(c[i]/p)%10]]=c[i]
      await place(temp[Math.floor(c[i]/p)%10],arr[temp[Math.floor(c[i]/p)%10]])
    }
    
  }
  async function is(){
    for(let i=0;i<l;i++){
      let j=i-1
      while(j>=0 && arr[j+1]<arr[j]){
        await comp(j,j+1)
        await swap(j,j+1)
        j--
      }
      for(let k=0;k<=i;k++){
        document.getElementById(`${k}`).style.backgroundColor='green'
      }
    }
  }
  async function piv(i,j){
    var t=i-1
    await swap(Math.floor(i+Math.random()*(j-i+1)),j)
    for(var u=i;u<j;u++){
      await comp(u,j)
      if(arr[u]<arr[j]){
        t++
        await swap(t,u)
        
       
      }
          }
    t++
    await comp(t,j)
    await swap(t,j)
    return t
  }
  async function quicksort(i,j){
    if(i==j){
      document.getElementById(`${i}`).style.backgroundColor='green'
    }
    if(i<j){
      var p=await piv(i,j)
      document.getElementById(`${p}`).style.backgroundColor='green'
      await quicksort(i,p-1)
      await quicksort(p+1,j)
    }
  }
  async function RadixSort(){
    const butt=document.getElementsByClassName('button')
    for(let i=0;i<butt.length;i++){
      butt[i].disabled=true
    }
    await rs()
    await delay(2000)
    for(let i=0;i<butt.length;i++){
      butt[i].disabled=false
    }
    resetcolor()
  }
  async function Bubblesort(){
    const butt=document.getElementsByClassName('button')
    for(let i=0;i<butt.length;i++){
      butt[i].disabled=true
    }
    await bbs()
    await delay(2000)
    for(let i=0;i<butt.length;i++){
      butt[i].disabled=false
    }
    resetcolor()
  }
  async function SelectionSort(){
    const butt=document.getElementsByClassName('button')
    for(let i=0;i<butt.length;i++){
      butt[i].disabled=true
    }
    await ss()
    await delay(2000)
    for(let i=0;i<butt.length;i++){
      butt[i].disabled=false
    }
    resetcolor()
  }
  async function InsertionSort(){
    const butt=document.getElementsByClassName('button')
    for(let i=0;i<butt.length;i++){
      butt[i].disabled=true
    }
    await is()
    await delay(2000)
    for(let i=0;i<butt.length;i++){
      butt[i].disabled=false
    }
    resetcolor()
  }
  async function Quick(){
    const butt=document.getElementsByClassName('button')
    for(let i=0;i<butt.length;i++){
      butt[i].disabled=true
    }
    await quicksort(0,l-1)
    await delay(2000)
    for(let i=0;i<butt.length;i++){
      butt[i].disabled=false
    }
    resetcolor()
    
  }
  async function MergeSort(){
    const butt=document.getElementsByClassName('button')
    for(let i=0;i<butt.length;i++){
      butt[i].disabled=true
    }
    await ms(0,l-1)
    await delay(2000)
    for(let i=0;i<butt.length;i++){
      butt[i].disabled=false
    }
    resetcolor()
    
  }
  return (
    <div className='full'>
    <div className='topbar'>
      <div id ='sec1'>
        <div id='logo'>Sorting Visualizer</div>                  
        <button  className='button' onClick={()=>reset()}>reset</button>                  
        <div className='drop'>
          <button className='button'>Algorithms</button> 
          <div className='dropi'>
            <button className='button' onClick={()=>Bubblesort()}>BubbleSort</button> 
            <button  className='button' onClick={()=>Quick()}>quickSort</button>                   
            <button  className='button' onClick={()=>SelectionSort()}>SelectionSort</button>                   
            <button  className='button' onClick={()=>InsertionSort()}>InsertionSort</button>                   
            <button  className='button' onClick={()=>MergeSort()}>MergeSort</button>                   
            <button  className='button' onClick={()=>RadixSort()}>RadixSort</button>                   
          </div>   
        </div>          
      </div>
      <div style={{display:'flex',flexDirection:'row'}}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',color:'white',fontFamily:'monospace',flexDirection:'column-reverse'}}>
          <input  className='button' id='slider' min='10' max='200'  type='range' onInput={()=>slide()}></input>
          Bars : {l}
        </div>
      </div>          
    </div>
    <div className='box' >
      {
        <>
          {arr.map((i,j)=><Bar len={l} id={j} ht={i}></Bar>)}
        </>
      }
      
    </div>
    </div>
  );
}
export default App;
