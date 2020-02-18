import fetch from 'isomorphic-unfetch'
//very good ****

function HomePage({ stars }) {
    return <div>Next stars: {stars}</div>
  }
  
  HomePage.getInitialProps = async ({ req }) => {
   const res = await fetch('http://localhost:3000/api/22')
    // setTimeout(console.log,2000,"timeoutaaa")
    let json=await res.text().then((value)=>JSON.parse(value))
    let ret=json
    console.log(ret)
    return { stars: json.Post }
  } 
  
  export default HomePage