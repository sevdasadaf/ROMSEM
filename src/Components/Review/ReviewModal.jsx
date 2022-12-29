import React,  { useState } from 'react';
import { Button, Modal, Input, Form } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { storeReview } from '../../server/Review';
import style from '../../Style/ReviewModal.module.css'

const ReviewModal = ({onFinished}) => {
   
    //antdesign
    const {Item, useForm} = Form;
    const [storeForm] = useForm()
    const [loading, setLoading] = useState(false)

    //modal
    const [isModalOpen, setIsModalOpen] = useState(false)
    const showModal = () => {
        setIsModalOpen(!isModalOpen)
    }
    
    const handleCancel = () => {
        setIsModalOpen(false)
    }
    
    //submit
    const onSubmit = () => {
     setLoading(true)

     const data = storeForm.getFieldsValue()
     storeReview(data)
     .then(()=> {
       onFinished()
       showModal()
       storeForm.resetFields()
     })
     .catch(err => console.log(err))
     .finally(() => {setLoading(false)})
   }



  return (
    <div className={style.modal}>
     <Button className={style.hover} onClick={showModal}> + Добавить отзыв </Button>
     <Modal
     title = "Ваш обзор"
     open = {isModalOpen}
     onOk={storeForm.submit}
     onCancel={handleCancel}
     confirmLoading = {loading}
     >
        
        
        <Form layout='vertical' form={storeForm} onFinish={onSubmit}>
            <Item
            label='имя пользователя:'
            name='user_name'
            rules={[{ required: true, message: 'Пожалуйста, введите ваше имя пользователя!' }]}>
           <Input type={'text'} required= {true}/>
           </Item>
           
           <Item
           label='отзыв:'
           name='review'
           rules={[{ required: true, message: 'Пожалуйста, оставьте свой отзыв!' }]}>
           <TextArea className={style.text} type={'text'} />
           </Item>
        </Form>
     </Modal>
    </div>
  )
}

export default ReviewModal