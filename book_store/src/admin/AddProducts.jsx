import React , {useState} from 'react';
import { Container,Row ,Col ,Form ,FormGroup } from 'reactstrap';
import { toast } from 'react-toastify';

import {db ,storage} from "../firebase.config";
import { uploadBytesResumable,ref , getDownloadURL } from 'firebase/storage';
import { collection ,addDoc } from 'firebase/firestore';

import { useNavigate } from 'react-router-dom';

const AddProducts = () => {

  const navigate = useNavigate()

  const [enterTitle ,setEnterTitle] = useState('')
  const [enterAuthor ,setEnterAuthor] = useState('')
  const [enterShortDesc ,setEnterShortDesc] = useState('')
  const [enterDescription ,setEnterDescription] = useState('')
  const [enterCategory ,setEnterCategory] = useState('')
  const [enterPrice ,setEnterPrice] = useState('')
  const [enterProductImg ,setEnterProductImg] = useState(null);
  const [loading,setLoading] = useState(false)

  const addProduct = async(e) =>{
    e.preventDefault()
    setLoading(true)
    // === add product to the firebase database ===
    try {
      const docRef = await collection(db,'products')

      const storageRef = ref(storage,`productImages/${Date.now() + enterProductImg.name}`)
      const uploadTask = uploadBytesResumable(storageRef ,enterProductImg)

      uploadTask.on(()=>{
        toast.error('image not uploaded!')
      }, ()=> {
          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL)=>{
            await addDoc(docRef, {
              productName: enterTitle,
              author: enterAuthor,
              shortDesc : enterShortDesc,
              description : enterDescription,
              category : enterCategory,
              price: enterPrice,
              imgUrl : downloadURL,
            })
          })
          
      })

      setLoading(false)
      toast.success('product successfully added!');
      navigate("/dashboard/all-products");
    }catch(err) {
      setLoading(false)
      toast.error("product not added!");
    }
    

  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
           {
            loading ? (
              <h4 className='py-5'>Loading........</h4>
            ) : (<>
              <h4 className='mb-5'>Add Product</h4>
            <Form onSubmit={addProduct}>
              <FormGroup className='form__group'>
                <span className='text-black'>Product title</span>
                <input type="text" placeholder='title' 
                value={enterTitle} onChange={e=> setEnterTitle(e.target.value)} required/>
              </FormGroup>
              <FormGroup className='form__group'>
                <span className='text-black'>Author</span>
                <input type="text" placeholder='author' 
                value={enterAuthor} onChange={e=> setEnterAuthor(e.target.value)} required/>
              </FormGroup>
              <FormGroup className='form__group'>
                <span className='text-black'>Short Description</span>
                <input type="text" placeholder='description......' 
                 value={enterShortDesc} onChange={e=> setEnterShortDesc(e.target.value)} required/>
              </FormGroup>
              <FormGroup className='form__group'>
                <span className='text-black'>Description</span>
                <input type="text" placeholder='description......' 
                 value={enterDescription} onChange={e=> setEnterDescription(e.target.value)} required/>
              </FormGroup>

              <div className='d-flex align-items-center justify-content-between gap-5'>
              <FormGroup className='form__group w-50'>
                <span className='text-black'>Price</span>
                <input type="number" placeholder='$' 
                 value={enterPrice} onChange={e=> setEnterPrice(e.target.value)} required/>
              </FormGroup>
              <FormGroup className='form__group w-50'>
                <span className='text-black'>Category</span>
                <select className='w-100 p-2'
                   value={enterCategory} onChange={e=> setEnterCategory(e.target.value)} required>
                  <option>Select category</option>
                  <option value="cookbook">Cookbook</option>
                  <option value="horror">Horror</option>
                  <option value="manga">Manga</option>
                  <option value="law">Law</option>
                  <option value="romance">Romance</option>
                  
                </select>
              </FormGroup>
              </div>

              <div>
              <FormGroup className='form__group'>
                <span className='text-black'>Product Image</span>
                <input type="file" onChange={e=> setEnterProductImg(e.target.files[0])} required />
              </FormGroup>
              </div>

              <button className="buy__btn" type='submit'>Add Product</button>
            </Form>
            </>)
           }
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AddProducts