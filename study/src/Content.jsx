import React,{useState,useEffect} from "react";
const Content=()=>{
  const tabs=['posts','albums','comments'];
  const[title,setTitle]=useState('');
  const[type,setType]=useState('posts');
  const[posts,setPosts]=useState([]);
  const[scroll,setScroll]=useState(false);
  const GoToTop=()=>{
    window.scrollTo({
      behavior:"smooth",
      top:0,
    })
  }
  useEffect(()=>{
     fetch(`https://jsonplaceholder.typicode.com/${type}`)
     .then((res)=>res.json())
     .then((data)=>{
      setPosts(data);
     })
     .catch((error)=>{
      console.error('Error fetching data',error);
     })
  },[type])
  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY>=200){
        setScroll(true);
      }else{
        setScroll(false);
      }
    }
    window.addEventListener('scroll',handleScroll);
    return()=>{
      window.removeEventListener('scroll',handleScroll);
    }
  })
  return(
    <div>
      {tabs.map((all)=>(
        <button
        onClick={()=>setType(all)}

        style={type===all?
        {
          color:"#fff",
          backgroundColor:"#333",
        }:{

        }
        }
        >
          {all}
        </button>
      ))}
      <input type="text" value={title} onChange={(e)=>{
        setTitle(e.target.value)
      }} />
      <ol>
        {posts.map((item)=>(
          <li key={item.id}>{item.title||item.name}</li>
        ))}
      </ol>
      {scroll&&(
        <button
        onClick={GoToTop}
        style={{
          position:'fixed',
          right:20,
          bottom:20,
        }}
        >Go to top</button>
      )}
    </div>
  )
}
export default Content;