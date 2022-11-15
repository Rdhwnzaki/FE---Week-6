import React,{useState,useEffect,Link} from 'react'
import axios from 'axios'
import styles from'./Product.module.css'
import Alert from "../../components/Alert";

export default function Product() {
  const [data,setData] = useState([])
  const [photo_product,setPhoto] = useState(null)
  const [message,setMessage]  = useState({
    title: "",
    text: "",
    type: "success"
  })
  const [messageShow,setMessageShow]  = useState(true)
  const [inputData, setInputData] = useState({
    name_product: "",
    stock_product: "",
    price_product: "",
    category_id: "",
    search: ""
  })
  const [sortBy,setSortBy] = useState("name_product")
  const [sort,setSort] = useState("asc")
  const [selected,setSelected] = useState(null)
  const [onedit,setOnedit] = useState(false)
  const [temp,setTemp] = useState(null)

  const deleteData = () => {
    axios.delete(`http://localhost:3000/products/${selected}`)
    .then((res)=>{
        console.log("delete data success")
        console.log(res)
        setMessageShow(true)
        setMessage({title:"success",text:"delete data success",type:"success"})
        messageTime()
        getData()
      })
      .catch((err)=>{
        console.log("delete data fail")
        console.log(err)
        setMessageShow(true)
      setMessage({title:"fail",text:"delete data fail",type:"danger"})
      messageTime()
    })
  }

  const editForm = (item) =>{
    console.log(item)
    setTemp(item)
    setInputData({
      ...inputData,
      name_product: item.name_product,
      stock_product: item.stock_product,
      price_product: item.price_product,
      })  }

  useEffect(()=>{
    selected ? setOnedit(true) : setOnedit(false)
    !selected  && setInputData({
      ...inputData,
      name_product: "",
      stock_product: "",
      price_product: "",
      })
      !selected && setPhoto(null)
  },[selected])

  const messageTime = () =>{
    setTimeout(()=>setMessageShow(false),3000)
  }
  useEffect(()=>{
    console.log("checked", sortBy)
    getData()
  },[sortBy,sort,inputData.search])
  useEffect(()=>{
    getData()
  },[])

  let users = `http://localhost:3000/products?sortby=${sortBy}&sort=${sort}&search=${inputData.search}`
  const getData = ()=> {
    axios.get(users)
    .then((res)=>{
        console.log("get data success")
        console.log(res.data.data)
        res.data && setData(res.data.data)
        !selected && setMessageShow(true)
        !selected && setMessage({title:"success",text:"get data success",type:"success"})
        !selected && messageTime()
        setSelected(null)
      })
      .catch((err)=>{
        console.log("get data fail")
        console.log(err)
         setData([])
        setMessageShow(true)
      setMessage({title:"fail",text:"get data fail",type:"danger"})
      messageTime()
    })
  }

  const postForm = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("name_product",inputData.name_product)
    formData.append("stock_product",inputData.stock_product)
    formData.append("price_product",inputData.price_product)
    formData.append("category_id",inputData.category_id)
    formData.append("photo_product",photo_product)
    console.log(formData)
    if(!selected){
      axios
      .post('http://localhost:3000/products',formData,{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then((res)=>{
        console.log("input data success")
      console.log(res)
      setMessageShow(true)
      setMessage({title:"success",text:"post data success",type:"success"})
      messageTime()
      getData()
    }).catch((err)=>{
      console.log("input data fail")
      setMessageShow(true)
      setMessage({title:"fail",text:"post data fail",type:"danger"})
      messageTime()
      console.log(err)
    })
  } else {
    axios
    .put(`http://localhost:3000/products/${selected}`,formData,{
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((res)=>{
      console.log("input data success")
      console.log(res)
      setMessageShow(true)
      setMessage({title:"success",text:"update data success",type:"success"})
      messageTime()
      getData()
  }).catch((err)=>{
    console.log("input data fail")
    setMessageShow(true)
      setMessage({title:"fail",text:"post data fail",type:"danger"})
      messageTime()
    console.log(err)
  })

  }
}
  const handlePhoto = (e) => {
    setPhoto(e.target.files[0])
    console.log(e.target.files[0])
  }

  const handleChange = (e) =>{
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value
    })
    console.log(data)
  }
  return (
    <div>
      {/* post data */}
      <form onSubmit={postForm} className="container mt-3 p-2 bg-new shadow">
        <div className="container">
        <div className="row mb-2">
          <div className="col-6">
        <input className="form-control myfont3"  type="text" value={inputData.name_product} name="name_product" onChange={handleChange} placeholder="Name"/>            
          </div>
          <div className="col-6">
        <input  className="form-control myfont3" type="number" value={inputData.stock_product} name="stock_product" onChange={handleChange} placeholder="Stock"/>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-6">
        <input  className="form-control myfont3" type="number" value={inputData.price_product} name="price_product" onChange={handleChange} placeholder="Price"/>
          </div>
          <div className="col-6">
        <input  className="form-control myfont3" type="number" value={inputData.category_id} name="category_id" onChange={handleChange} placeholder="Category"/>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-6">
        <input className="form-control"  type="file" name="photo_product" onChange={handlePhoto} placeholder="photo" required style={{height:"35px"}}/>
          </div>
        </div>
        </div>
          {
            onedit ? 
            <button className='btn btn-outline-danger' type="submit" style={{marginLeft:"15px"}}>
                update
              </button>            
            :
            <button className='btn btn-outline-danger' type="submit" style={{marginLeft:"15px"}}>
                Post New Product
              </button>
          }
      </form>
      {/* filter */}
      <div className="container bg-new mt-2 p-2 rounded mb-2 shadow">
        <h6 className='myfont3'>Filter</h6>
      <div className="container d-flex flex-row">
        <div className="">
          <div className={`btn ${sortBy=="name_product"? "btn-danger":"btn-outline-danger"} ms-1`} onClick={()=>setSortBy("name_product")} style={{width:"100px",borderRadius:"10px"}}><h6 className='myfont3 mt-1'>Name</h6></div>
          <div className={`btn ${sortBy=="stock-product"? "btn-danger":"btn-outline-danger"} ms-3`} onClick={()=>setSortBy("stock_product")} style={{width:"100px",borderRadius:"10px"}}><h6 className='myfont3 mt-1'>Stock</h6></div>
          <div className={`btn ${sortBy=="price_product"? "btn-danger":"btn-outline-danger"} ms-3`} onClick={()=>setSortBy("price_product")} style={{width:"100px",borderRadius:"10px"}}><h6 className='myfont3 mt-1'>Price</h6></div>
        </div>
        <div className="ms-5 border-start border-dark">
          <div className={`btn ${sort=="asc"? "btn-danger":"btn-outline-danger"} ms-5`} onClick={()=>setSort("asc")} style={{width:"100px",borderRadius:"10px"}}><h6 className='myfont3 mt-1'>ASC</h6></div>
          <div className={`btn ${sort=="desc"? "btn-danger":"btn-outline-danger"} ms-3`} onClick={()=>setSort("desc")} style={{width:"100px",borderRadius:"10px"}}><h6 className='myfont3 mt-1'>DESC</h6></div>
        </div>
        <div className="search ms-2">
        <input type="text" className="form-control myfont3 rounded-pill ms-5" value={inputData.search} name="search" onChange={handleChange} placeholder="Search" style={{width:"530px"}}/>
        </div>
      </div>
      </div>
      {/* <Link to="/postProduct">
      <button className='btn btn-outline-danger mb-5' style={{marginLeft:"99px"}}>Create New Product</button>
      </Link> */}


      {/* get data */}
      <table className='table table-striped table-hover container shadow' style={{color:"#DB3022;"}}>
        <thead>
          <tr>
            <th className='myfont3'>Number</th>
            <th className='myfont3'>Name</th>
            <th className='myfont3'>Stock</th>
            <th className='myfont3'>Price</th>
            <th className='myfont3'>Photo</th>
            <th className='myfont3'>Option</th>
            <th className='myfont3'>Option</th>
          </tr>
        </thead>
        <tbody className='table-group-divider'>
          {data.map((item,index)=>(
            <tr key={index+1} className={`${item.id_product === selected ? "bg-info" : "bg-white"}`} onClick={item.id_product === selected ? ()=>setSelected(null) : ()=>
            (setSelected(item.id_product),editForm(item))
            }>
            <td className='myfont3'>
              {index+1}
            </td>
            <td className='myfont3'>
              {item.name_product}
            </td>
            <td className='myfont3'>
              {item.stock_product}
            </td>
            <td className='myfont3'>
              Rp.{item.price_product}
            </td>
            <td className='myfont3'>
              <img src={item.photo_product} className={styles.photo} />
            </td>
            <td>
              <button className='btn btn-outline-danger mx-3'>Update</button>
            </td>
            <td>
            <button className='btn btn-outline-secondary' onClick={()=>deleteData()}>Delete</button>
            </td>
          </tr>
          ))
          }
        </tbody>
      </table>

      {/* alert */}
      {messageShow && 
    <Alert title={message.title} text={message.text}  type={message.type} />
    }


    </div>
  )
}
