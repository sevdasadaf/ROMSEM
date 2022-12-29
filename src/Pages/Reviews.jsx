import React, {useEffect, useState} from 'react';
// import { Pagination } from 'antd';
// import ReactPaginate from 'react-paginate';

import { getReview } from '../server/Review';

import style from '../Style/Review.module.css'
import ReviewModal from '../Components/Review/ReviewModal';


const Reviews = () => {
  const [comments, setComments] = useState([])

  const getAllReview = () => {
    getReview()
    .then(res => setComments(res.data))

    .catch(err => console.log(err))
    .finally(() => {})
  }
  
  useEffect(()=> {getAllReview()}, [])
  
  
 
  
  return (
    <>
    <div className={style.section}>
       
        <div className={style.header}>
           <h1>Отзывы</h1>
           <ReviewModal onFinished={getAllReview}/>  
        </div>
       
        <div className={style.reviews}> 
            
       {
         comments.map((comment) => {
       return (

       <div className={style.review} key={comment.id}>
            
            <div className={style.username}>
                <span>{comment.user_name}</span> 
                <small>02.24.21</small>
            </div>
            
            <div className={style.comment}>
                <p>{comment.review}</p>
            </div>
       </div>
       
       )
         })
       }

        </div>
    </div>
      
    </>
  )
}

export default Reviews